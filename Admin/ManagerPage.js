import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './manager.css';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import backgroundImage1 from './../assets/maxresdefault.jpg';
import backgroundImage2 from './../assets/ANP-Agence-nationale-des-ports.jpg';
import backgroundImage3 from './../assets/ANP-sieege-de-sidi-maarouf-02.webp';
import logoImage from './../assets/Design_sans_titre-removebg-preview.png';
import logobg from './../assets/logobg.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import ChatIcon from '@mui/icons-material/Chat';

function ManagerPage() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(1);
  const [boxColor, setBoxColor] = useState('transparent');
  const [boxPosition, setBoxPosition] = useState(0);
  const handleLogout = () => {
    Alert.success('You have successfully logged out!', {
      position: 'top-right',
      effect: 'slide',
      timeout: 3000
    });
    navigate('/login');
  };

  const switchImage = () => {
    const nextImage = activeImage === 3 ? 1 : activeImage + 1;
    setActiveImage(nextImage);
  };

  const switchColor = () => {
    setBoxColor(boxColor === 'transparent' ? 'rgba(0, 0, 0, 0.5)' : 'transparent');
    setBoxPosition(boxPosition === 0 ? -10 : 0); // Adjust the value as needed
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      switchColor();
    }
  };

  useEffect(() => {
    const timer = setInterval(switchImage, 5000);
    return () => clearInterval(timer);
  }, [activeImage]);

  useEffect(() => {
    const colorTimer = setTimeout(switchColor, 10000);
    return () => clearTimeout(colorTimer);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 

  
  
  return (
    <div
      className="manager-page"
      style={{
        backgroundImage: `url(${
          activeImage === 1
            ? backgroundImage1
            : activeImage === 2
            ? backgroundImage2
            : backgroundImage3
        })`,
        backgroundSize: '100% 67%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header class="rn-header header-default header-transparent header-default sticky">
        <div className="black-box1" style={{ backgroundColor: boxColor }} onClick={switchColor}>
          <div style={{ paddingTop: '62px' }}>
            <hr style={{ borderColor: 'rgba(128, 128, 128, 0.5)' }} />
            
            <img className="logo-bgg" src={logobg} alt="Logo" />
            <nav>
              <ul className="nav-links">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/elements">Elements</a>
                </li>
                <li>
                  <a href="/potfolio">Contact</a>
                </li>
                
              </ul>
            </nav>
            <nav>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginLeft: '1500px',
                  marginTop: '-50px'
                }}
              >
                <li>
                  <IconButton className="icon-button">
                    <SettingsIcon style={{ color: '#acacac' }} />
                  </IconButton>
                </li>
                <li>
                  <IconButton className="icon-button">
                    <ExitToAppIcon style={{ color: '#acacac' }} onClick={handleLogout} />
                  </IconButton>
                </li>
                <li>
                  <IconButton className="icon-button">
                    <AccountCircleIcon style={{ color: '#acacac' }} />
                  </IconButton>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container position-relative"></div>
      </header>
      <div className="logo-container">
        <img src={logoImage} alt="Design_sans_titre-removebg-preview" className="logo" />
        
      </div>
      
      <div className="manager-header">
        <h1 className="title">Employee Materiel Central</h1>
        <p className="p1">
          Welcome to the Employee Space, where you can easily report faulty materials, request new ones,
        </p>
        <p className="p1">and communicate with your manager for any additional inquiries or concerns.</p>
        
        <IconButton className="switch-icon1" onClick={switchImage}>
          <span style={{ color: 'rgba(88, 24, 69, 0.8)', fontSize: ' 7rem ' }}>&gt;</span>
        </IconButton>
        
        <IconButton className="switch-icon2" onClick={switchImage}>
          <span style={{ color: 'rgba(88, 24, 69, 0.8)', fontSize: ' 7rem ' }}>&lt;</span>
        </IconButton>
      
      </div>
      <div className="manager-header1">
        <div className="buttons">
          <button className="btn-hover color-7">
          Add your request   <span style={{ color: 'white', fontSize: '1rem' }}>&rarr;</span>
          </button>
</div>

</div>

      <div className="black-box">  <div className="line">  <div class="two alt-two">
  <h11 >Services provide for you.
    <span>Our service offers a unique solution for seamlessly submitting requests or declaration requests for new materials through a dedicated chatroom space that connects directly with managers. With our intuitive platform, users can easily communicate their needs, ensuring efficient and streamlined processes.</span>
  </h11>
</div>
</div>
<div className='circle-container'>
  <div className=' circle4'><h1 className='k1'>1</h1>  </div>
  <div className=' circle5'><h1 className='k2'>2</h1></div>
  <div className=' circle6'><h1 className='k3'>3</h1></div>
  <div className=' circle7'><h1 className='k4'>4</h1></div>
</div>
<p  className="textserv">Declaration space</p> 

<p  className="textserv1">Request & Materiels space</p> 
<p  className="textserv2">Response space</p> 
<p  className="textserv3">ChatRoom space</p> 
<div className='container47'>
  
</div>

</div>


      <div className="contentcard">
        {/* card */}
        <div className="card">
        <div className="circle1">
  <ReceiptOutlinedIcon style={{ color: '#059dff', fontSize: '40px' }} />
</div>

<a href="/adddeclaration" className="textlink">Declaration</a>

          <p className="text"> Send your declaration for material defaults to the manager</p>

        </div>
        {/* end card */}

        {/* card */}
        <div className="card">
        <div className="circle2"> <ComputerOutlinedIcon style={{ color: ' #fb5343', fontSize: '40px' }}/></div>
          <a href="/adddeclaration" className="textlink">Request & Materiels</a>
          <p className="text">Add your request for new materiels.</p>
        </div>
        {/* end card */}

        {/* card */}
        <div className="card">
        <div className="circle3">  <ChatIcon style={{ color: ' #6549d5' , fontSize: '40px'}}/></div>
        <a href="/chatroom" className="textlink">ChatRoom</a>
          <p className="text">Espace talking with manager.</p>
        </div>
        {/* end card */}
       
      </div>
      

     
    </div>
     
    
  );
}

export default ManagerPage;
