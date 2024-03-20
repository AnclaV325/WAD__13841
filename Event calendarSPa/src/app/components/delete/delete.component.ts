import { Component, inject } from '@angular/core';
import { Event } from '../../Events';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ServiceEventService } from '../../service-events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteEvent:Event={
    id: 0,
    name: "",
    description: "",
    typeId: 0,
    Type: {
      id: 0,
      name: ""
    },
    Date: ""
  }
  service = inject(ServiceEventService)
  activateRote= inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.service.getByID(this.activateRote.snapshot.params["id"]).subscribe((result)=>{
      console.log(result)
      this.deleteEvent = result
    });
  }
  
  onHomeButtonClick(){
    this.router.navigateByUrl("home")
  }
  onDeleteButtonClick(id:number){
    this.service.delete(id).subscribe(r=>{this.router.navigateByUrl('home')});
    alert("Deleted  item with ID: "+id)}
}
