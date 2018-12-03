import { MessageModel, MessageSender } from '../models/message.model';
import { MessageActions, ReceiveMessageAction, SendMessageAction } from '../actions/message.actions';

const INITIAL_STATE: MessageModel[] = [];

export function messageReducer(state: MessageModel[] = INITIAL_STATE,
                               action: MessageActions): MessageModel[] {
  switch (action.type) {
    case SendMessageAction.type:
      return [
        ...state,
        {
          sender: MessageSender.Me,
          text: action.payload
        }
      ];

    case ReceiveMessageAction.type:
      return [
        ...state,
        {
          sender: MessageSender.Them,
          text: action.payload
        }
      ];

    default:
      return state;
  }
}
