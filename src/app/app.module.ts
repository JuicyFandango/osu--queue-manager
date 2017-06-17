import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'

import { routing } from './app.routing'

import { AuthGuard } from './_guards/auth.guard'

// Services
import { UserService } from './_services/user.service'
import { LoginService } from './_services/login.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  providers: [
    AuthGuard,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
