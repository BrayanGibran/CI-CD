import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';


  @NgModule({
    exports:[
      MatToolbarModule,
      MatButtonModule,
      MatListModule,
      MatIconModule,
      MatInputModule,
      MatProgressBarModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatSelectModule,
    ]
  })
  export class MaterialModule { }
