export const toggleStaticBody = (lock = true) => {
  document.body.style.overflow = lock ? 'hidden' : 'auto';
};

export const triggerIfEnterKey = (event, callback) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    callback(event);
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
)
