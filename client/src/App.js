import { Button, Modal } from 'react-bootstrap';
/* import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

function App() {
  const [socket, setSocket] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    socket.emit('closeModal', false);
    setShow(false);
  };
  const handleShow = () => {
    socket.emit('openModal', true);
    setShow(true)
  };


  useEffect(() => {
    const newSocket = io(`ws://localhost:4000`, { transports : ['websocket', 'polling', 'flashsocket'] });
    console.log(`ws://localhost:4000`, newSocket)
    
    newSocket.on('openModal', function(msg) {
      console.log("Open Modal ==> ", msg)
    })
    newSocket.on('closeModal', function(msg) {
      console.log("Close Modal ==> ", msg)
    })
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      { socket?.connected ? (
        <div>Connected</div>
      ) : (
        <div>Not Connected</div>
      )}
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App; */

import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
/* import Messages from './Messages';
import MessageInput from './MessageInput'; */

import './App.css';

function App() {
  const [socket, setSocket] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    socket.emit('openModal', false);
    setShow(false);
  };
  const handleShow = () => {
    socket.emit('openModal', true);
    setShow(true)
  };

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    // console.log(newSocket, `http://${window.location.hostname}:3000`)
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      { socket ? (
        <div className="chat-container">
          {/* <Messages socket={socket} />
          <MessageInput socket={socket} /> */}
          <Button variant="primary" onClick={handleShow} >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;
