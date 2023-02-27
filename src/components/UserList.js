import React, { Component } from "react";
import { connect } from "react-redux";

class UserList extends Component {
    
  render() {
    //menerima props yng dikirim dari PostList
    const { user } = this.props;
    //mencek data dalam variabel user
    if (!user) {
      return null;
    }
     //mengembalikan value name ke PostList
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserList);
