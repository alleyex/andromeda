import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  stateChange$ = new Subject<firebase.User>();

  constructor() {
    firebase.auth().onAuthStateChanged((user) => { this.stateChange$.next(user); });
  }

  registerByEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  loginWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  isLogged(): Promise<boolean> {
    const status = firebase.auth().currentUser ? true : false;
    return Promise.resolve(status);
  }

  signOut(): Promise<void> {
    return firebase.auth().signOut();
  }
  
}
