import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { TabComponent } from './tab/tab.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SwiperModule,
    ],
    declarations: [
        HeaderComponent,
        LoaderComponent,
        SkeletonComponent,
        TabComponent,
        ToastComponent
    ],
    exports: [
        HeaderComponent,
        LoaderComponent,
        SkeletonComponent,
        TabComponent,
        ToastComponent
    ]
})

export class SharedModule { }
