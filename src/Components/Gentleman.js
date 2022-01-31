const Gentleman = ({ name }) => {
  return (
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
        <h2 class="gentleman__name">{name}</h2>
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
  );
};

export default Gentleman;
