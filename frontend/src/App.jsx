import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import { INITIAL_CONTACTS } from "./data/initial-contacts";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

export default function App() {
  const [contact, setContact] = useState([]);
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  async function fetchContacts() {
    // call browser's fetch API.
    const response = await fetch("http://localhost:3000/api/contacts");
    const newContacts = await response.json();
    setContacts(newContacts);
  }

  useEffect(() => {
    fetchContacts();
    // use effect calls this fn every time it draws itself.
  }, []);

  function handleContactClicked(c) {
    setContact(c); // change the contaxt to the one we click on (c).
  }

  return (
    <>
      <div className={styles.container}>
        <Sidebar contacts={contacts} onContactClicked={handleContactClicked} />
        {/* <h1>Hello, WDCC! 🐮💻</h1> */}
        {contact != null ? <ContactDisplay contact={contact} /> : undefined}
      </div>
    </>
  );
}
