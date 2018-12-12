window.isOnline = () => this.navigator.onLine;

const getById = id => document.getElementById(id);

const textarea = getById('addFeedbackArea');
const form = getById('feedbackForm');
const feedbackContainer = getById('fb-container');

const feedbackTemplate = (name, body, date) => `
    <div class="card">
        <h5 class="card-header">${name}</h5>
        <div class="card-body">
          <p class="card-text">
            ${body}
          </p>
          <a href="#" class="btn btn-primary">Like</a>
          <p style="float:right">${date}</p>
        </div>
    </div>
`

const initAndRenderData = (online) => {
  if (isOnline()) return;
  const data = localStorage.getItem('feedbacks-data');

  if (!data) {
    console.log('No available local data found');
  } else {
    JSON.parse(data).forEach(({ title, value, date }) => {
        $('#fb-container').append(
          feedbackTemplate(title, value, date),
        );
    });
  }
}

const writeLocally = (obj) => {
  const item = localStorage.getItem('feedbacks-data')
  let data = item ? JSON.parse(item) : [];
  data.push(obj);
  localStorage.setItem('feedbacks-data', JSON.stringify(data));
}

const onSubmitPress = (e) => {
  e.preventDefault();

  const isValid = textarea.value.length > 0;
  form.classList.add('was-validated')

  if (!isValid) return;

  const date = new Date();

  $('#fb-container').append(
    feedbackTemplate('Anonimous', textarea.value, date.toLocaleDateString())
  );

  writeLocally({
    title: 'Anonimous',
    value: textarea.value,
    date: date.toLocaleDateString(),
  });

  form.classList.remove('was-validated')
  textarea.value = '';
}

const onOnline = () => {
  initAndRenderData();
  console.log('Network status: online, uploading local-stored data...');
}

const onOffline = () => {
  initAndRenderData();
  console.log('Connection lost, switching to offline mode');
}


// Bind listeners to the DOM
const addButton = getById('submitBtn');
addButton.onclick = onSubmitPress;
window.addEventListener('online', onOnline);
window.addEventListener('offline', onOffline);
window.addEventListener('DOMContentLoaded', initAndRenderData);

