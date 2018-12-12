window.isOnline = () => this.navigator.onLine;
const getById = id => document.getElementById(id);

const fileForm = getById('fileForm');
const fileInput = getById('fileInput')
const bodyForm = getById('bodyForm')
const textarea = getById('bodyArea');
const titleField = getById('titleField')

const writeLocally = (obj) => {
  const items = localStorage.getItem('news-data')
  let data = items ? JSON.parse(items) : [];
  data.push(obj);
  localStorage.setItem('news-data', JSON.stringify(data));
}

const onSubmitPress = (e) => {
  e.preventDefault();

  const isValid = (textarea.value.length > 0 && titleField.value.length > 0);
  fileForm.classList.add('was-validated')
  bodyForm.classList.add('was-validated');

  if (!isValid) return;

  if (!isOnline()) {
    writeLocally({
      title: titleField.value,
      body: textarea.value,
    });
  } else {
    console.log('Emulating server request...');
  }

  fileForm.classList.remove('was-validated');
  bodyForm.classList.remove('was-validated');
  fileForm.reset();
  bodyForm.reset();

  alert('Successfully saved!');
}

// Bind listeners to the DOM
const addButton = getById('submit-btn');
addButton.onclick = onSubmitPress;