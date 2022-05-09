import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ListItem from "../ListItem";
import s from "./ContactsList.module.css";
import { contactsSelectors } from "redux/contacts";

function ContactsList() {
    const contacts = useSelector(contactsSelectors.getVisibleContacts);

    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <ListItem
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                />
            ))}     
        </ul>
    )   
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default ContactsList;