import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ReceiveMessageAction, SendMessageAction } from '../actions/message.actions';
import { webSocket, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { map, tap } from 'rxjs/operators';

const SOCKET_CONFIG: WebSocketSubjectConfig<string> = {
  url: 'ws://localhost:8080',
  deserializer: message => message.data,
  serializer: message => String(message)
};

@Injectable()
export class MessageEffects {
  private readonly socket = webSocket<string>(SOCKET_CONFIG);

  @Effect({dispatch: false}) sendMessage$ = this.actions$.pipe(
    ofType(SendMessageAction.type),
    tap((action: SendMessageAction) => {
      this.socket.next(action.payload);
    })
  );

  @Effect() receiveMessage$ = this.socket.pipe(
    map(message => new ReceiveMessageAction(message))
  );

  constructor(private actions$: Actions) { }
}
