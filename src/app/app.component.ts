import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planning';

  isSideNavCollapsed = false;
  screenwidth = 0;

  onToggleSideNav(event: SideNavToggle): void{
    this.screenwidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }
}
