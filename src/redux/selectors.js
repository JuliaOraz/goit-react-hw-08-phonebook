export const getContacts = ({ contacts }) => contacts.items;

export const getIsLoading = ({ contacts }) => contacts.isLoading;

export const getError = ({ contacts }) => contacts.error;

export const getFilterContacts = ({ filter }) => filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilterContacts(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
};
