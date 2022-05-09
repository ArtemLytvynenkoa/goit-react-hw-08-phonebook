import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
import { contactsSelectors, changeFilter } from "redux/contacts";
import s from "./ContactsFilter.module.css";

function ContactsFilter() {
    const filter = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();

    return (
        <div className={s.filterContainer}>
            <label className={s.label}>
                Find contacts by name
                <input
                    className={s.input}
                    type="text"
                    name="filter"
                    value={filter}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange= {(e) => dispatch(changeFilter(e.currentTarget.value))}
                />
            </label>
        </div>
        
    )
}

ContactsFilter.propTypes = {
    filter: PropTypes.string,
}

export default ContactsFilter;