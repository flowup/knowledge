import { Action } from '@ngrx/store';

export class SendMessageAction implements Action {
  static readonly type = 'SendMessage';
  readonly type = SendMessageAction.type;

  constructor(public readonly payload: string) { }
}

export class ReceiveMessageAction implements Action {
  static readonly type = 'ReceiveMessage';
  readonly type = ReceiveMessageAction.type;

  constructor(public readonly payload: string) { }
}

export type MessageActions
  = SendMessageAction
  | ReceiveMessageAction;
