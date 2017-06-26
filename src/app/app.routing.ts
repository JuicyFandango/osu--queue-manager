import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './_guards/auth.guard'

import { HomeComponent } from './_pages/home/home.component'
import { LoginComponent } from './_pages/login/login.component'
import { UserProfileComponent } from './_pages/user/profile/user-profile.component'
import { BeatmapsetDetailComponent } from './_pages/beatmapset/detail/beatmapset-detail.component'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user/profile/:id', component: UserProfileComponent },
    { path: 'beatmapset/:id' , component: BeatmapsetDetailComponent },

    { path: '**', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(appRoutes);
