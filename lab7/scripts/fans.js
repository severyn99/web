const getById = id => document.getElementById(id);

const textarea = getById('addFeedbackArea');
const form = getById('feedbackForm');
const feedbackContainer = getById('fb-container');


const userPlate = (name, body, date) => `
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

const onSubmitPress = (e) => {
  e.preventDefault();

  const isValid = textarea.value.length > 0;
  form.classList.add('was-validated')

  if (!isValid) return;

  const date = new Date();

  $('#fb-container').append(
    userPlate('Somebody', textarea.value, date.toLocaleDateString())
  );

  form.classList.remove('was-validated')
  textarea.value = '';
}


// Bind listeners to the DOM
const addButton = getById('submitBtn');
addButton.onclick = onSubmitPress;
