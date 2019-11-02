import React from 'react'
import './Contents.css'
import { Route } from 'react-router-dom'
import { Home, About, Blog, Setting } from '../../pages'

const Contents = () => {
        return (
                <div className="App-contetns">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/About" component={About}/>
                        <Route exact path="/Blog" component={Blog} />
                        <Route exact path="/Setting" component={Setting} />
                </div>
        )

}
    

export default Contents
