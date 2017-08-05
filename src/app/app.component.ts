import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  user: Observable<firebase.User>;
  earpiece: FirebaseListObservable<any[]>;
  searchStr: string;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.earpiece = af.list('/Sheet1');
  }
}
