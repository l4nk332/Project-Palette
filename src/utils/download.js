const download = (filename, text, mime = 'text/plain') => {
  const element = document.createElement('a');
  const encoded = encodeURIComponent(text);
  element.setAttribute('href', `data:${mime};charset=utf-8, ${encoded}`);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export default download;
