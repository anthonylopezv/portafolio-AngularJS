import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor( private htpp:Http ) {

    this.cargar_productos();

  }

  public cargar_productos(){
      
      this.cargando = true;  

      this.htpp.get('https://paginawebangular-c5b64.firebaseio.com/productos_idx.json')
        .subscribe( res => {

          setTimeout( ()=>{
            // console.log( res.json() );
            this.cargando = false;
            this.productos = res.json();
          },1500 );
          
        });

  }

}
