import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PokerPlanning';
  isDashboardVisible: boolean = false;
  isSidebarVisible: boolean = true;

  toggleDashboard(): void {
    this.isDashboardVisible = !this.isDashboardVisible;
  }

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}

