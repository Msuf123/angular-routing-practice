import { CSP_NONCE, Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {
  constructor(private router:ActivatedRoute){

  }
  ngOnInit(){
    console.log(this.router.snapshot.queryParams)
    this.router.queryParamMap.pipe(switchMap((p)=>new Observable((a)=>a.next(p.get('id'))))).subscribe((a)=>{
      console.log(a)
    })
    this.router.paramMap.pipe(switchMap((p)=>new Observable((a)=>a.next(p.get('id'))))).subscribe((a)=>{
      console.log(a)
    })
   }
}
 