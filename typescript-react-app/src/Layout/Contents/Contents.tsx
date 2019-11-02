import React from 'react'
import './Contents.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../../pages/About'

const Contents = () => {
        return (
                <div className="App-contetns">
                        <Router>
                                <Switch>
                                        <Route exact path="/About" component={About} />
                                </Switch>
                        </Router>
                </div>
        )

}
    

export default Contents
