import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'ngh5-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent {
  data = "Hello"

  constructor(public dialogRef: MatDialogRef<AddEventDialogComponent>) { }

  onNoClick(){
    this.dialogRef.close();
  }

}
