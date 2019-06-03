import { Component } from '@angular/core';
import { ApiService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   cartItems: any;

  constructor(private apiService: ApiService) {
    this.apiService.getItem().subscribe(response => {
      this.cartItems = response;
    });
  }
  addNewItem(newItem) {
    this.apiService.addItem(newItem).subscribe(response => {
      this.cartItems = response;
    });
  }
  deleteAnItem(name) {
    this.apiService.deleteItem(name).subscribe(response => {
      this.cartItems = response;
    });
  }
  updateAnItem(newname, oldname) {
    this.apiService.updateItem(newname, oldname).subscribe(response => {
      this.cartItems = response;
    });
  }
}

