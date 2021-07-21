import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  name: string;
  cost: string;
  imgData: string;

  producto = new Producto();

  constructor(private router: Router,
    private productoService: ProductoService) { }

  ngOnInit() {
  }

  guardar(){
    this.productoService.save(this.producto)
    this.router.navigate(['/list'])
  }

}
