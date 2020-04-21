async function customFetch(url, options) {
  const result = await fetch(url, options);
  const { success, payload, token, message } = await result.json();
  if (success) {
    if (token) {
      localStorage.setItem("token", token);
    }
    return { success, payload };
  }
  return { success, message };
}

export default customFetch;
