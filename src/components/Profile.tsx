import * as React from 'react';
import { connect } from 'react-redux';
import Auth from '../auth';
import { Api } from '../api/client';
import addUser from '../store/actions';
import { UserState } from '../interfaces';

interface DispatchProps {
  addUserData: (userData: UserState) => {};
}

interface ProfileProps {
  addUserData: (userData) => {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserData: (userData) => dispatch(addUser(userData))
  };
};

const mapStateToProps = (state: UserState): UserState => {
  return state;
};

class Profile extends React.Component<ProfileProps, {}> {

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
    return <div>Profile Page</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
