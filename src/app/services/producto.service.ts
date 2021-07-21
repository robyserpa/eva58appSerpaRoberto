import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public afs: AngularFirestore) { }

  save(producto: Producto){

    const refContactos = this.afs.collection("productos");
    if(producto.uid == null){
      producto.uid = this.afs.createId();
      producto.active = true
    }

    refContactos.doc(producto.uid).set(Object.assign({}, producto))
  }

  getProductos(): Observable<any[]>{
    return this.afs.collection("productos",
          ref => ref.where("active","==",true)).valueChanges();
  }
}
