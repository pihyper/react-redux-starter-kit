import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { logout } from '../../actions/auth';


class App extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    const { user } = this.props;
    this.props.dispatch(logout(user));
    this.context.router.replace('/login');
  }

  render() {
    const { user } = this.props;
    return (
        <div>
          <Header/>
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.string,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

App.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    user: auth ? auth.user : null,
  };
};

export default connect(
    mapStateToProps
)(App);
