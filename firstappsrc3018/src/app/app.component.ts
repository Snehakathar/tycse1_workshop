import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectTitle = 'book application';
  mycolor="yellow"
  status= true
  name="angular"
  showData(){
    alert("button clicked")
  }
}
