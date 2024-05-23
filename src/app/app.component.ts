import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
  constructor( private router:Router){}
  
 ngOnInit(){
  //this.router.navigate(['/about','kkk','mm'],{queryParams:{name:'akshat'}})
 }
}
