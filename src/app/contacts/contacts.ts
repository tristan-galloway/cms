import { Component } from '@angular/core';
import { ContactList } from "./contact-list/contact-list";
import { ContactDetail } from "./contact-detail/contact-detail";

import { Contact } from './contact.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'cms-contacts',
  imports: [
    ContactList,
    ContactDetail,
    NgIf
  ],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {
  selectedContact: Contact;
}