import { Component } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent {
  estilosParrafo: any = {
    backgroundColor: "lightblue",
    color: "white"
  }

  cambiaColor(color: string) {
    this.estilosParrafo.color=color;
  }
  cambiaColorFondo($event: any){
    console.log($event.target.value)
    this.estilosParrafo.backgroundColor = $event.target.value;
  }

  cambiaPadding($event: any){
   
    this.estilosParrafo.padding = $event.target.value + "px"
  }
}
