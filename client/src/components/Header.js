import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {
  renderedContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log In with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Log Out</a>
          </li>
        );
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="left brand-logo">
              Emaily
            </a>
            <ul className="right">{this.renderedContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
