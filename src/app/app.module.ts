////////////////////////////////////////////////////////////////////////////////
// Modules - External
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialUIModule } from './_modules/materialUI.module'
////////////////////////////////////////////////////////////////////////////////
// Modules - Service Modules
import { ServicesModule } from './_services/services.modules'
////////////////////////////////////////////////////////////////////////////////
// Pages
import { UserProfileComponent } from './_pages/user/profile/user-profile.component'
import { LoginComponent } from './_pages/login/login.component'
import { RegisterComponent } from './_pages/user/register/register.component'
import { HomeComponent } from './_pages/home/home.component'
// Components
import { AppComponent } from './app.component'
import { NavBarComponent } from './_components/navigation/nav-bar/navbar.navigation.component'
import { BeatmapsetCardComponent } from './_components/beatmapset-card/beatmapset-card.component'
import { BeatmapsetListComponent } from './_components/beatmapet-list/beatmapset-list.component'
////////////////////////////////////////////////////////////////////////////////
// Pipes
import { PipeModule } from './_pipes/pipe.module'
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
    PipeModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    UserProfileComponent,
    BeatmapsetCardComponent,
    BeatmapsetListComponent,
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
