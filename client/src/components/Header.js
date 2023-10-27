import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
            >
              Emaily
            </Link>
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
