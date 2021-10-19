import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import AboutUs from './Component/Pages/AboutUs/AboutUs';
import Contact from './Component/Pages/Contact/Contact';
import Details from './Component/Pages/Details/Details';
import Home from './Component/Pages/Home/Home';
import Login from './Component/Pages/Login/Login';
import NotFound from './Component/Pages/NotFound/NotFound';
import SignUp from './Component/Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <SignUp></SignUp>
          </Route>
          <Route path='/details/:_id'>
            <Details></Details>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
