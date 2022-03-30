import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

  constructor(public dialogRef: MatDialogRef<AboutComponent>) { }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
