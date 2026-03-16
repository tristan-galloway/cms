import { Component } from '@angular/core';
import { MessageItem } from '../message-item/message-item';
import { MessageEdit } from '../message-edit/message-edit';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  imports: [MessageItem, MessageEdit],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})
export class MessageList {
  onAddMessage(message: Message) {
    this.messages.push(message);
  }

  messages: Message[] = [
    new Message(1, 'Welcome to CMS', 'Hello! Welcome to the Content Management System.', 'Alice Johnson'),
    new Message(2, 'Project Update', 'The new feature has been deployed to production successfully.', 'Bob Smith'),
    new Message(3, 'Meeting Reminder', 'Don\'t forget about the team meeting tomorrow at 10am.', 'Carol White'),
    new Message(4, 'New Assignment', 'Please review the latest documents in the shared folder.', 'David Brown'),
  ];


}
