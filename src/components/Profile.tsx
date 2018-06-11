import * as React from 'react';
import { connect } from 'react-redux';
import Auth from '../auth';
import { Api } from '../api/client';
import addUser from '../store/actions';
import { UserState } from '../interfaces';

interface ProfileProps {
  addUserData: (userData: {}) => {};
  userData: UserState;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserData: (userData) => dispatch(addUser(userData))
  };
};

const mapStateToProps = (state: UserState) => {
  return { userData: state };
};

export class Profile extends React.Component<ProfileProps, {}> {

  constructor(props: ProfileProps) {
    super(props);
  }

  async componentDidMount() {
    try {
      const userData = await new Api.Client().me();
      this.props.addUserData(userData);
    } catch (e) {
      // console.log('Expired');
    }
  }

  render() {
    return (
      <div>
        Profile Page
          <p className='email'>Email: {this.props.userData.email}</p>
          <p>Display name: {this.props.userData.display_name}</p>
          <p>Id: {this.props.userData.id}</p>
          <p>Type: {this.props.userData.type}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
