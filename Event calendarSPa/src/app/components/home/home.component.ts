import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ServiceEventService } from '../../service-events.service';
import { Event } from '../../Events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  
  EventService=inject(ServiceEventService); 
  router = inject(Router)
  items:Event[]=[]; 
  ngOnInit(){
    this.EventService.getAllEventItems().subscribe((result) => {
  
      
      this.items = result;
    });
  }

  displayedColumns: string[] = ['ID', 'Name', 'Description','Date', 'Type Name', 'Actions'];

  onCreate(){
    console.log("Oncreate Clicked")
    this.router.navigateByUrl("/create")
  }
  EditClicked(itemID:number){
    console.log(itemID, "From Edit");
    this.router.navigateByUrl("/edit/"+itemID);
  };
  DetailsClicked(itemID:number){
    console.log(itemID, "From Details");
    this.router.navigateByUrl("/details/"+itemID);
  };
  DeleteClicked(itemID:number){
    console.log(itemID, "From Delete");
    this.router.navigateByUrl("/delete/"+itemID);
  }

}

