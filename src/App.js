import './App.css';
import bunny from './team/bunny.png';
import hound from './team/hound.png';
import raccoon from './team/raccoon.png';
import squirrel from './team/squirrel.png';
import Game from './game/Game'

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoon
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrel
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunny
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: hound
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
