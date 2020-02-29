import React from 'react';
import Header from '../components/Header/Header';
import { Route, Switch } from 'react-router-dom';

import Coupons from '../components/pages/Coupons';
import Coupon from '../components/pages/Coupon';
import Secret from '../components/pages/Secret';
import Signup from '../components/pages/Signup';
import Admin from '../components/pages/admin/Admin';
import MyCoupons from '../components/pages/Coupons';
import UserProfile from '../components/pages/Profile';
import Requests from '../components/pages/Requests';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    color: '#bdbdbd',
  },
});

const ReactRouter = props => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Coupons} />
          <Route path="/coupons" component={Coupons} />
          <Route path="/myCoupons" component={MyCoupons} />
          <Route path="/coupon" component={Coupon} />
          <Route path="/signup" component={Signup} />
          <Route path="/requests" component={Requests} />
          <Route path="/myProfile" component={UserProfile} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/secret" component={Secret} />
          <Route path="/admin" component={Admin} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default ReactRouter;
