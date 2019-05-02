import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent },

    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}