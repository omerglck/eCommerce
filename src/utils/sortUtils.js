import {SORT_TYPES} from './sortTypes';

export const sortBy = (items, sortByType) => {
  switch (sortByType) {
    case SORT_TYPES.OLD_TO_NEW:
      return [...items].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      );
    case SORT_TYPES.NEW_TO_OLD:
      return [...items].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
    case SORT_TYPES.PRICE_HIGH_TO_LOW:
      return [...items].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price),
      );
    case SORT_TYPES.PRICE_LOW_TO_HIGH:
      return [...items].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price),
      );
    default:
      return items;
  }
};
