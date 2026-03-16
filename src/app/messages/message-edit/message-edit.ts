import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  imports: [],
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css'
})
export class MessageEdit {
  currentSender = 'Tristan Galloway';
  
  @ViewChild('msgText') msgTextRef: ElementRef;
  @ViewChild('subject') subjectRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  onSendMessage() {
    const msgText = this.msgTextRef.nativeElement.value;
    const subject = this.subjectRef.nativeElement.value;
    const newMessage = new Message(2, subject, msgText, this.currentSender);
    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.msgTextRef.nativeElement.value = '';
    this.subjectRef.nativeElement.value = '';
  }
}
