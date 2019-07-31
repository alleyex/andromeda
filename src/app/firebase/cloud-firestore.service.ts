import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class CloudFirestoreService {

  private db = firebase.firestore();


  add<T>(name: string, data: T) {
    this.db.collection(name).add(data)
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  }

  set<T>(col: string, doc: string, data: T) {
    this.db.collection(col).doc(doc).set(data)
      .then(  () => {
        console.log('data saved...' );
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  }

  read(name: string): any {
    this.db.collection(name).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  } 

  update<T>(name: string, index: string, data: T) {
    const db = firebase.database().ref(name).child(index);
    db.update(data);
  }

  filter(name: string, Field: string, data: string): any {
    const db = firebase.database().ref(name);
    return db.orderByChild(Field).equalTo(data);
  }

  remove(name: string, index: string) {
    firebase.database().ref(name).child(index).remove();
  }
}
