// react components are like js functions
import styles from "./ContactDisplay.module.css";

export default function ContactDisplay({ contact }) {
  //   const contact = props.contact;
  // these two lines do the same thing
  //   const { contact } = props;
  // replaced with the {contact} passed into fn

  return (
    <main className={styles.container}>
      <img src={contact.photoUrl} alt={contact.name} />
      <h1>{contact.name}</h1>
      <h3>{contact.phoneNumber}</h3>
      <p>{contact.funFact}</p>
    </main>
  );
}
