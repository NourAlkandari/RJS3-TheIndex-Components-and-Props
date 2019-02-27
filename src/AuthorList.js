import React, { Component } from "react";
//components
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authorCard = this.props.authors.map(author => (
      <AuthorCard author={author} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCard}</div>
      </div>
    );
  }
}
export default AuthorList;
