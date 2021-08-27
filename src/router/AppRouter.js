import React, { useState, useEffect } from 'react';


import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddDevice from '../components/AddDevice';
import DevicesList from '../components/DevicesList';
import { deviceList } from '../api';
import EditDevice from '../components/EditDevice';
import DevicesContext from '../context/DevicesContext';
import {registeredEvent, addUserInstance} from '../socket'

const AppRouter = () => {
 
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    addUserInstance()
    deviceList().then(({results})=>{
        setDevices(results);
    })
  },[]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <DevicesContext.Provider value={{ devices, setDevices }}>
            <Switch>
              <Route component={DevicesList} path="/" exact={true} />
              <Route component={AddDevice} path="/add" />
              <Route component={EditDevice} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </DevicesContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
