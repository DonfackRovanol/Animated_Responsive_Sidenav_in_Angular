import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() collapsed =false;
  @Input() screenwidth = 0;

  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenwidth > 768) {
      styleClass = 'body-trimmed';
    }else if (this.collapsed && this.screenwidth <= 768 && this.screenwidth > 0) {
      styleClass = 'body-md-scree'
    }
    return styleClass;  
  }

}
