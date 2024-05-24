import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor( private router:ActivatedRoute,private nave:Router){}
  nav(){
    this.nave.navigate(['about','one','jac','spear'],{queryParams:{id:'aksjat'}})
  }
  
}
