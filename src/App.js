import "./App.css";

function App() {
  /* return (    
  ); */
  return (
    <div class="container">
      <header class="main-header">
        <h1 class="main-title">The pointing gentlemen</h1>
      </header>
      <section class="controls">
        <p class="info">0 gentlemen pointing at you</p>
        <button class="button button--select">Select all</button>
      </section>
      <main class="main">
        <ul class="gentlemen">
          <li class="gentleman">
            <div class="gentleman__avatar-container">
              <img
                class="gentleman__avatar"
                src="img/fary.jpg"
                alt="The Fary pointing at you"
              />
              <span class="gentleman__initial">F</span>
            </div>
            <div class="gentleman__data-container">
              <h2 class="gentleman__name">The Fary</h2>
              <ul class="gentleman__data-list">
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Profession:</span>
                  Influencer
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Status:</span> RIP
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Twitter:</span> Pending
                </li>
              </ul>
            </div>
            <i class="icon gentleman__icon fas fa-check"></i>
            <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
          <li class="gentleman">
            <div class="gentleman__avatar-container">
              <img
                class="gentleman__avatar"
                src="img/Julio.jpg"
                alt="Julius Churchs pointing at you"
              />
              <span class="gentleman__initial">J</span>
            </div>
            <div class="gentleman__data-container">
              <h2 class="gentleman__name">Julius Churchs</h2>
              <ul class="gentleman__data-list">
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Profession:</span>
                  Youtuber
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Status:</span> Alive
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Twitter:</span>
                  @julius_churchs
                </li>
              </ul>
            </div>
            <i class="icon gentleman__icon fas fa-check"></i>
            <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
          <li class="gentleman">
            <div class="gentleman__avatar-container">
              <img
                class="gentleman__avatar"
                src="img/bertin.jpg"
                alt="Bertin Osbourne pointing at you"
              />
              <span class="gentleman__initial">B</span>
            </div>
            <div class="gentleman__data-container">
              <h2 class="gentleman__name">Bertin Osbourne</h2>
              <ul class="gentleman__data-list">
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Profession:</span>
                  Java developer
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Status:</span> Alive
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Twitter:</span> @osbourne
                </li>
              </ul>
            </div>
            <i class="icon gentleman__icon fas fa-check"></i>
            <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
