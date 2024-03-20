import { Component, OnInit, inject, } from '@angular/core';
import { ServiceEventService } from '../../service-events.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../Events';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule,MatDatepickerModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent implements OnInit {
  EventService = inject(ServiceEventService); 
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editEvent: Event = {
    id: 0,
    name: "",
    description: "",
    typeId: 0,
    Type: {
      id: 0,
      name: ""
    },
    Date: ""

  };
  typeObject: any; 
  selected: any 
  tID: number = 0;
  ngOnInit() {
    this.EventService.getByID(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editEvent = result;
      this.selected = this.editEvent.typeId;
    });
    this.EventService.getAllTypes().subscribe((result) => {
      this.typeObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl("home")
  }

  edit() {
    this.editEvent.typeId = this.tID;
    this.editEvent.Type = this.typeObject[findIndexByID(this.typeObject, this.tID)];
    this.EventService.edit(this.editEvent).subscribe(res=>{
      alert("Changes has been updated")
      this.router.navigateByUrl("home");
    })
  }
}


