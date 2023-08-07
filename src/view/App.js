import './App.scss';
import Navigation from "../components/navigation/Navigation";
import Home from '../components/Home';
import About from "../components/About/About"
import ListUsers from "../components/User/ListUser";
import Listtodo from "../components/Todo/Listtodo";
import Login from "../components/login";
import Detailuser from '../components/User/Detailuser';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";




function App() {


  return (
    <>

      <BrowserRouter>
        <header className="App-header">
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/user" exact>
              <ListUsers />
            </Route>
            <Route path="/user/:id" exact>
              <Detailuser />
            </Route>

            <Route path="/todo">
              <Listtodo />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

          </Switch>
        </header>
      </BrowserRouter>
      < ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
