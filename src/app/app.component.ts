import { Component, OnInit } from '@angular/core';
import { StorageService } from './auth-services/storage-service/storage.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pfe_angular';
  isAdminLoggedIn: boolean;
  isCustomerLoggedIn: boolean;
  annonces: string[] = [];

  constructor(private router: Router, private annonceService: StorageService) {}

  ngOnInit(): void {
    this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
   
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
      }
    });

    
  }
}