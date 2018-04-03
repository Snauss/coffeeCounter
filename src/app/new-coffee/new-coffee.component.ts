import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";

@Component({
  selector: 'app-new-coffee',
  templateUrl: './new-coffee.component.html',
  styleUrls: ['./new-coffee.component.css']
})
export class NewCoffeeComponent implements OnInit {

  // coffeesObservable: Observable<any[]>;
  //
  // public sinceLast: any;
  // private lastTimestamp: any;
  public selectedType: any;
  public selectedLocation: any;
  public selectedSize: any;

  public types: Array<string> = [
    "Black",
    "Black with milk",
    "Fancy"
  ];
  public sizes: Array<string> = [
    "Medium",
    "Large",
    "Bucket"
  ];
  public locations: Array<string> = [
    "Home",
    "Work",
    "Other"
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
    if (!type) type = this.types[0];
    if (!location) location = this.locations[0];
    if (!size) size = this.sizes[0];
    this.db.list("/coffee-counter").push({
      "timestamp": firebase.database.ServerValue.TIMESTAMP,
      "type": type.toLowerCase(),
      "size": type.toLowerCase(),
      "location" : location.toLowerCase(),
    })
  }

  selector(form,selectedValue){
    if (form ==  'type')  this.selectedType = selectedValue;
    console.log("the picked type", this.selectedType);
    if (form ==  'location')  this.selectedLocation = selectedValue;
    if (form ==  'size')  this.selectedSize = selectedValue;
  }

  // selectType(typeKey) {
  //   // console.log(typeKey);
  //   this.selectedType = typeKey;
  // }
  //
  // selectLocation(locationKey) {
  //   // console.log(typeKey);
  //   this.selectedLocation = locationKey;
  // }
  // selectSize(sizeKey) {
  //   // console.log(typeKey);
  //   this.selectedSize = sizeKey;
  // }
}
