import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "redux/contacts";

import s from "./ListItem.module.css";

function ListItem({ name, number, id }) {
    const dispatch = useDispatch();
    const isDeleting = useSelector(contactsSelectors.getLoading);
    
    return (
        <li className={s.item} >
            <p>{name}</p>
            <a className={s.link} href={`tel:+${number.split('-').join('')}`}>{number}</a>
            <button
                disabled={isDeleting} 
                className={s.button}
                type="button"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
                {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
        </li >
    )
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ListItem;