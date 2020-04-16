import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import AddCategory from './admin/AddCategory';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />

        <PrivateRoute exact path='/user/dashboard' component={UserDashBoard} />

        <AdminRoute exact path='/admin/dashboard' component={AdminDashBoard} />

        <AdminRoute exact component={AddCategory} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
