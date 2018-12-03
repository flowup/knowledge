export enum MessageSender {
  Me = 'me',
  Them = 'them',
}

export interface MessageModel {
  sender: MessageSender;
  text: string;
}
