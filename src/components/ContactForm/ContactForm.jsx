import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup';
import { Input, FormContact, Label, Button, Error} from './ContactForm.styled';
import { useSelector,useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { add } from "redux/contacts";
import { getItem } from "../../redux/selectors";


const schema = yup.object().shape({
    name: yup
        .string()
        .required('Enter name')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ),
    number: yup
        .string()
        .required('Enter number')
        .matches(
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    ),
});

const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <Error>{message}</Error>}
        />
    );
};

const ContactForm = () => {
    const states = useSelector(getItem);
    const dispatch = useDispatch();

    const handleSubmit = ({name, number}, { resetForm }) => {
        const newContact = {
            id: nanoid(),
            name, number,
        };
        states.find(state => state.name === newContact.name)
            ? alert(`${name} is already in contacts.`)
            : dispatch(add(newContact));
        resetForm();
    };
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}>
            <FormContact>
                <Label htmlFor="name">
                    Name
                    <Input type="text" name="name" />
                    <FormError name="name" />
                </Label>
                <Label htmlFor="number">
                    Number
                    <Input type="tel" name="number" />
                    <FormError name="number" />
                </Label>
                <Button type="submit">Add contact</Button>

            </FormContact>
        </Formik>
    );
};
    




export default ContactForm