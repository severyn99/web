window.isOnline = () => this.navigator.onLine;
const getById = (id) => document.getElementById(id);

const newsContainer = getById('news-container');

const itemTemplate = (title, body) => `
              <div class="row">
                <div class="col-sm text-center">
                    <div class="card" style="width: 18rem;margin:auto;margin-bottom: 40px;">
                        <img class="card-img-top" src="./images/main-img-karate.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${body}
                                content in</p>
                            <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
              </div>
`


const initAndRenderData = () => {
  const data = localStorage.getItem('news-data');

  if (!isOnline()) return;

  if (!data) {
    console.log('No available local data found');
  } else {
    JSON.parse(data).forEach(({ title, body }) => {
        console.log(title, body);
        $('#news-container').append(
          itemTemplate(title, body),
        );
    });
  }
}

const onOnline = () => {
  console.log('Network status: online');
}

const onOffline = () => {
  console.log('Connection lost');
}


// Bind listeners to the DOM
window.addEventListener('online', onOnline);
window.addEventListener('offline', onOffline);
window.addEventListener('DOMContentLoaded', initAndRenderData);

