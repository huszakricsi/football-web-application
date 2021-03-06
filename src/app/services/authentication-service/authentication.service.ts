import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  xAuthToken = '8d9511c675274ff798a31232b9d30338'

  constructor() { }

  getXAuthToken(): string{
    return this.xAuthToken;
  }
}
