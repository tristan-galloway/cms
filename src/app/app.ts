import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';

import { Header } from './header/header';
import { Contacts } from './contacts/contacts';
import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';

@Component({
  selector: 'cms-root',
  imports: [Header, Documents, MessageList, Contacts, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cms');

  selectedFeature: string = 'documents';

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}
