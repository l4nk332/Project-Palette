export const updateQueryParams = params => {
  const queryParams = new URLSearchParams(window.location.search);

  Object.keys(params).forEach(key => {
    queryParams.set(key, params[key]);
  });

  window.history.pushState(
    null,
    null,
    `${window.location.pathname}?${queryParams.toString()}`,
  );
};

export const deleteQueryParams = paramList => {
  const queryParams = new URLSearchParams(window.location.search);

  paramList.forEach(key => {
    queryParams.delete(key);
  });

  window.history.pushState(
    null,
    null,
    `${window.location.pathname}?${queryParams.toString()}`,
  );
};
