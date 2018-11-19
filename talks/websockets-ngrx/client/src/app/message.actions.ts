import { Action } from '@ngrx/store';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export class SendMessageAction implements Action {
  type = SEND_MESSAGE;
  constructor(public readonly payload: string) { }
}

export class ReceiveMessageAction implements Action {
  type = RECEIVE_MESSAGE;
  constructor(public readonly payload: string) { }
}

export type MessageActions = SendMessageAction | ReceiveMessageAction;
