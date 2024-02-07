import { Component } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent {
  mostrarParrafo: boolean = true;

  onClick(){
    this.mostrarParrafo = !this.mostrarParrafo; 
    // if (this.mostrarParrafo) {
    //   this.mostrarParrafo = false;
    // } else {
    //   this.mostrarParrafo = true;
    // }
  }
}
