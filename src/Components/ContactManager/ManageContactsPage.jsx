import React, { useEffect, useState } from 'react'
import Header from './Header'
import './contactsmanager.css'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import uuid4 from 'uuid4'

const ManageContactsPage = () => {

  const localStoreKey = "Contacts";
  // const [contacts, setContacts] = useState([]);
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStoreKey));
  });

  //useEffect(()=> {
  //  setContacts(JSON.parse(localStorage.getItem(localStoreKey)));
  //},[]) // called only once

  useEffect(() => {
    localStorage.setItem(localStoreKey, JSON.stringify(contacts));
  },[contacts])

  function addContact(data){
    //setContacts([...contacts, data]); // not working
    setContacts((contacts) => { // working - asynchronous updates
      const addContacts = [...contacts, {id: uuid4(), data}];
      console.log(addContacts, contacts.length);
      return addContacts;
    })
  }
  function removeContact(id){
    const filteredList = contacts.filter((value)=> {
       return value.id !== id;
    })
    setContacts(filteredList);
    return filteredList;
  }

  return (
    <div>
      <Header/>
      <ContactForm addContact={addContact}/>
      <ContactList contacts={contacts} removeContact={removeContact}/>
    </div>
  )
}

export default ManageContactsPage
