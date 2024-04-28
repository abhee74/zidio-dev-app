import * as React from 'react';
import { RouteComponentProps } from 'react-router';

class AdminLogin extends React.Component<RouteComponentProps<AdminLogin>, {}> {
  constructor(props : RouteComponentProps<AdminLogin>){
    super(props);
  }

  render() {
    return(
      <div>
        <h2>Hello Admin</h2>
        <button onClick={ ( e: any ) => this.props.history.goBack() }>
            go back
        </button>
      </div>
    );
  }
}

export default AdminLogin;
