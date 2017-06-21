import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './_guards/auth.guard'

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { UserProfileComponent } from './user/profile/user-profile.component'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user/profile/:id', component: UserProfileComponent},

    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
