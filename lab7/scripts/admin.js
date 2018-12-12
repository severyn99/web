const getById = id => document.getElementById(id);

const fileForm = getById('fileForm');
const fileInput = getById('fileInput')
const bodyForm = getById('bodyForm')
const textarea = getById('bodyArea');
const titleField = getById('titleField')

const onSubmitPress = (e) => {
  e.preventDefault();

  const isValid = (textarea.value.length > 0 && titleField.value.length > 0);
  fileForm.classList.add('was-validated')
  bodyForm.classList.add('was-validated');

  if (!isValid) return;

  fileForm.classList.remove('was-validated');
  bodyForm.classList.remove('was-validated');
  fileForm.reset();
  bodyForm.reset();

  alert('Successfully saved!');
}


// Bind listeners to the DOM
const addButton = getById('submit-btn');
addButton.onclick = onSubmitPress;