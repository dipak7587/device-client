const axios = require('axios');


  export function addDevice(body){
    return axios.post('/devices/add', body)
      .then(function (response) {
          console.log(response.data);
          return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

  export function editDevice(id, filter){
    return axios.put(`/devices/edit/${id}`, filter)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
  export function deviceList(body){
    return axios.get('/devices/list')
      .then(function (response) {
          console.log(response);
          return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    
  }
  export function deleteDevice(id){
    return axios.delete(`/devices/del/${id}`)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }