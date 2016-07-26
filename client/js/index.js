'use strict';

class Game {
  constructor (numPlayers) {
    this.API_KEY = '5cc38f28d0fb23ed45663d4dd805e56c';
    this.playersListEl = document.querySelector('#players');
    this.playersListEl.innerHTML = '<li data-player-name="Doug">Doug</li>';
    this.scoreBoardEl = document.querySelector('#scoreboard');
    this.gameEl = document.querySelector('#game');

    const players = [new Doug()];
    this.players = players;
    this.movies = [];

    this.playRound = this.playRound.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.actorId = this.actorId.bind(this);
    this.pickActor = this.pickActor.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.restart = this.restart.bind(this);
  }

  start () {
    let remainingPlayers = this.players.slice();
    this.fetchMovies().then((movies) => {
      this.movies = movies.filter(movie => new Date(movie.release_date) < new Date(), []).map(movie => movie.original_title)
      while (remainingPlayers.length > 1) {
        remainingPlayers = this.playRound(remainingPlayers);
      }
      this.gameOver(remainingPlayers[0]);
    });
  }

  pickActor () {
    this.scoreBoardEl.setAttribute('game-on', true);
    const actor = prompt('Pick an actor, actress or director');
    if (actor.length < 3) return this.pickActor();
    document.querySelector('#gameTitle').innerHTML = `Last Man Stanton - <small>${actor}</small>`;
    return actor;
  }

  playRound (players) {
    players.forEach(player => {
      player.playerEl.setAttribute('active-player', true);
      const guess = player.guess(this.movies);

      const answer = this.movies.includes(guess);
      player.answer(guess, answer)
      if (!answer) {
        player.playerEl.setAttribute('incorrect-answer', true);
        players.splice(players.indexOf(player),1);
      } else {
        this.movies.splice(this.movies.indexOf(guess),1);
      }
      player.playerEl.setAttribute('active-player', false);
    })
    return players;
  }

  fetchMovies () {
    const actor = this.pickActor();
    // this.movies = stub.map(movie => movie.original_title);
    return this.actorId(actor).then(id => {
      return fetch(`http://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${this.API_KEY}`)
        .then(response => response.json().then(json => json.cast));
    });
  }

  actorId (actor) {
    const uriActor = encodeURI(actor);
    return fetch(`https://api.themoviedb.org/3/search/person?api_key=${this.API_KEY}&query=${uriActor}`)
      .then(response => response.json().then(json => json.results[0].id ));
  }

  addPlayer (name) {
    const playerNames = this.players.map(player => player.name);
    if (playerNames.includes(name)) return;
    this.playersListEl.innerHTML = `${this.playersListEl.innerHTML}<li data-player-name="${name}">${name}</li>`;
    this.players.push(new Player(name));
  }

  gameOver (winner) {
    this.scoreBoardEl.setAttribute('game-over', true);

    this.gameEl.innerHTML = `
      <li class="card">The Winner is: ${winner.name}</li>
    ` + this.gameEl.innerHTML;
    this.scoreBoardEl.innerHTML += '<button id="newGame">New Game</button>';
    document.querySelector('#newGame').addEventListener('click', (evt) => {
      this.restart();
    })
  }

  restart () {
    this.movies = [];
    this.gameEl.innerHTML = '';
    document.querySelector('#newGame').remove();
    this.start();
  }
}

class Player {
  constructor (name) {
    this.name = name;
    this.playerEl = document.querySelector(`[data-player-name="${name}"]`);
  }

  guess () {
    return prompt(`Whats your guess ${this.name}?`);
  }

  answer (title, answer) {
    const answerHTML = `
      <li class="card game__guess">
        <p class='game__answer ${answer ? 'correct-answer' : 'incorrect-answer'}'><span>${this.name}:</span> ${title}</p>
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

  guess(movies) {
    if (movies.length < 10 && Math.random()*10 > 9.8) {
      return "I'm out."
    }
    return movies[Math.floor(Math.random()*movies.length)];
  }

  answer (title) {
    const answerHTML = `
      <li class="card game__guess game__guess-doug">
        <p class='game__answer correct-answer'><span>${this.name}:</span> ${title}</p>
        <img class='avatar' src='/images/dlm.png' />
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
});
