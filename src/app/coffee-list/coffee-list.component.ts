import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-coffee-list',
  templateUrl: 'coffee-list.component.html',
  styles: []
})

export class CoffeeListComponent implements OnInit {
  coffeesObservable: Observable<any[]>;

  // public types: Array<string> = [
  //   "Home",
  //   "Work",
  //   "School"
  // ];

  // public selectedType: any;
  public sinceLast: any;
  // private lastTimestamp: any;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.coffeesObservable = this.getCoffees('/coffee-counter');

    // this.coffeesObservable.subscribe(data => {
    //   let last = data[data.length - 1];
    //   console.log(last);
    //   this.lastTimestamp = last.timestamp;
    //
    // });
    //
    // setInterval(() => {
    //   if (!this.lastTimestamp) return;
    //   let seconds = ((Date.now() - this.lastTimestamp) / 1000).toString();
    //   let secondsInt = parseInt(seconds, 10);
    //   let days = Math.floor(secondsInt / (3600 * 24));
    //   secondsInt -= days * 3600 * 24;
    //   let hours = Math.floor(secondsInt / 3600);
    //   secondsInt -= hours * 3600;
    //   let minutes = Math.floor(secondsInt / 60);
    //   secondsInt -= minutes * 60;
    //   this.sinceLast = secondsInt + " Seconds";
    //   if(minutes>0)this.sinceLast = minutes + " Minutes " + this.sinceLast;
    //   if(hours>0)this.sinceLast = hours + " Hours " + this.sinceLast;
    //   if(days>0)this.sinceLast = days + " Days " + this.sinceLast;
    // }, 1000);
  }

  getCoffees(listPath): Observable<any[]> {
    return this.db.list(listPath, ref=>ref.limitToLast(5)).valueChanges();
  }

  // addCoffee(event) {
  //   event.preventDefault();
  //   let type = this.selectedType;
  //   if (!type) type = this.types[0];
  //   this.db.list("/coffee-counter").push({
  //     "timestamp": firebase.database.ServerValue.TIMESTAMP,
  //     "type": type.toLowerCase()
  //   })
  // }
  //
  // selectType(typeKey) {
  //   // console.log(typeKey);
  //   this.selectedType = typeKey;
  // }
}
