// main.js - Server Room Control System
const SERVER_NAME = "prod-server-01";
const securityMode = "sanctuary";

function startServer() {
  console.log("Starting " + SERVER_NAME + " in " + securityMode + " mode");
}

startServer();
// Security system (1/2): motion sensors
function activateMotionSensors() {
  console.log("Motion sensors: ONLINE");
}
activateMotionSensors();

// Security system (2/2): server room access control
function lockServerRoom() {
  console.log("Server room doors: LOCKED");
}
lockServerRoom();
