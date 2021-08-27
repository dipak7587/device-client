/* eslint-disable no-undef */
const newUserConnected = (user) => {
  userName = user || `User${Math.floor(Math.random() * 1000000)}`;
  socket.emit("new user", userName);
  addToUsersBox(userName);
};
export function getSocketInstance(){
    const socket = window.io('http://localhost:5000');
    return socket;
}

export function registeredEvent(){
   const socket=  getSocketInstance()
    socket.on("new user", function (data) {
        console.log('data', data)
       });
       
       socket.on("user disconnected", function (userName) {
           console.log('disconnected',userName)
       //   document.querySelector(`.${userName}-userlist`).remove();
       });   
}
export function addUserInstance(){
    const socket=  getSocketInstance()
    socket.emit("new user", 'dipak_gupta');
}