sockets are an alterante protocol "above" http.
Create a server with node, but you layer that protocol on top of the http request/ 
real time communication between multiple clients

stays open as long as ou need it, data flows in both directions.
sockets.io is the node library. 

socket.emit is a call that takes a string that identifies the event, and what you wannna send.
socket.on is baseically an event listener. takes a string and passes a callback function

