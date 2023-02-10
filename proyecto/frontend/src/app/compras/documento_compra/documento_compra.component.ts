import { Component, OnInit } from '@angular/core';
//import pdfMake from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
//pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-documento_compra',
  templateUrl: './documento_compra.component.html',
  styleUrls: ['./documento_compra.component.css']
})
export class Documento_compraComponent implements OnInit {

  constructor() {
  }
  crearPdf(){
      const pdfDefinition:any ={
        content : [{
          text: 'cualquier cosa'
        }]
      }
      //const pdf=pdfMake.createPdf(pdfDefinition);
      //pdf.open();
  }

  ngOnInit() {
  }

}
