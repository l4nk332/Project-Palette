const toggleStaticBody = (lock = true) => {
  document.body.style.overflow = lock ? 'hidden' : 'auto';
};

export default toggleStaticBody;
