import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './_guards/auth.guard'

import { HomeComponent } from './_pages/home/home.component'
import { LoginComponent } from './_pages/login/login.component'
import { UserProfileComponent } from './_pages/user/profile/user-profile.component'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, data:{title : "Home"} },
    { path: 'login', component: LoginComponent },
    { path: 'user/profile/:id', component: UserProfileComponent},

    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
