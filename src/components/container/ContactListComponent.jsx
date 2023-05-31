import React, { useState } from 'react'
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/ContactComponent';

import '../../styles/contact.scss';
import ContactForm from '../pure/forms/ContactForm';

const ContactListComponent = () => {

  const defaultContact1 = new Contact('Judith', 'Gonzalez', false);
  const defaultContact2 = new Contact('Pedro', 'Ramirez', true);
  const defaultContact3 = new Contact('Gonzalo', 'Ramirez', false);

  
  const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

  function manageConnection(contact){
    console.log('This contact connected: ', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].connected = !tempContacts[index].connected;
    setContacts(tempContacts);
  }

  function removeContact(contact){
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index,1);
    setContacts(tempContacts);
  }

  function addContact(contact){
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div>
      <div className='Col-12'>
        <div className='card'>
          {/* Card Header (title) */}
          <div className='card-header p-3'>
            <h5>
              My Contacts
            </h5>
          </div>
          {/* Card Body (content) */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
            <table>
              <thead>
                <tr>
                  <th scope='col'> </th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Last Name</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                { contacts.map((contact, index) => {
                  return (
                    <ContactComponent
                      key={index}
                      contact={contact}
                      manageConnection={manageConnection}
                      removeContact={removeContact}>
                    </ContactComponent>
                  )
                } ) }
              </tbody>
            </table>
          </div>
          <ContactForm add={addContact}></ContactForm>            
        </div>
      </div>
    </div>
  )
}

export default ContactListComponent;