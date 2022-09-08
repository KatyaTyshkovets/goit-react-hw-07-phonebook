import { useSelector, useDispatch } from 'react-redux';
import { Button, Text, Item } from './Item.styled';
import { remove } from '../../redux/contacts';
import { getFilter, getItem } from '../../redux/selectors';

export const ContactItem = () => {
    const filter = useSelector(getFilter);
    const states = useSelector(getItem);
    const dispatch = useDispatch();

    const deleteContact = id => {
        dispatch(remove(id));
    };

    const getVisisbleContacts = states?.filter(state =>
        state?.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            {getVisisbleContacts?.map(({ id, name, number }) =>
            (
                <Item key={id}>
            <Text>
                {name} : {number}
            </Text>
            <Button onClick={()=>deleteContact(id)}>Delete</Button>
            </Item>
            ) )}
        
            </>
    );
};




