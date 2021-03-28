import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './components/Home'
import {useState, useEffect} from 'react'
import {db, auth} from './firebase'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
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

  const signOut = () => {
    auth.signOut().then(()=>{
        localStorage.removeItem('user')
        setUser(null)
    })
}

  return (
    <Router>
    {
      !user ? (
      <Login setUser={setUser}/>
    ):(
   
      <div className="App">
        <Header 
          user={user} 
          signOut={signOut} 
          cartItems={cartItems}
        />
        <Switch>

          <Route path="/cart">
            <Cart cartItems={cartItems}/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    
    )
  }
  </Router>
  );
}

export default App;
