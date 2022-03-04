import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ems-';

  constructor( public storage:StorageService, public router:Router) {}
  hello(){
    this.storage.alert()
  }
  page1page(){
    this.router.navigate(['/page1']);
  }
page2page(){
  this.router.navigate(['/page2']);
}

value1="";
value2=''
}
