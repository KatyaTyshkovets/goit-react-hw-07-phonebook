
export const getItem = ({ contacts }) => contacts.items;

export const getFilter = ({ filter }) => filter;

export const getVisibleNames = ({contacts,filter}) => {
    if (!filter) {
        return contacts.items;
   }
    return contacts.items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())
    );
};

