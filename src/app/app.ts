import { Component, signal } from '@angular/core';

import { Header } from './header';
import { Contacts } from './contacts/contacts';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { ContactList } from './contacts/contact-list/contact-list';

@Component({
  selector: 'cms-root',
  imports: [Header, Contacts, ContactDetail, ContactList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cms');
}
