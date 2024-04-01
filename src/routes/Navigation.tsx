import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import logo from '../logo.svg';
import { ShoppingPage } from "../components-patterns/pages/ShoppingPage";

export const Navigation = () => {
    return (
    <Router>
        <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo"/>
            <ul>
                <li>
                    <NavLink to="/" end>Shopping</NavLink>
                </li>
                <li>
                    <NavLink to="/about" end>About</NavLink>
                </li>
                <li>
                    <NavLink to="/users" end>Users</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={ <ShoppingPage /> } />
            <Route path="/about" element={ <h1>About</h1> } />
            <Route path="/users" element={ <h1>Users</h1> } />
        </Routes>
        </div>
    </Router>
    );
}