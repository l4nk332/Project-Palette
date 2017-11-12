export const toggleStaticBody = (lock = true) => {
  document.body.style.overflow = lock ? 'hidden' : 'auto';
};

export const triggerIfEnterKey = (event, callback) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    callback();
  }
};
