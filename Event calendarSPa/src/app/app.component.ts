import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Event } from './Events';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  
  name = "Event Calendat 13841";
  events:Event[]=[{
    "id": 1,
    "name": "Party in office",
    "description": "Lets celebrate a finishing of a big project!",
    "typeId": 3,
    "Type": {
      "id": 3,
      "name": "Party"
    },
    "Date": "2024-03-04"
  }]
  
}
