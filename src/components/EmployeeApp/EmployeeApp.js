import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import UserDetail from '../UserDetail/UserDetail';
import styles from "./EmployeeApp.module.scss";
class EmployeeApp extends Component {
    render () {
        return (
            <>
                <nav>
                    <ul className={styles.Menu}>
                        <li><Link to='/'>App</Link></li>
                        <li><Link to='/user-details'>UserDetail</Link></li>
                        {/* <li className="item button"><a href="#">Log In</a></li>
                        <li className="item button secondary"><a href="#">Favourites</a></li>
                        <li className="toggle"><a href="#"><i className="fa fa-bars"></i></a></li> */}
                    </ul>
                </nav>
                <Route path="/" exact component={HomePage}/>
                <Route path="/:id" component={UserDetail}/> 
            </>
        );
    }
}

export default EmployeeApp;