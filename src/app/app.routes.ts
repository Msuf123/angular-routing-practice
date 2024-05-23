import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [{
    path:'',component:HomepageComponent
},{
    path:'about/:id/:name',component:AboutComponent
},
{path:'**',component:ErrorComponent}
];
