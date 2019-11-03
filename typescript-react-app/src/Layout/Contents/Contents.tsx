import React from 'react'
import './Contents.css'
import { Route } from 'react-router-dom'
import { Home, About, Blog, Setting } from '../../pages'

const Contents = () => {
        return (
                <div className="App-contetns">
                        <Route exact path="/" component={Home}/>
                        <Route path="/About" component={About}/>
                        <Route path="/Blog" component={Blog} />
                        <Route path="/Setting" component={Setting} />
                </div>
        )

}
    

export default Contents
