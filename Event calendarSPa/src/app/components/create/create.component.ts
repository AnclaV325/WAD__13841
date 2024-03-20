import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceEventService } from '../../service-events.service';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute,Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-create',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatChipsModule,MatDatepickerModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  eventService = inject(ServiceEventService);
  
  router = inject(Router);


  cate: any;
  selected: any
 
  tID: number = 0;

  
  createEvent: any = {
    title: "",
    description: "",
    date: "",
    typeId: 0,

    formatDate(selectedDate: Date) {
    this.date = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');
}
  }

  ngOnInit() {
    this.eventService.getAllTypes().subscribe((result) =>{
     
      this.cate = result
    });

  };
  create() {
    this.createEvent.typeId=this.tID
    this.eventService.create(this.createEvent).subscribe(result=>{
      console.log(this.createEvent.date)
      alert("Item Saved")
      this.router.navigateByUrl("home")
    });
  };


}
