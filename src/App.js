
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from './conponents/navigation';
import Products from './pages/Products';
import Cart from './pages/Cart';

const App = () => {
    return (
        <>
            <Router>

                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/About" component={About} ></Route>
                    <Route path="/Contact" component={Contact}></Route>
                    <Route path="/Products" component={Products}></Route>
                    <Route path="/Cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
