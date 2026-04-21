import React from 'react'
import './contactsmanager.css'
import deleteImage from './delete24.png'

const ContactList = (props) => {
  const {contacts, removeContact} = props;

  const contactList = contacts.map((data) => {
    return(
      <div className='contact_row' key={data.id}>
        <h3>{data.data.name}</h3>
        <h3>{data.data.email}</h3>
        <div className='del_image'>
          <img src={deleteImage} alt='delete' width="24" height="24" onClick={() => removeContact(data.id)}/>
        </div>
      </div>
    ) 
  })
  return (
    <>  
      <div>Contact List</div>
      <div>
        {contacts && contactList}
      </div>
    </>
  )
}

export default ContactList
