'use strict';

class Game {
  constructor (numPlayers) {
    this.playersListEl = document.querySelector('#players');
    this.playersListEl.innerHTML = '<li data-player-name="Doug" class="active-player">Doug</li>';

    const players = [new Doug()];
    this.players = players;

    this.playRound = this.playRound.bind(this);
  }

  start () {
    let remainingPlayers = this.players;
    while (remainingPlayers.length > 0) {
      remainingPlayers = this.playRound(remainingPlayers);
      console.log(remainingPlayers.map(p => p.name))
    }
  }

  playRound (players) {
    players.forEach(player => {
      player.playerEl.classList += 'active-player'
      const answer = player.guess();
      player.answer(answer)
    })
    players.pop(0);
    return players;
  }

  listPlayers () {
    this.players.forEach(player => console.log(player.name))
  }

  addPlayer (name) {
    const playerNames = this.players.map(player => player.name);
    if (playerNames.includes(name)) return;
    this.playersListEl.innerHTML = `${this.playersListEl.innerHTML}<li data-player-name="${name}">${name}</li>`;
    this.players.push(new Player(name));
  }
}

class Player {
  constructor (name) {
    this.name = name;
    this.playerEl = document.querySelector(`[data-player-name="${name}"]`);
  }

  guess () {
    return prompt('Title?');
  }

  answer (title) {
    const answerHTML = `
      <li class="card game__guess">
        <p class='game__answer'>${title}</p>
        <img class='avatar' src='/images/player1.png' />
      </li>`
    let game = document.querySelector('#game');
    game.innerHTML = answerHTML + game.innerHTML;
  }
}

class Doug {
  constructor () {
    this.name = 'Doug';
    this.playerEl = document.querySelector('[data-player-name="Doug"]');
  }

  guess() {
    return 'Troy'
  }

  answer (title) {
    const answerHTML = `
      <li class="card game__guess game__guess-doug">
        <p class='game__answer'>${title}</p>
        <img class='avatar' src='/images/doug.png' />
      </li>`
    let game = document.querySelector('#game');
    game.innerHTML = answerHTML + game.innerHTML;
  }
}

const game = new Game(1);

const newPlayerForm = document.querySelector('#newPlayer');
newPlayerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const nameInput = newPlayerForm.querySelector('input[name]');
  if (nameInput.value) game.addPlayer(nameInput.value);
  newPlayerForm.reset();
  return;
})


const startGameButton = document.querySelector('#startGame');
startGameButton.addEventListener('click', (evt) => {
  game.start();
})
