function showConfirmation(form) {
  const data = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    query: form.elements.query.value,
  };

  alert(
    "Hello " +
      data.name +
      ", your query is '" +
      data.query +
      "' and your email is '" +
      data.email +
      "'. We will get back to you soon."
  );
  form.reset();
}
