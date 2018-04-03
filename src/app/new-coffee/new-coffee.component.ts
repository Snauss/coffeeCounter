import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from "firebase";

@Component({
  selector: 'app-new-coffee',
  templateUrl: './new-coffee.component.html',
  styleUrls: ['./new-coffee.component.css']
})
export class NewCoffeeComponent implements OnInit {

  public selectedType: any;
  public selectedLocation: any;
  public selectedSize: any;
  public invalidAddEvent: any;

  public types: Array<string> = [
    "Black",
    "With milk",
    "Fancy"
  ];
  public locations: Array<string> = [
    "Home",
    "Work",
    "Other"
  ];
  public sizes: Array<string> = [
    "Small",
    "Medium",
    "Large"
  ];

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {

  }
  addCoffee(event) {
    event.preventDefault();
    let type = this.selectedType;
    let location = this.selectedLocation;
    let size = this.selectedSize;
    if(!type || !location || !size){
      this.invalidAddEvent = true;
      return;
    }
    // if (!type) type = this.types[0];
    // if (!location) location = this.locations[0];
    // if (!size) size = this.sizes[0];
    this.db.list("/coffee-counter").push({
      "timestamp": firebase.database.ServerValue.TIMESTAMP,
      "type": type.toLowerCase(),
      "size": size.toLowerCase(),
      "location" : location.toLowerCase(),
    });
    this.clearCoffeeSelection()
  }


  clearCoffeeSelection(){
    let labels = document.getElementsByTagName('label');
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove("active");
    }
    this.selectedSize = "";
    this.selectedType = "";
    this.selectedLocation = "";
  }

  selector(form,selectedValue){
    if (form ==  'type')  this.selectedType = selectedValue;
    if (form ==  'size')  this.selectedSize = selectedValue;

    if (form ==  'location') {
        this.selectedLocation = null;

      //  Added timeout to let the Font Awesome SVG change in preview
      setTimeout(() => {
        this.selectedLocation = selectedValue;
      }, 1);
    }
  }

}
