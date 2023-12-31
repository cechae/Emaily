import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
          <>
            <li key="1">
              <Payments />
            </li>
            <li key="3" style={{ margin: '0 10px ' }}>
              Credits: {this.props.auth.credits}
            </li>
            <li key="2">
              <a href="/api/logout">Logout</a>
            </li>
          </>
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
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
