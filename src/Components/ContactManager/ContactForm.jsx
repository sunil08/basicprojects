import React, { useState } from 'react'
import './contactsmanager.css'

const ContactForm = ({addContact}) => {

  const [contact, addContactData] = useState({name: "", email: ""});

  const handleChange = (e) => {
    if(e.target.id === "_name"){
      addContactData({...contact, name: e.target.value});
    }else if(e.target.id === "_email"){
      addContactData({...contact, email: e.target.value});
    }
  }

  const handleAdd = () => {
    if(contact.name==="" || contact.email===""){
      alert('Fill all the details');
      return;
    }
    addContact(contact);
    addContactData({name: "", email: ""}); // to erase the data in the form
  }

  return (
    <div className='contact_form_div'>
        
        <h2 className='contact_heading'>Add Contact</h2> 
        <form className='contact_form'>
            <label className='contact_label' htmlFor="_name">Name:</label>
            <input className='contact_input' id="_name" type='text' placeholder='enter name' value={contact.name} onChange={handleChange}/>

            <label className='contact_label' htmlFor="_email">Email:</label>
            <input className='contact_input' id="_email" type='email' placeholder='enter email' value={contact.email} onChange={handleChange}/>
        </form>
        <button className='contact_submit_btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default ContactForm
