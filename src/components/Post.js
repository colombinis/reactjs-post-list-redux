import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/PostActions'

class Post extends Component {
    
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        // redirect
        this.props.history.push('/');
    }

    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete</button>
                </div>
                
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );

        return (

            <div className="container">
                {post}
            </div>

        );
    }
}


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find( (p) => { return p.id === parseInt(id) }
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deletePost: (id) => {  dispatch( deletePost(id) ) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);
