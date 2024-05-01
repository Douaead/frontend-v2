import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid'; // Importez le module de grille Ng-Zorro

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AddCategoryComponent } from './admin-components/add-category/add-category.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddCategoryComponent,
    // Déclarez ici vos autres composants
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule, // Ajoutez le module de grille Ng-Zorro à vos imports
    AdminRoutingModule,
  ]
})
export class AdminModule { }