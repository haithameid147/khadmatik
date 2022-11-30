import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Foundation1 } from 'src/app/_modules/allModules';

@Component({
  selector: 'app-show-foundationdialog',
  templateUrl: './show-foundationdialog.component.html',
  styleUrls: ['./show-foundationdialog.component.css']
})
export class ShowFoundationdialogComponent implements OnInit {
  foundatiion: Foundation1;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.recievedata();
  }

  recievedata() {
   

  }
}
