////////////////////////////////////////////////////////////////////////////////
// Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialUIModule } from './_modules/materialUI.module'
// Modules - Service Modules
import { ServicesModule } from './_modules/services.modules'
////////////////////////////////////////////////////////////////////////////////
// Components
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { NavBarComponent } from './_components/navigation/nav-bar/navbar.navigation.component'
import { BeatmapCardComponent } from './_components/beatmapset-card/beatmapset-card.component'
////////////////////////////////////////////////////////////////////////////////
// Extra
import { routing } from './app.routing'
import { AuthGuard } from './_guards/auth.guard'
////////////////////////////////////////////////////////////////////////////////

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MaterialUIModule,
    ServicesModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    BeatmapCardComponent,
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
