export const selectCategories = (state) => state.categories.categories;

// export const
export const categoriesToProducts = (state) => {
  return state.categories.categories.reduce((accum, category) => {
    accum[category.title] = category.items;
    return accum;
  }, {});
};
