export const SORT_TYPES = {
  OLD_TO_NEW: 'oldToNew',
  NEW_TO_OLD: 'newToOld',
  PRICE_HIGH_TO_LOW: 'priceHighToLow',
  PRICE_LOW_TO_HIGH: 'priceLowToHigh',
};

export const sortOptions = [
  {label: 'Old to new', value: SORT_TYPES.OLD_TO_NEW},
  {label: 'New to old', value: SORT_TYPES.NEW_TO_OLD},
  {label: 'Price high to low', value: SORT_TYPES.PRICE_HIGH_TO_LOW},
  {label: 'Price low to High', value: SORT_TYPES.PRICE_LOW_TO_HIGH},
];
