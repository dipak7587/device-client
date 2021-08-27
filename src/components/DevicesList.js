import React, { useContext } from 'react';
import _ from 'lodash';
import Device from './Device';
import{deleteDevice} from '../api'
import DevicesContext from '../context/DevicesContext';

const DevicesList = () => {
  const { devices, setDevices } = useContext(DevicesContext);

  const handleRemoveDevice = (id) => {
    deleteDevice(id).then(_=>{
      setDevices(devices.filter((device) => device.id !== id));
    })
  };

  return (
    <React.Fragment>
      <div className="device-list">
        {!_.isEmpty(devices) ? (
          devices.map((device) => (
            <Device key={device.id} {...device} handleRemoveDevice={handleRemoveDevice} />
          ))
        ) : (
          <p className="message">No devices available. Please add some device.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default DevicesList;
