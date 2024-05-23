import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet,relativeTo,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NavigationExtras],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css'
})
export class ChildOneComponent {
  constructor(private router:Router) {
    
  }
click(){
  this.router.navigate(['one'],{ relativeTo:this.route})
}
}
