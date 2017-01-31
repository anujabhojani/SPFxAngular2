import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    {{name}}
    <input type="text" /><br/>
    {{qualification}} <input type="text" />

  `
})
export class AppComponent {
  name: string = "Enter name:";
  qualification:string="Enter Qualification:";
}