import { ClienteServices } from './../services/cliente.services';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas-cliente',
  templateUrl: './ventas-cliente.component.html',
  styleUrls: ['./ventas-cliente.component.css']
})
export class VentasClienteComponent {
  guardar:any
  client:any
  valor:string | undefined
constructor(private clienteSer:ClienteServices,  private router:Router){}

ngOnInit():void{
  localStorage.removeItem('id_documento_venta')
}

clienteBuscador(event:Event){
  let evento=event.target as HTMLInputElement
  this.valor= evento.value
  this.clienteSer.buscarCliente(this.valor).subscribe(e=>{
    this.client=e
  })
  
}
buscarCliente(event:Event){
  let evento = event.target as HTMLLIElement
  let valor=evento.value
  let string=JSON.stringify(valor)
  this.clienteSer.buscarCliente(string).subscribe(e=>{
  this.guardar=Object.values(e)
    
    sessionStorage.setItem('ciente',JSON.stringify(this.guardar))

    this.router.navigate(['/ventas/venta/']);
  }) 
}

}
