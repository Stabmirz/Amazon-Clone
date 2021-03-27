import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './components/Home'
import {useState, useEffect} from 'react'
import {db} from './firebase'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([])
  const getCartItems = () =>{
    db.collection('cartItems').onSnapshot((snapshot)=>{
    const TempItems = snapshot.docs.map((doc)=>(
      {
        id:doc.id,
        product:doc.data()
      }
    ));
    setCartItems(TempItems)
  })
}

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems}/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
