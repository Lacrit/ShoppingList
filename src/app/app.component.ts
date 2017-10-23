import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAexWoT3ZNiGOcpfvBQ0WAkFqhxmiR0umY",
      authDomain: "shoppinglist-20980.firebaseapp.com",
      databaseURL: "https://shoppinglist-20980.firebaseio.com",
      projectId: "shoppinglist-20980",
      storageBucket: "",
      messagingSenderId: "607091788732"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
