import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { ChildOneComponent } from './about/child-one/child-one.component';
import { ChildTwoComponent } from './about/child-two/child-two.component';
const resolv=()=>Promise.resolve('okkkk')

export const routes: Routes = [{
    path:'',component:HomepageComponent,pathMatch:'prefix'
},{
    path:'about',title:'about|sec',component:AboutComponent,children:[
        {path:'one',component:ChildOneComponent,title:resolv}
        ,{path:'two',component:ChildTwoComponent}
        ,
    ]
},

{
    path:'r',redirectTo:'',pathMatch:'prefix'
},{path:'**',component:ErrorComponent}

];
