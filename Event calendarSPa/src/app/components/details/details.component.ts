import { Component, inject } from '@angular/core';
import { Event } from '../../Events';
import { ServiceEventService } from '../../service-events.service';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips'
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule,MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  detailsEvent:any={
    id:0,
    name:"",
    description:"",
    typeId:0,
    Type:{
      id:0,
      name:""    
    },
    Date:""
  
  }
  
  serviceEvent = inject(ServiceEventService)
  
  activatedRoute = inject(ActivatedRoute)

 

  ngOnInit(){
    this.serviceEvent.getByID(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem)=>{
    this.detailsEvent=resultedItem  
    });
  }




}
