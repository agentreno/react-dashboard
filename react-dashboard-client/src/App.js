import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import { getPosts } from './api'
import PostList from './PostList/PostList'
import Header from './Header/Header'
import About from './About/About'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getPosts().then(posts => {
            this.setState({ posts })
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/posts' render={() => (
                            <PostList posts={this.state.posts} />
                    )} /> 
                    <Route path='/about' component={About} />
                </Switch>
            </div>
        )
    }
}

export default App
