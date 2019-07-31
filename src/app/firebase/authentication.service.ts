import { Injectable, OnDestroy } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor() {
    // firebase.auth().onAuthStateChanged(user => {
    //   console.log('on auth status changed...')
    //   this.isLoggedIn = user ? true : false;
    // });
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

  getUser(): firebase.User {
    return firebase.auth().currentUser;
  }

  getCurrentUser() {
    return new Promise<firebase.User>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }
}
