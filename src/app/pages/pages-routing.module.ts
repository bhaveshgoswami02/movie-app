import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages.module').then(m => m.PagesComponentModule),
        children: [
            {
                path: '',
                loadChildren: () => import('./home/home.module').then(m => m.HomeComponentModule),
            },
            {
                path: 'media/:mediaType',
                loadChildren: () => import('./all-medias/all-medias.module').then(m => m.AllMediasComponentModule),
            },
            {
                path: 'media/:mediaType/:moreLikeType/:id',
                loadChildren: () => import('./all-medias/all-medias.module').then(m => m.AllMediasComponentModule),
            },
            {
                path: 'movies',
                loadChildren: () => import('./all-movies/all-movies-module').then(m => m.AllMoviesComponentModule),
            },
            {
                path: 'tv',
                loadChildren: () => import('./all-tv/all-tv-module').then(m => m.AllTvComponentModule),
            },
            {
                path: 'edit-profile',
                loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileComponentModule),
            },
            {
                path: 'detail/:mediaType/:id',
                loadChildren: () => import('./movie-details/movie-details.module').then(m => m.MovieDetailsComponentModule),
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileComponentModule)
            },
            {
                path: 'search',
                loadChildren: () => import('./search/search.module').then(m => m.SearchComponentModule)
            },
            {
                path: 'subscription',
                loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionComponentModule)
            },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
