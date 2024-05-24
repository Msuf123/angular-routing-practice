import { CanActivateFn } from '@angular/router';

export const deactivateGuard: CanActivateFn = (route, state) => {
  let a=confirm('Exit wihotu saving')
  console.log('ji')
  return a;
};
