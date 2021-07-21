import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  productos: any;

  scheduleList: Observable<Producto[]>;

  constructor(private router: Router,
    private productoService: ProductoService) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    console.log(this.productos)
  }

  editar(producto:any){
    let params: NavigationExtras = {
      queryParams: {
        producto: producto
      }
    }
    this.router.navigate(['/create'], params)
  }

  filterList(evt: any) {
    this.scheduleList = this.productoService.getProductos();
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.scheduleList = this.scheduleList.pipe(
      map(items => 
        items.filter(item => item.name.toLowerCase()
  .indexOf(searchTerm.toLowerCase()) > -1))
      );
  }


}
