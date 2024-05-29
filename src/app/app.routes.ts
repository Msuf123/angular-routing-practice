import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { ChildOneComponent } from './about/child-one/child-one.component';
import { ChildTwoComponent } from './about/child-two/child-two.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { canActiveGuard } from './can-active.guard';
import { deactivateGuard } from './guard/deactivate.guard';
import { RegisterComponent } from './register/register.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
const resolv=()=>Promise.resolve('okkkk')

export const routes: Routes = [{
    path:'',component:HomepageComponent,pathMatch:'prefix',canActivate:[canActiveGuard]
},{
    path:'about',title:'about|sec',component:AboutComponent,children:[
        {path:'one',component:ChildOneComponent,title:resolv}
        ,{path:'two',component:ChildTwoComponent}
        ,{path:'one/:id/:name',component:ThirdComponentComponent,pathMatch:'full'}
    ]
}
,{path:'register',component:RegisterComponent,canDeactivate:[deactivateGuard]}
,{component:ProfileComponentComponent}

,{path:'**',component:ErrorComponent}

];
