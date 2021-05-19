import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afauth: AngularFireAuth, public db: AngularFirestore, public router: Router) {
    this.afauth.authState.subscribe(res => {
      if (res) {
        if (!res.emailVerified) {
          this.sendCode()
        }
        else {
          if (!this.getCustomer()) {
            this.router.navigateByUrl("/")
            this.updateUser(res.uid, { verified: res.emailVerified }).then(updateRes => {
              this.getUserDataFromDb(res.uid).subscribe((res: any) => {
                localStorage.setItem("customer", JSON.stringify(res))
                localStorage.setItem('uid', res.uid)
              })
            })
          }
          localStorage.setItem("uid", res.uid)
        }
      }
    })
  }

  signin(data: any) {
    // this.common.startLoader()
    return this.afauth.signInWithEmailAndPassword(data.email, data.password).then((res: any) => {
      console.log("sigin response", res)
      if (res.user.emailVerified) {
        this.isUserValid({ uid: res.user.uid, ...data }).subscribe((userRes: any) => {
          console.log(userRes)
          localStorage.setItem("customer", JSON.stringify(userRes))
          localStorage.setItem('uid', res.user.uid)
          this.router.navigateByUrl("/")
        })
      }
      else {
        this.sendCode()
        this.logout()
        // this.common.stopLoader()
      }
    }).catch(err => {
      alert(err.message)
      // this.common.toast(err.message)
      // this.common.stopLoader()
    })
  }

  signup(data: any) {
    // this.common.startLoader()
    return this.afauth.createUserWithEmailAndPassword(data.email, data.password).then((res: any) => {
      console.log("signup res", res)
      let timestamp = firebase.firestore.Timestamp.now()
      delete data.password
      let tempData = { timestamp: timestamp, verified: res.user.emailVerified, uid: res.user.uid, ...data }
      this.setUserInDb(tempData)
      this.sendCode()
    }).catch(err => {
      alert(err)
      console.log("signup error", err)
    }).finally(() => {
      // this.common.stopLoader()
    })
  }

  setUserInDb(data: any) {
    return this.db.collection("users").doc(data.uid).set(data)
  }

  updateUser(id: string, data: any) {
    console.log(data, id)
    return this.db.collection("users").doc(id).update(data)
  }

  sendCode() {
    this.afauth.currentUser.then((res: any) => {
      res.sendEmailVerification().then((verificationRes: any) => {
        // this.common.toast("Please Verify your email! Check your inbox!")
        alert("Please Verify your email! Check your inbox!")
        this.router.navigateByUrl("/auth")
      })
    })
  }

  getUid() {
    return localStorage.getItem("uid")
  }

  getCustomer() {
    return JSON.parse(localStorage.getItem('customer') || '{}');
  }

  isUserValid(data: any) {
    return this.db.collection("users").doc(data.uid).get().pipe(
      map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      })
    )
  }

  getUserDataFromDb(uid: string) {
    return this.db.collection("users").doc(uid).get().pipe(
      map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      })
    )
  }

  resetPassword(email: any) {
    // this.common.startLoader()
    this.afauth.sendPasswordResetEmail(email).then(res => {
      // this.common.toast("Please Check Your Email!")
      this.router.navigateByUrl("/auth")
      // this.common.stopLoader()
    }).catch(err => {
      console.log(err)
      // this.common.toast(err)
      // this.common.stopLoader()
    })
  }

  logout() {
    localStorage.removeItem("uid")
    localStorage.removeItem("customer")
    this.router.navigateByUrl("/auth")
    this.afauth.signOut()
    // this.common.toast("Logout Successful!")
  }

}
