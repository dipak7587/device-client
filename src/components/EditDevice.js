import React, { useContext } from 'react';
import DeviceForm from './DeviceForm';
import { useParams } from 'react-router-dom';
import{editDevice} from '../api'
import DevicesContext from '../context/DevicesContext';

const EditDevice = ({ history }) => {
  const { devices, setDevices } = useContext(DevicesContext);
  const { id:deviceId } = useParams();
  const deviceToEdit = devices.find((device) => device.id === deviceId);

  const handleOnSubmit = ({id,...device}) => {

    // const filteredDevices = devices.filter((device) => id !== id);
    editDevice(deviceId, device).then(({results})=>{
      const filteredDevices = devices.reduce((prevD, nextD) => {
        if(nextD.id === deviceId){
          prevD.push(results)
        }else{
          prevD.push(nextD)
        }
        return prevD
      },[]);
      setDevices(filteredDevices);
      history.push('/');
    })
  };

  return (
    <div>
      <DeviceForm device={deviceToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditDevice;
