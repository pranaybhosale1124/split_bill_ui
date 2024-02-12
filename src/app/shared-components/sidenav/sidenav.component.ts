import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  isSidenavOpened = true;
  sidenavMode: any = 'side'; // Default mode for larger screens
  sidenavToggleBtn : Boolean = false

  constructor(private breakpointObserver: BreakpointObserver) {
    // Use BreakpointObserver to detect screen size changes
    this.breakpointObserver.observe([
      Breakpoints.Tablet,
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      if (result.matches) {
        // Switch to "over" mode on smaller screens
        this.sidenavToggleBtn=true
        this.sidenavMode = 'over';
        // Close the sidenav when in "over" mode
        this.isSidenavOpened = false;
      } else {
        this.sidenavToggleBtn=false
        // Switch back to "side" mode on larger screens
        this.sidenavMode = 'side';
        // Keep the sidenav opened in "side" mode
        this.isSidenavOpened = true;
      }
    });
  }

  handleSideNavState() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

}
