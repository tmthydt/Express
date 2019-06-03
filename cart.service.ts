import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get("/api/cart-items", { responseType: "json"});
  }

  addItem(newItem) {
    return this.http.post("/api/cart-items", { name: new }, { responseType: "json"});
  }

  deleteItem(name) {
    return this.http.delete(`/api/cart-items/${name}`, { responseType: "json"});
  }

  updateItem(newname, oldname) {
    return this.http.put(`/api/cart-items/${oldname}`, { name: newname }, { responseType: "json"});
  }
  
}
