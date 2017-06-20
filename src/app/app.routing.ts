import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './_guards/auth.guard'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
