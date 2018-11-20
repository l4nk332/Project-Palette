export const toggleStaticBody = (lock = true) => {
  document.body.style.overflow = lock ? 'hidden' : 'auto';
};

export const triggerIfEnterKey = (event, callback, ...args) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    callback(...(args.length ? args : [event]));
  }
};

export const maxDivBy = (max, divBy) => (
  max % divBy === 0
    ? max
    : maxDivBy(max + 1, divBy)
);

export const decrRangeByOffset = (start, stop, offset) => (
  start <= stop
    ? [stop]
    : [start].concat(decrRangeByOffset(start - offset, stop, offset))
);

export const updatePageTitle = title => {
  document.title = title;
};

export const openNewTab = url => {
  window.open(url, '_blank');
};
