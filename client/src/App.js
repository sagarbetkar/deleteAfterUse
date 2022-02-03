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

import React, { Component } from 'react';
import { io } from 'socket.io-client';
/* import Messages from './Messages';
import MessageInput from './MessageInput'; */

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      show: false,
      isDisabled: false,
      isReload: false,
      uid:''
    }
  }

  componentDidMount() {
    this.setState({socket: io(`http://${window.location.hostname}:3000`, { transports : ['websocket', 'polling', 'flashsocket'] })});
  }

  componentDidUpdate() {
    this.state.socket.on('message', (msg) => {
      this.setState({isDisabled: msg})
    });
    
    this.state.socket.on('reloadMsg', (reloadMsg) => {
      this.setState({isDisabled: false})
      console.log("reloadMsg===>",reloadMsg)

        if(this.state.uid !== reloadMsg) {
          window.location.reload();
        }
    });
  }

  handleClose = () => {
    this.state.socket.emit('openModal', false);
    this.setState({show: false})
  };

  handlePageRefresh = () => {
    let userId= this.state.socket.id;
    this.state.socket.emit('reloadPage', userId);
    this.setState({show: false, uid:userId});
  }

  handleShow = () => {
    this.state.socket.emit('openModal', true);
    this.setState({show: true})
  };

  render() {
    const {socket, show, isDisabled} = this.state;
    console.log(isDisabled);
    return (
      <div className="App">
        <header className="app-header">
          React Chat
        </header>
        { socket ? (
          <div className="chat-container">
            {/* <Messages socket={socket} />
            <MessageInput socket={socket} /> */}
            <Button variant="primary" onClick={this.handleShow} disabled={isDisabled}>
              Launch demo modal
            </Button>
            { (!show && isDisabled) && <p style={{color:"red"}}>
                Someone else is already making some changes, please come back later!
              </p>}


        <Modal show={show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handlePageRefresh}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          </div>
        ) : (
          <div>Not Connected</div>
        )}
      </div>
    )
  }
}


/* function App() {
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
          <Messages socket={socket} />
          <MessageInput socket={socket} />
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
} */

export default App; 
