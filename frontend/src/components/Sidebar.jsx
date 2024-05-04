import { useState } from "react";
import { INITIAL_CONTACTS } from "../data/initial-contacts";
import ContactCard from "./ContactCard";
import styles from "./Sidebar.module.css";

export default function Sidebar({ contacts, onContactClicked }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    // e for event - e is an obj that contains info abt typing in input
    setSearch(e.target.value);
  }

  function searchFilter(contact) {
    // return true if contact matches search term, false if not
    const searchLower = search.toLowerCase();
    const nameLower = contact.name.toLowerCase();
    return nameLower.includes(searchLower);
  }

  return (
    <nav className={styles.sidebar}>
      <div className={styles.corner}>
        <h2> Friends</h2>
        <input className={styles.searchbar} type="text" value={search} onChange={handleChange} />
      </div>
      <div className={styles.contactList}>
        {" "}
        {console.log(contacts)}
        {contacts.filter(searchFilter).map((contact) => (
          // map fn loops through inner array and calls fn on each elt of array.
          <ContactCard key={contact._id} contact={contact} onContactClicked={onContactClicked} />
        ))}
      </div>
    </nav>
  );
}
