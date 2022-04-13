import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguagesService } from '../languages.service';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobileMenuVisible = '';
  constructor(public l: LanguagesService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openMobileMenu() {
    this.mobileMenuVisible = 'active'
  }

  openWarningDialog() {
    this.dialog.open(WarningDialogComponent, {
      height: '70wh',
      width: '50wh',
      data: { link: '/sign-in' }
    })
  }

}
