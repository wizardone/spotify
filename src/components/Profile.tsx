import * as React from 'react';
import { connect } from 'react-redux';
import Auth from '../auth';
import { Api } from '../api/client';
import addUser from '../store/actions';
import { AppState, User } from '../interfaces';

interface ProfileProps {
  addUserData: (userData: {}) => {};
  userData: User;
}

const mapDispatchToProps = dispatch => {
  return {
    addUserData: (userData) => dispatch(addUser(userData))
  };
};

const mapStateToProps = (state: AppState) => {
  return { 
    userData: state.user
  };
};

export class Profile extends React.Component<ProfileProps, {}> {

  constructor(props: ProfileProps) {
    super(props);
  }

  async componentDidMount() {
    if (this.props.userData.id === '') {
      try {
        const userData = await new Api.Client().me();
        this.props.addUserData(userData);
      } catch (e) {
        // console.log('Expired');
      }
    }
  }

  render() {
    return (
      <div>
      Profile Page
      <p className="email">Email: {this.props.userData.email}</p>
      <p>Display name: {this.props.userData.display_name}</p>
      <p>Id: {this.props.userData.id}</p>
      <p>Type: {this.props.userData.type}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
