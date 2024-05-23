import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor( private router:ActivatedRoute){}
 
  ngOnInit(){
    console.log(this.router.snapshot)
   }
}
