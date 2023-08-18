
  const card = document.querySelector('.card');
  const no = document.querySelector('.no');
  let togle = 0;
  let values;
  card.innerHTML = "hej";

  async function getCard() {
    let url = 'https://nodes.eyrich.dk/husk';
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function renderCard() {
    let q = await getCard();
    values = q;
    card.innerHTML = `<div class='question'>${values.question}</div>`;
    no.innerHTML = values.no;
  }

  renderCard();

  setTimeout(() => {
    card.addEventListener('click', function () { togleCard() });

  }, 100);

  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      togleCard();
    }
  })

  function togleCard() {
    if (togle == 0) {
      card.innerHTML += `<br/><div class='answer'>${values.answer}</div>`;
      let grey = document.querySelector(".question");
      grey.style.color = "rgba(0,0,0,.3)";
      togle = 1;
    } else {
      togle = 0;
      renderCard();
    }
  }
