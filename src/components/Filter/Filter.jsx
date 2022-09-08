import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';
import { setFilter } from '../../redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
    const dispatch = useDispatch();
     const filter = useSelector(getFilter);
    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };
    return (
        <Label htmlFor=''>
            Find contacts by name
            <Input type="text" onChange={changeFilter} value={filter}  />
        </Label>
    );
};


Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};


export default Filter;