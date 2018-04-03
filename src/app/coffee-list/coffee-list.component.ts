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

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.coffeesObservable = this.getCoffees('/coffee-counter', false);
  }

  getCoffees(listPath, fullList): Observable<any[]> {
    if(fullList) return this.db.list(listPath, ref=>ref).valueChanges();
    if(!fullList) return this.db.list(listPath, ref=>ref.limitToLast(5)).valueChanges();
  }
}
