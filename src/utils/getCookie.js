const getCookie = name => {
  // Check `document` exists, if not return. i.e. during a gatsby build.
  if (typeof document === 'undefined') return;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return parts
      .pop()
      .split(';')
      .shift();
};

export default getCookie;
