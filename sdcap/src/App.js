import './App.css';
import Nav from './components/nav/nav';
import ArtSmart from './pages/artSmart/artSmart';
import Home from './pages/home/home';
import Classes from './pages/classes/classes';
import Contact from './pages/contact/contact';
import CommunityDance from './pages/communityDance/communityDance';
import Gallery from './pages/gallery/gallery';
import MediaServices from './pages/mediaServices/mediaServices';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="notFooter">
        <Router>
          <Nav></Nav>
          <div>
                <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + "/classes"} component={Classes} />
                <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
                <Route exact path={process.env.PUBLIC_URL + "/communityDance"} component={CommunityDance} />
                <Route exact path={process.env.PUBLIC_URL + "/artSmart"} component={ArtSmart} />
                <Route exact path={process.env.PUBLIC_URL + "/mediaServices"} component={MediaServices} />
                <Route exact path={process.env.PUBLIC_URL + "/gallery"} component={Gallery} />




              </div>
          </Router>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
