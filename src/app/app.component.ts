import { Component } from '@angular/core';
import { MockEventsService } from './Services/mock-events.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _mes: MockEventsService;
  events;

  constructor(mes: MockEventsService){
    this._mes = mes;
  }
  
  ngOnInit(){
    
  }
}
