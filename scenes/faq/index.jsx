import React, { useState, useEffect } from 'react';
import './assistant.css';
import { saveAs } from 'file-saver';
import { Box, IconButton, useTheme, Dialog, TextField, Button } from "@mui/material";
import  {  useRef } from 'react';

import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
import { useNavigate } from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
import voiceVideo from  './../../assets/issou.mp4';
import Header from "./../../components/Header";
function Voice() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState('');
  const [note2, setNote2] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const [error, setError] = useState('');
  const [background, setBackground] = useState('');
  const [greetingSpoken, setGreetingSpoken] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [assistantResponse, setAssistantResponse] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Speech recognition is not supported in this browser');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      console.log('Mic is on');
      setError('');
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      console.log(transcript);
      setNote(transcript);

      const lowerCaseTranscript = transcript.toLowerCase();
      if (lowerCaseTranscript.includes('change the background to red')) {
        setBackground('blue');
      } else if (lowerCaseTranscript.includes('change the background to green')) {
        setBackground('green');
      } else if (lowerCaseTranscript.includes('switch to dark mode')) {
        colorMode.toggleColorMode('dark');
      } else if (lowerCaseTranscript.includes('switch to light mode')) {
        colorMode.toggleColorMode('light');
      } else if (lowerCaseTranscript.includes('change')) {
        handleDarkModeToggle();
      } else if (lowerCaseTranscript.includes('can you write for me')) {
        speak('yeah for sure');
        setIsWriting(true);
        setShowInput(true);
      } else if (lowerCaseTranscript.includes('hello issou')) {
        speak('how can i help you');
      } else if (lowerCaseTranscript.includes('go to manager page')) {
        navigate('/manager');
      } else if (lowerCaseTranscript.includes('go to users page')) {
        navigate('/signup');
      } else if (lowerCaseTranscript.includes('go to materiels page')) {
        navigate('/employees');
      } else if (lowerCaseTranscript.includes('go to dashboard page')) {
        navigate('/');
      } else if (lowerCaseTranscript.includes('yeah for sure') && isPopupOpen ) {
        setNote('');
      } else if (lowerCaseTranscript.includes('clear') && isPopupOpen) {
        setNote('');
      } else if (lowerCaseTranscript.includes('present yourself')) {
        openVideo();
      }
    };

    recognition.onerror = (event) => {
      console.error('Microphone error:', event.error);
      setError('Error accessing the microphone. Please make sure a microphone is connected and try again.');
    };

    if (isListening) {
      recognition.start();
      console.log('Start listening');
    } else {
      recognition.stop();
      console.log('Stop listening');
    }

    return () => {
      recognition.stop();
      console.log('Stop listening');
    };
  }, [isListening, isPopupOpen]);

  useEffect(() => {
    if (!greetingSpoken && note.toLowerCase().includes('hello ')) {
      setAssistantResponse('How can I help you?');
      speak('How can I help you?');
      setGreetingSpoken(true);
    }
  }, [note, greetingSpoken]);

  const handleListen = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.start();
    setIsListening(true);
  };

  const exportToWord = (text) => {
    const blob = new Blob([text], { type: 'application/msword' });
    saveAs(blob, 'note.doc');
  };

  const handleSaveNote = () => {
    if (note.toLowerCase().includes('save')) {
      const cleanedNote = note.replace(/save/gi, '').trim();
      if (!savedNotes.includes(cleanedNote)) {
        setSavedNotes((prevNotes) => [...prevNotes, cleanedNote]);
        setNote('');
        exportToWord(cleanedNote);
        handlePopupClose(); // Close the popup after saving the note
      }
    }
  };

  useEffect(() => {
    handleSaveNote();
  }, [note]);

  const handleDarkModeToggle = () => {
    colorMode.toggleColorMode();
  };

  const handleInputSubmit = () => {
    setIsWriting(false);
    setShowInput(false);
  };

  const speak = (message) => {
    const speechSynthesis = window.speechSynthesis;
    const speechMessage = new SpeechSynthesisUtterance(message);

    speechSynthesis.onvoiceschanged = () => {
      const voices = speechSynthesis.getVoices();
      const desiredVoice = voices.find((voice) => voice.name === 'Microsoft Mark - English (United States)');

      if (desiredVoice) {
        speechMessage.voice = desiredVoice;
        speechSynthesis.speak(speechMessage);
      } else {
        console.log('Desired voice not found. Please check the available voices and update the condition.');
      }
    };

    speechSynthesis.getVoices();
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
    setNote(''); // Clear the note when the popup opens
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setNote('');
    setShowInput(false); // Clear the note and close the input when the popup is closed
  };

  const handlePopupClose2 = () => {
    setIsPopupOpen(false);
    setNote('');
    // Clear the note and close the input when the popup is closed
  };
  const videoRef = useRef(null);
 
  const openVideo = () => {
    setShowVideo(true); // Show the video when the command is recognized
    const videoElement = document.getElementById("assistant-video");
    if (videoElement) {
      videoElement.play();
    }
  };
  
 
  

  return (
    <>
    
      <div className={`container555 ${background}`}>
      
        <h1>Voice assistant</h1>

        <div className="box">
          <h2>ask issou</h2>
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={handleSaveNote} disabled={!note || isWriting}>
            Save Note
          </button>
          <button onClick={() => setIsListening((prevState) => !prevState)}>
            Start/Stop
          </button>

          {error && <p className="error">{error}</p>}
          {note && <p>{note}</p>}
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
        {showVideo && ( // Only render the video if showVideo is true
          <video id="assistant-video" ref={videoRef} controls>
          <source src={voiceVideo} type="video/mp4" style={{width:'500px', height:'10px'}}/>
        </video>
        
        )}
      </div>
    
      <Dialog open={showInput} onClose={() => setShowInput(false)} >
        <TextField
          label="Type your note"
          multiline
          rows={4}
          variant="outlined"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{width:'500px'}}
        />

        <IconButton onClick={handlePopupClose2} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <Button variant="contained" onClick={handleSaveNote || handlePopupClose}>Save</Button>
      </Dialog>

      <Dialog open={isPopupOpen} onClose={handlePopupClose}>
        <IconButton onClick={handlePopupClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <Button variant="contained" onClick={handlePopupClose}>
          Close Popup
        </Button>
      </Dialog>
    </>
  );
}

export default Voice;
