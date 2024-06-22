import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import AppHeader from './common/AppHeader';
import { useNavigate } from 'react-router-dom';
import Home from './home/Home';
import Login from './user/login/Login';
import Signup from './user/signup/Signup';
import Profile from './user/profile/Profile';
import OAuth2RedirectHandler from './user/oauth2/OAuth2RedirectHandler';
import NotFound from './common/NotFound';
import LoadingIndicator from './common/LoadingIndicator';
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import PrivateRoute from './common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import AdminPage from './Admin/AdminPage';
import ManagerPage from './Admin/ManagerPage';
import Topbar from "./scenes/global/Topbar";
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import Voice from './scenes/faq/index';
import Geography from './scenes/geography';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Calendar from './scenes/calendar/calendar';
import ChatRoom from './component/ChatRoom'
import UserManager from './component/UserManager';
import Notifications from './component/Notifications';
import Employees from './Employees/Employees';
import DataGraph from './chart/DataGraph';
import { DataGraphdeclaration } from './chart/DataGraphdeclaration';
import BarChartLink from './chart/BarChartLink';
import Declaration  from './Admin/Declaration';
import Declarationn from './componentsdeclaration/declarationn';
import Tasks from './componentsdeclaration/Tasks';
import TableComponent from './componentsdeclaration/TableComponent';
 import ListEmployeeComponent from './declaration/ListEmployeeComponent';
 import Listvivocomponent from './declaration/Listvivocomponent';
 import AddEmployeeComponent from './declaration/AddEmployeeComponent';
 import Datagrapheemployee from './chart/Datagrapheemployee';
 import Datagraphmateriel from './chart/Datagraphmateriel';
 import BarChartdeclaration from './chart/BarChartdeclaration';
 import Datagraphdeclarations from './chart/Datagraphdeclarations';
 import Kelti from './Employees/Kelti';
 import Anzar1 from './Employees/Anzar1';
 import DataGraphKelti from './chart/DataGraphKelti';
 import DataGraphAnzar1 from './chart/DataGraphAnzar1';
 import DataGraphTodra from './chart/DataGraphTodra';
 import DataGraphTamegra from './chart/DataGraphTamegra';
import Todra from './Employees/Todra';
import Tamegra from './Employees/Tamegra';
import Igoudar from './Employees/Igoudar';
import Maranda3 from './Employees/Maranda3';
import DataGraphIgoudar from './chart/DataGraphIgoudar';
import Vivoenergy from './declaration/vivoenergy';
import Total from './declaration/Total';
import Petrod from './declaration/Petrod';
import Petrodsud from './declaration/Petrodsud';
import FileUpload from './declaration/FileUpload';
import ListUpload from './declaration/ListUpload';
import ParentComponent from './declaration/ParentComponent';
import ParentComponent1 from './declaration/ParentComponent1';
import Fichegazoil from './Employees/Fichegazoil';
import DataGraphMaranda3 from './chart/DataGraphMaranda3';
import DataGraphMaranda5 from './chart/DataGraphMaranda5';
import Maranda5 from './Employees/Maranda5';
import Maranda6 from './Employees/Maranda6';
import DataGraphMaranda6 from './chart/DataGraphMaranda6';
import DataGraphAlicante from './chart/DataGraphAlicante';
import Alicante from './Employees/Alicante';
import Toumzin from './Employees/Toumzin';
import DataGraphToumzin from './chart/DataGraphToumzin';
import Gorgues from './Employees/Gorgues';
import DataGraphGorgues from './chart/DataGraphGorgues';
import DataGraphTafoukt from './chart/DataGraphTafoukt';
import Test from './Employees/Test';
import Sms from './Employees/Sms';
import Tafoukt from './Employees/Tafoukt';
import Mlyelhabib from './Employees/Mlyelhabib';
import DataGraphMlyelhabib from './chart/DataGraphMlyelhabib';
import DataGraphMaranda8 from './chart/DataGraphMaranda8';
import Maranda8 from './Employees/Maranda8';
import DataGraphMaranda1 from './chart/DataGraphMaranda1';
import Maranda1 from './Employees/Maranda1';
import DataGraphMaranda2 from './chart/DataGraphMaranda2';
import Maranda2 from './Employees/Maranda2';
import DataGraphMaranda4 from './chart/DataGraphMaranda4';
import Maranda4 from './Employees/Maranda4';
import DataGraphMaranda7 from './chart/DataGraphMaranda7';
import Maranda7 from './Employees/Maranda7';
import Anzar2 from './Employees/Anzar2';
import DataGraphAnzar2 from './chart/DataGraphAnzar2';
import Belromar1 from './Employees/Belromar1';
import DataGraphBelromar1 from './chart/DataGraphBelromar1';
import Belromar2 from './Employees/Belromar2';
import DataGraphBelromar2 from './chart/DataGraphBelromar2';
import Azal from './Employees/Azal';
import DataGraphAzal from './chart/DataGraphAzal';
import Dades from './Employees/Dades';
import Masine from './Employees/Masine';
import DataGraphMasine from './chart/DataGraphMasine';

import DataGraphDades from './chart/DataGraphDades';
import UploadFiles from './declaration/file.component';
import FileTable from "./declaration/FileTable";
import Nayat from './Employees/Nayat';
import DataGraphNayat from './chart/DataGraphNayat';
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const location = useLocation();

  
  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
      .then((response) => {
        setCurrentUser(response);
        setAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuthenticated(false);
    setCurrentUser(null);
    Alert.success("You're safely logged out!");
  };
 useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);
  useEffect(() => {
    if (!authenticated && location.pathname !== '/login') {
      // Redirect to login page if not authenticated
    }
  }, [authenticated, location.pathname, navigate]);
  


  const isLoginPage = location.pathname === '/login' 
  const isManagerPage = location.pathname === '/manager' 
  || location.pathname === '/declationn'|| location.pathname === '/ticket'
  || location.pathname === '/adddeclaration' || location.pathname === '/chatroom' || location.pathname === '/*' ;
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isLoginPage  && !isManagerPage &&<Sidebar isSidebar={isSidebar} />}
          <main className="content" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
            {!isLoginPage && !isManagerPage &&  <Topbar setIsSidebar={setIsSidebar} />}
            
            <Routes>
            <Route
  path="/"
  element={<Dashboard authenticated={authenticated} />}
/>

              <Route
                 path="/declarationh"
                 element={<Declaration authenticated={authenticated} />}
               />
              <Route
                path="/login"
                element={<Login setAuthenticated={setAuthenticated} />}
              />
              
              <Route
                path="/profile"
                element={
                  <Profile
                    authenticated={authenticated}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/signup"
                element={<Signup authenticated={authenticated} />}
              />
              <Route
                path="/oauth2/redirect"
                element={<OAuth2RedirectHandler />}
              />

              <Route
                path="/admin"
                element={
                  <AdminPage
                    authenticated={authenticated}
                    onLogout={handleLogout}
                  />
                }
              />
         
              <Route
                path="/manager"
                element={
                  <ManagerPage
                    authenticated={authenticated}
                    onLogout={handleLogout}
                  />
                }
              />
        <Route component={NotFound} />
        <Route path="/*" element={<NotFound />} />
         {!isLoginPage && <Route path="/" element={<Dashboard />} />}
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/issou" element={<Voice />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/usermanager" element={<UserManager/>}></Route>
        <Route path="/ChatRoom" element={<ChatRoom/>}></Route>
        <Route path="/notifications" element={<Notifications/>}></Route>
        <Route path="/employees" element={<Employees/>} />
        <Route path="/barChart" element={<DataGraph />} />
        <Route path="/barChart2" element={<DataGraphdeclaration />} />
        <Route path="/declationn" element={<Declarationn />} />
        <Route path="/ticket" element={<Tasks />} />
        <Route path="/tablecomponent" element={<TableComponent  />} />
        <Route exact path="/declaration" element={<ListEmployeeComponent  />} />
        <Route path="/declaration" element={<AddEmployeeComponent  />} />
        <Route path="/adddeclaration" element={<AddEmployeeComponent  />} />
        <Route path="//edit-employee/:id" element={<AddEmployeeComponent  />} />
        <Route path="/barchartemployee" element={<Datagrapheemployee  />} />
        <Route path="/barchartmateriels" element={<Datagraphmateriel  />} />
        <Route path="/barchartdeclarations" element={<BarChartdeclaration  />} />
        <Route path="/linechartdeclarations" element={<Datagraphdeclarations  />} />
        <Route path="/kelti" element={<Kelti />} />
        <Route path="/keltichart" element={<DataGraphKelti />} />
       
        
        <Route path="/Vivoenergy" element={<Vivoenergy />} /> 
        <Route path="/Vivolist" element={<Listvivocomponent />} /> 
        <Route path="/Total" element={<Total />} /> 
        <Route path="/Petrod" element={<Petrod />} /> 
        <Route path="/PetroSUD" element={<Petrodsud />} /> 
        <Route path="/upload" element={<FileUpload />} /> 
        <Route path="/uploadTable" element={<ListUpload />} /> 
        <Route path="/ParentComponent" element={<ParentComponent />} /> 
        <Route path="/ParentComponent1" element={<ParentComponent1 />} />
        <Route path="/Fichegazoil" element={<Fichegazoil />} />
        <Route path="/Maranda3" element={<Maranda3 />} /> 
        <Route path="/Maranda3chart" element={<DataGraphMaranda3 />} /> 
        <Route path="/Maranda5" element={<Maranda5 />} /> 
        <Route path="/Maranda5chart" element={<DataGraphMaranda5 />} />
        <Route path="/Maranda6" element={<Maranda6 />} /> 
        <Route path="/Maranda6chart" element={<DataGraphMaranda6 />} />
        <Route path="/Alicante" element={<Alicante />} /> 
        <Route path="/Alicantechart" element={<DataGraphAlicante />} />    
        <Route path="/Toumzin" element={<Toumzin />} /> 
        <Route path="/Toumzinchart" element={<DataGraphToumzin/>} />  
        <Route path="/Gorgues" element={<Gorgues />} /> 
        <Route path="/Gorgueschart" element={<DataGraphGorgues/>} />   
        <Route path="/Sms" element={<Sms/>} /> 
        <Route path="/Tafouktchart" element={<DataGraphTafoukt />} /> 
        <Route path="/Tafoukt" element={< Tafoukt/>} />   
        <Route path="/Mlyelhabib" element={< Mlyelhabib/>} />  
        <Route path="/Mlyehabibchart" element={< DataGraphMlyelhabib/>} />
        <Route path="/Maranda8" element={< Maranda8/>} />
        <Route path="/Maranda8chart" element={< DataGraphMaranda8/>} />     
        <Route path="/Maranda1" element={< Maranda1/>} />
        <Route path="/Maranda1chart" element={< DataGraphMaranda1/>} />
        <Route path="/Maranda2" element={< Maranda2/>} />
        <Route path="/Maranda2chart" element={< DataGraphMaranda2/>} />
        <Route path="/Maranda4" element={< Maranda4/>} />
        <Route path="/Maranda4chart" element={< DataGraphMaranda4/>} /> 
        <Route path="/Maranda7" element={< Maranda7/>} />
        <Route path="/Maranda7chart" element={< DataGraphMaranda7/>} /> 
        <Route path="/Anzar2" element={< Anzar2/>} />
        <Route path="/Anzar2chart" element={< DataGraphAnzar2/>} /> 
        <Route path="/Belromar1" element={< Belromar1/>} />
        <Route path="/Belromar1chart" element={< DataGraphBelromar1/>} />              
        <Route path="/Belromar2" element={< Belromar2/>} />
        <Route path="/Belromar2chart" element={< DataGraphBelromar2/>} />  
        <Route path="/Azal" element={< Azal/>} />
        <Route path="/Azalchart" element={< DataGraphAzal/>} /> 
        <Route path="/Dades" element={< Dades/>} />
        <Route path="/Dadeschart" element={< DataGraphDades/>} /> 
        <Route path="/UploadFiles" element={< UploadFiles/>} /> 
        <Route path="/FileTable" element={< FileTable/>} /> 
        <Route path="/Masine" element={< Masine/>} />
        <Route path="/DataGraphMasine" element={< DataGraphMasine/>} />  
        <Route path="/Nayat" element={< Nayat/>} />
        <Route path="/DataGraphNayat" element={< DataGraphNayat/>} />  
            </Routes>
           
          </main>
          
          <Alert
            stack={{ limit: 3 }}
            timeout={3000}
            position="top-right"
            effect="slide"
            offset={65}
          />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
