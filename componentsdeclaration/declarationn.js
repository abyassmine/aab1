import React, { useEffect, useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import './declationn.css';
import Alert from 'react-s-alert';
import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import TableComponent from './TableComponent';
import { useNavigate } from 'react-router-dom';

let stompClient = null;

const Declarationn = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const navigate = useNavigate();
  const [tab, setTab] = useState("CHATROOM");
  const [email, setEmail] = useState('');
  const [showChat, setShowChat] = useState(false); // Control whether to show the chat or not
  const [showTable, setShowTable] = useState(false);
  const [formData, setFormData] = useState([]);
  const [userData, setUserData] = useState({
    username: '',
    type: '',
    Description: '',
    receivername: '',
    connected: false,
    subject: '',
    Status: '',
    id: '',
    message: ''
  });

  const [inputMessage, setInputMessage] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputDescription, setInputDescription] = useState('');
const [inputSubject, setInputSubject] = useState('');
const [inputStatus, setInputStatus] = useState('');


  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let sock = new SockJS('http://localhost:8087/ws');
    stompClient = over(sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe('/chatroom/public', onMessageReceived);
    stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage);
    userJoin();
  };

  const userJoin = () => {
    const chatMessage = {
      senderName: userData.username,
      status: "JOIN"
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    const payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        setPublicChats((prevChats) => [...prevChats, payloadData]);
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    console.log(payload);
    const payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setInputMessage(value);
  };
  const handleId = (event) => {
    const { value } = event.target;
    setInputId(value);
  };
  const handleDescription = (event) => {
    const { value } = event.target;
    setInputDescription(value);
  };
  const handleSubject = (event) => {
    const { value } = event.target;
    setInputSubject(value);
  };

 
  const sendValue = () => {
    if (stompClient) {
      const chatMessage = {
        senderName: userData.username,
        message: `${inputMessage} ${inputId} ${inputDescription} ${inputSubject} `,
        status: "MESSAGE"
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setInputMessage('');
      setInputId('');
      setInputSubject('');
      setInputDescription('');
     
      Alert.success('Message sent successfully!');
    }
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      const chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: `${inputMessage} ${inputId} ${inputDescription} ${inputSubject}`,
        status: "MESSAGE"
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setInputMessage('');
      setInputId('');
      setInputSubject('');
      setInputDescription('');
    
      Alert.success('Private message sent successfully!');
    }
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, username: value });
  };

  const registerUser = () => {
    connect();
  };

  const handleClick = () => {
    setShowChat(true);
    registerUser();
  };
  const handleSend2Click = () => {
    setShowTable(true);
  
    // Create a new row with form data
    const newRow = {
      username: userData.username,
      message: inputMessage,
      subject: inputSubject,
      type: inputId,
      description: inputDescription
    };
  
    // Add the new row to the table
    setFormData(prevData => [...prevData, newRow]);
  
    // Send the data to the server
    sendTicketToServer(newRow);
  };
  
  const sendTicketToServer = (ticketData) => {
    fetch('http://localhost:3000/ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    })
      .then(response => {
        console.log('Ticket sent successfully');
        // Update the formData state with the new ticket data
        setFormData(prevData => [...prevData, ticketData]);
      })
      .catch(error => {
        console.error('Error sending ticket:', error);
      });
  };
  
  
  






  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    // Perform any necessary form validation or data processing here
    
    // Send the form data to the '/ticket' endpoint
    fetch('/ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => {
        if (response.ok) {
          // If the request was successful, navigate to the '/ticket' endpoint
          navigate('/ticket', { state: { formData } });
        } else {
          // Handle any errors or show an error message to the user
          console.error('Request failed');
        }
      })
      .catch(error => {
        // Handle any network errors or show an error message to the user
        console.error('Network error', error);
      });
  };
  
 

  return (
    <div className="container44">
       <Formik
  initialValues={{
    message: "",
    id: "",
    description: "",
    subject: ""
  }}
  validationSchema={yup.object().shape({
    message: yup.string().required("Message is required."),
    id: yup.string().required("ID is required."),
    description: yup.string().required("Description is required."),
    subject: yup.string().required("Subject is required.")
  })}
  onSubmit={handleFormSubmit}
>

                {(props) => {
                  const { value, touched, errors, handleChange, handleBlur, handleSubmit } = props;
                  return (
                  
                      
<div className="login-page">
<div className="form">
                    <form className="login-form"onSubmit={handleSubmit}>
                    <input
            type="text"
            placeholder="Enter your username"
            value={userData.username}
            onChange={handleUsername}
          />
          <input
                type="text"
               
                placeholder="Enter the message"
                value={inputMessage}
                onChange={handleMessage}
              />
              <input
                type="text"
               
                placeholder="Enter the Subject"
                value={inputSubject}
                onChange={handleSubject}
              />
              <select
 
 value={inputId}
 onChange={handleId}
>
 <option value="">Select an option</option>
 <option value="PC">PC</option>
 <option value="Imprimante">Imprimante</option>
 <option value="Scanner">Scanner</option>
</select>
<input
                type="text"
                
                placeholder="Enter the description"
                value={inputDescription}
                onChange={handleDescription}
              />
               <button
  type="button"
  className="send-button"
  onClick={() => {
    tab === "CHATROOM" ? sendValue() : sendPrivateValue(); ;handleSend2Click();
    registerUser();
  }}
>
  Send
</button>
                    </form>
                    </div>
                    </div>
                  );
                }}
              </Formik>
            
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open Chat
      </Button>

      {showChat && (
        <div className="chat-container">
          <div className="chat-box">
            <div className="member-list">
              <ul>
                <li
                  onClick={() => { setTab("CHATROOM") }}
                  className={`member ${tab === "CHATROOM" && "active"}`}
                >
                  Chatroom
                </li>
                {[...privateChats.keys()].map((name, index) => (
                  <li
                    onClick={() => { setTab(name) }}
                    className={`member ${tab === name && "active"}`}
                    key={index}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="chat-content">
              <ul className="chat-messages">
                {tab === "CHATROOM" ? (
                  publicChats.map((chat, index) => (
                    <li
                      className={`message ${chat.senderName === userData.username && "self"}`}
                      key={index}
                    >
                      {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                      <div className="message-data">{chat.message}</div>
                      {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                    </li>
                  ))
                ) : (
                  privateChats.get(tab)?.map((chat, index) => (
                    <li
                      className={`message ${chat.senderName === userData.username && "self"}`}
                      key={index}
                    >
                      {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                      <div className="message-data">{chat.message}</div>
                      {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="chat-input">
            
            </div>
          </div>
        </div>
      )}
     
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Map through your data and render rows */}
              {formData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.message}</TableCell>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
       
    </div>
  );
};

export default Declarationn;
