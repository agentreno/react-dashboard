import React, { Component } from 'react'
import './PostList.css'

import Post from '../Post/Post'

class PostList extends Component {
    render() {

        return (
            <div className="PostList">
                {
                    this.props.posts.map(post => (
                        <Post 
                            key={post.id}
                            {...post}
                        />
                    ))
                }
            </div>        
        )
    }
}

export default PostList
