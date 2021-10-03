import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';
import AddUser from './components/users/AddUser';

import NotFound from './components/pages/NotFound';
import EditUser from './components/users/EditUser';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/users/add' component={AddUser} />
                    <Route exact path='/users/edit/:id' component={EditUser} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
