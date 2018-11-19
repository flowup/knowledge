import { Component } from '@angular/core';
import { AppStateModel } from './app-state.model';
import { select, Store } from '@ngrx/store';
import { $messages } from './message.reducer';
import { SendMessageAction } from './message.actions';

@Component({
  selector: 'app-root',
  template: `
    <div class="chat">
      <div class="history-wrapper">
        <div class="history">
          <div *ngFor="let message of messages$ | async" 
               class="message"
               [ngClass]="message.sender">
            <strong>{{message.sender}}:</strong> {{message.text}}
          </div>
        </div>
      </div>
      <input type="text"
             class="message-input"
             (keypress)="sendMessage($event)">
    </div>
  `,
  styles: [`
    .chat {
      height: 400px;
      width: 400px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      background-color: whitesmoke;
      padding: 20px;
    }
    
    .history-wrapper {
      flex-basis: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 20px;
    }
    
    .message {
      margin-bottom: 10px;
    }
    
    .me {
      color: darkred;
    }
    
    .message-input {
      flex-shrink: 0;
      padding: 10px;
    }
  `]
})
export class AppComponent {
  readonly messages$ = this.store.pipe(select($messages));

  constructor(private readonly store: Store<AppStateModel>) { }

  sendMessage(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      const messageText = input.value;
      input.value = '';

      this.store.dispatch(new SendMessageAction(messageText));
    }
  }
}
