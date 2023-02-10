import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas-inicio',
  templateUrl: './ventas-inicio.component.html',
  styleUrls: ['./ventas-inicio.component.css']
})
export class VentasInicioComponent implements OnInit{
  ngOnInit(): void {

  }
  readonly url = 'localhost:3000/cliente?';
  constructor(private http:HttpClient){}
  getCliente(){
    const e = this.http.get(this.url).subscribe(e=>{console.log(e)});
  }
}
