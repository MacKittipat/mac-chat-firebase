import {Component, ElementRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @ViewChild('txtMessage') txtMessage: any;

  title = 'mac-chat-firebase';

  messages: Observable<any[]>;

  ngFireDb: AngularFireDatabase;

  constructor(ngFireDb: AngularFireDatabase) {
    this.ngFireDb = ngFireDb;
    this.messages = this.ngFireDb.list('messages').valueChanges();
  }

  sendMessage(message: string): void {
    this.ngFireDb.list('messages').push({
      name: 'Mac',
      message: message,
      datetime: Date.now()
    });
    this.txtMessage.nativeElement.value = '';
  }
}
