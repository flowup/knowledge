import { MessageModel, MessageSender } from './message.model';
import { MessageActions, RECEIVE_MESSAGE, SEND_MESSAGE } from './message.actions';
import { AppStateModel } from './app-state.model';

export function messageReducer(state: MessageModel[] = [], action: MessageActions): MessageModel[] {
  switch (action.type) {
    case SEND_MESSAGE:
      return [
        ...state,
        {sender: MessageSender.Me, text: action.payload}
      ];

    case RECEIVE_MESSAGE:
      return [
        ...state,
        {sender: MessageSender.Them, text: action.payload}
      ];

    default:
      return state;
  }
}

export const $messages = ({messages}: AppStateModel) => messages;
