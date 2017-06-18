import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialUIModule } from './app.materialUI.module'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { NavBarComponent } from './_components/navigation/nav-bar/navigation.component.navbar'

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
    BrowserAnimationsModule,
    MaterialUIModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
  ],
  providers: [
    AuthGuard,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
