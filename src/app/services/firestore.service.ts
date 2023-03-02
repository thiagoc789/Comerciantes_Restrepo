import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createDoc(){
    this.firestore.collection('Comerciantes')
  }

  getCollection(){
    console.log('Estoy por leer una coleccion')
    this.firestore.collection('Comerciantes').valueChanges().subscribe((res)=>{
      console.log(res[0])
      console.log(res)

    });
  }


}
