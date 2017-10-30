export function toggleStaticBody(lock = true) {
  document.body.style.overflow = lock ? 'hidden' : 'auto'
}

