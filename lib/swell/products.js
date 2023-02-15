import swell from ".";

export const getProducts = (page = 1, sort = "", limit = 10) => {
  return swell.products.list({
    page,
    limit,
    sort,
  });
};
