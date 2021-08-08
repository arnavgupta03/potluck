import '../styles/landing.css'
import logo from "../logo.png";
import home from "../home.jpg";
import { Router, Link } from "wouter";

function Home() {
  return (
    <div className="App">
      <div className="fadein homepage">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              href="/"
            >
              <img src={logo} className="img-fluid m-2" alt="logo" width="36"/>
              Potluck
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item pt-auto pb-auto pl-2">
                  <Link href="/about" className="nav-link active pt-auto pb-auto pl-2">About</Link>
                </li>
                <li className="nav-item pt-auto pb-auto pl-2">
                  <Link href="/register" className="nav-link active pt-auto pb-auto pl-2">Register</Link>
                </li>
                <li className="nav-item pt-auto pb-auto pl-2">
                  <Link href="/login" className="nav-link active pt-auto pb-auto pl-2">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="imgDiv">
          <img src={home} className="homeimg" title="'Potluck Cooking' by The Tedster is licensed with CC BY-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/2.0/" alt="'Potluck Cooking' by The Tedster is licensed with CC BY-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/2.0/"></img>
        </div>
        <h2 className="text-center desc">Potluck. The social media app for food.</h2>
      </div>
    </div>
  );
}

export default Home;