import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ReceiveMessageAction, SEND_MESSAGE, SendMessageAction } from './message.actions';
import { webSocket, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { map, tap } from 'rxjs/operators';

const SOCKET_CONFIG: WebSocketSubjectConfig<string> = {
  url: 'ws://localhost:8080',
  deserializer: message => message.data
};

@Injectable()
class MessageEffects {
  socket = webSocket<string>(SOCKET_CONFIG);

  @Effect({dispatch: false}) sendMessage$ = this.actions$.pipe(
    ofType(SEND_MESSAGE),
    tap((action: SendMessageAction) => {
      this.socket.next(action.payload);
    })
  );

  @Effect() receiveMessage$ = this.socket.pipe(
    map(message => new ReceiveMessageAction(message))
  );

  constructor(private actions$: Actions) {}
}

export const effects = [MessageEffects];
