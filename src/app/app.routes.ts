import { Routes } from '@angular/router';
import { HomeComponent } from './user-components/home/home.component';
import { DashboardComponent } from './user-components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './guest-components/forgot-password/forgot-password.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'home', component: HomeComponent,
        children: [{
            path: '', component: DashboardComponent,

        }]
    }

];
