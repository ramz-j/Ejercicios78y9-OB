import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/Contact.class';

const ContactComponent = ({contact, manageConnection, removeContact}) => {

  function iconConnected(){
    if(contact.connected){
      return (<i className='bi bi-record-fill' style={{color: 'green', fontWeight: 'bold'}}></i>);
    }else{
      return (<i className='bi bi-record-fill' style={{color: 'grey', fontWeight: 'bold'}}></i>);
    }
  }

  return (
    <tr className='fw-normal'>
      <td>
        {iconConnected()}
      </td>
      <td>
        <span className='ms-2'>{contact.name}</span>
      </td>
      <td className='align-middle'>
        <span>{contact.lastName}</span>
      </td>
      <td>
        <button onClick={() => manageConnection(contact)}>{contact.connected ? 'Disconnect' : 'Connect'}</button>
        <i 
          class="bi bi-trash3 contact-action"
          style={{color: 'tomato', fontSize: 'bold'}}
          onClick={() => removeContact(contact)}>

        </i>
      </td>
    </tr>
  );
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  manageConnection: PropTypes.func.isRequired
}

export default ContactComponent;