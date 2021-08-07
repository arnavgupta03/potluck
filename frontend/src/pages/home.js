import logo from '../logo.png';
import '../styles/landing.css'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/"
        >
          Potluck
        </a>
      </header>
    </div>
  );
}

export default Home;