import { CanActivateFn } from '@angular/router';

export const deactivateGuard: CanActivateFn = (route, state) => {
  let a=confirm('Exit wihotu saving')
  //return true or false
  console.log(a)
  return a;
};
