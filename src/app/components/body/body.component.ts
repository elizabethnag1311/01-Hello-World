import { Component } from "@angular/core";

@Component ({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  display = true;

  frase:any = {
    message: '"With great power comes great responsibility"',
    author: 'Ben Parker'
  }

  characters: string[] = ['Spiderman','Ironman','Mary Jane', 'Venom', 'Aunt May'];
 
}