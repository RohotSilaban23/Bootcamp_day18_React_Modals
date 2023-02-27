import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts, fetchPostsAndUsers } from "../action";
import UserList from "./UserList";

class PostList extends Component {
    //mengambil data pada 
  componentDidMount() {
    this.props.fetchPostsAndUsers();
    console.log(this.props.fetchPostsAndUsers());
  }

  renderList() {
    console.log(this.props.posts)
    //memap data post untuk ditampilkan
    return this.props.posts.map((post) => (
      <div key={post.id} className="item">
        <i className="large middle aligned user icon circle" style={{ fontSize: "50px", color: "blue" }}></i>
        <div className="content">
          <div className="description" style={{ marginTop: "5px", color: "blue"}}>
            <h2>{post.title}</h2>
          </div>
          <p style={{ marginTop: "5px"}}>{post.body}</p>
          <UserList userId={post.userId} />
        </div>
      </div>
    ));
  }

  render() {
    if (!this.props.posts) {
      return null;
    }
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostList
);
