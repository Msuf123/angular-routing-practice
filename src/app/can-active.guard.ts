import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { delay, map, tap } from 'rxjs';

export const canActiveGuard: CanActivateFn = (route, state) => {
  const service=inject(HttpClient)
  return service.get('https://jsonplaceholder.typicode.com/todos/1').pipe(delay(4000),map((a)=>{console.log(a);return a?true:false}))
  
};
