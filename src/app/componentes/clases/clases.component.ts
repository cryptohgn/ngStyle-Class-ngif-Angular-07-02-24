import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent {
  colorSelecct: string = "V";

  ngOnInit(){
    setInterval(()=>{
      if(this.colorSelecct === 'R'){
        this.colorSelecct = "A"
      } else if (this.colorSelecct === "A") {
        this.colorSelecct ="V"
      } else {
        this.colorSelecct = "R"
      }
    }, 100)
  }

}
