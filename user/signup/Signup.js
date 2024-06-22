import React, { useState,Component } from 'react';
import './Signup.css';
import { Link, Navigate } from 'react-router-dom';
import { signup } from '../../util/APIUtils';
import Alert from 'react-s-alert';

import { FaTimes, FaEdit, FaTrash, FaCheck, FaTimesCircle } from 'react-icons/fa';
import {  Paper,Button, Toolbar, InputAdornment, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Search } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import { TableSortLabel, IconButton } from '@material-ui/core';
import { Box } from "@mui/material";
import Header from './../../componentss/Header';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  searchInput: {
    width: '75%', // same as the first code snippet
  },
  pageContent: {
    margin: theme.spacing(7),
    padding: theme.spacing(3),
    
  },
  
  tableCellDarkMode: {
    color: 'white',
  },
  tableCell: {
    borderRight: 'none',
    borderBottom: 'transparent',
    // Add any other custom styles for the table cell
  },
  whiteText: {
    color: 'white',
  },
});


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      registeredUsers: [],
      showPopup: false,
      searchTerm: '',
      sortBy: '',
      sortDirection: 'asc',
      openPopup: false,
      isLoggedIn: false, 
      isOnline: navigator.onLine,
      isBlackMode: false,
    };

    
   
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  handleBlackModeToggle() {
    this.setState((prevState) => ({
      isBlackMode: !prevState.isBlackMode,
    }));
  }
  componentDidMount() {
    // Retrieve registered users from localStorage
    const registeredUsers = localStorage.getItem('registeredUsers');
    if (registeredUsers) {
      const parsedUsers = JSON.parse(registeredUsers);
      const updatedUsers = parsedUsers.map(user => ({ ...user, isLoggedIn: false }));
      this.setState({ registeredUsers: updatedUsers });
    }

    // Check if the current page is "/manager"
    const isManagerPage = window.location.pathname === '/manager';
    this.setState({ isManagerPage });

    // Add event listener for online/offline status
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }
  
  componentWillUnmount() {
    // Remove event listener when the component is unmounted
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  handleOnline = () => {
    this.setState({ isOnline: true });
  };

  handleOffline = () => {
    this.setState({ isOnline: false });
  };
  componentDidUpdate() {
    const registeredUsers = JSON.stringify(this.state.registeredUsers);
    localStorage.setItem('registeredUsers', registeredUsers);
  }

  handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  handleSubmit(event, index) {
    event.preventDefault();
  
    const signUpRequest = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
  
    signup(signUpRequest)
      .then((response) => {

 
        Alert.success("You're successfully registered. Please login to continue!");
        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          role: 'user',
          isLoggedIn: false,
        };
        
        newUser.status = 'Online'; // Set initial status as "Online" for newly registered user

      const updatedUsers = this.state.registeredUsers.map((user) =>
        user.email === this.state.email ? { ...user, isLoggedIn: true } : user
      );

      this.setState({
        registeredUsers: [...updatedUsers, newUser],
        showPopup: false,
        isLoggedIn: true, // Set isLoggedIn to true for the current user
      });

        
     

        this.setState({
          isOnline: true,
        });

        if (newUser.role === 'admin' || newUser.role === 'manager') {
          if (newUser.role === 'admin') {
            this.props.history.push("/admin");
          } else {
            this.props.history.push("/manager");
          }
        } else {
          this.props.history.push("/");
        }
      })
      .catch((error) => {
        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
      });
  }

  handleLogin(index) {
    const updatedUsers = this.state.registeredUsers.map((user, i) =>
      i === index ? { ...user, isLoggedIn: true, status: 'Online' } : user
    );
  
    this.setState({
      registeredUsers: updatedUsers,
      isLoggedIn: true, // Set isLoggedIn to true for the current user
    });
  
    // Use history object to navigate to the appropriate page
    const user = updatedUsers[index];
    if (user.role === 'admin') {
      this.props.history.push('/admin');
    } else if (user.role === 'manager') {
      this.props.history.push('/manager');
    } else {
      this.props.history.push('/');
    }
  }
  
  
  handleLogout() {
    // Perform logout logic here
  
    const updatedUsers = this.state.registeredUsers.map((user) =>
      user.email === this.state.email ? { ...user, isLoggedIn: false, status: 'Offline' } : user
    );
  
    this.setState({
      registeredUsers: updatedUsers,
      isLoggedIn: false, // Set isLoggedIn to false for the current user
    });
  
    // Redirect to the login page or homepage after logout
    // Example:
    this.props.history.push('/login');
  }
  
  
  
  

  togglePopup() {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
  }

  handleUpdateUser(index) {
    const userToUpdate = this.state.registeredUsers[index];
    // Implement the logic to update the user's information
    // For example, you can show a form or a modal to edit the user's details
    // and update the state with the modified user information

    console.log('Updating user:', userToUpdate);
  }

  handleDeleteUser(index) {
    const userToDelete = this.state.registeredUsers[index];
    const updatedUsers = [...this.state.registeredUsers];
    updatedUsers.splice(index, 1);
    this.setState({ registeredUsers: updatedUsers });

    console.log('Deleting user:', userToDelete);

    // Display a success message
    Alert.success('Account deleted successfully!');
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  handleSort(columnName) {
    if (columnName === this.state.sortBy) {
      this.setState((prevState) => ({
        sortDirection: prevState.sortDirection === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      this.setState({
        sortBy: columnName,
        sortDirection: 'asc',
      });
    }
  }

  render() {
    const { isOnline } = this.state;
    const { isBlackMode } = this.state;
    const { registeredUsers, searchTerm, sortBy, sortDirection } = this.state;
  
    // Filter and sort the registered users based on search term and sort options
    const filteredUsers = registeredUsers
  .filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((user) => ({
    ...user,
    status: user.isLoggedIn ? 'Online' : 'Offline',
  }));

const sortedUsers = filteredUsers
  .sort((a, b) => {
      // Sorting logic based on selected column
      // Compare the values based on the sortBy column and sortDirection
      if (sortBy === 'name') {
        // Sorting logic for name
        if (a.name < b.name) return sortDirection === 'asc' ? -1 : 1;
        if (a.name > b.name) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      } else if (sortBy === 'email') {
        // Sorting logic for email
        if (a.email < b.email) return sortDirection === 'asc' ? -1 : 1;
        if (a.email > b.email) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      } else if (sortBy === 'password') {
        // Sorting logic for password
        if (a.password < b.password) return sortDirection === 'asc' ? -1 : 1;
        if (a.password > b.password) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      } else {
        // Default sorting logic
        return 0;
      }
    })
    .map((user) => ({
      ...user,
      status: user.isLoggedIn ? 'Online' : 'Offline',
    }));
    // Check if the logged-in user has the necessary role
    const userRole = 'manager'; // Replace this with the actual role of the logged-in user
    const hasControl = userRole === 'manager' || userRole === 'admin';

    return (
      <>
      
      {hasControl && (
        // Render the table and other user-related components only if the user has control
        <>
      <Box m="20px">
        <Header title="Users" subtitle="List of Employees" />
      </Box>
      <Paper style={{ backgroundColor: 'transparent' ,width:'1500px',marginLeft:'90px',}}>
        <div>
      <div className="signup-container" style={{ height: '50px' }}>

         
          <Toolbar>
            <Controls.Input
              label="Search Employees"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              style={{  width: '75%',}}
              onChange={this.handleSearch}
            />
            
              <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                      
                        onClick={this.togglePopup}
                        style={{ right:'-180px'}}
                    />
          </Toolbar>
          {this.state.showPopup && (
            <div className="signup-popup">
              <div className="signup-content">
              <div className="close-icon" style={{ top: "-10px" }} onClick={this.togglePopup}>
  <FaTimes />
</div>

                <h1 className="signup-title">Add new account</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-item">
                    <input
                      type="text"
                      name="name"
                      className="form-control1"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-item">
                    <input
                      type="email"
                      name="email"
                      className="form-control1"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-item">
                    <input
                      type="password"
                      name="password"
                      className="form-control1"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-item">
                    <button type="submit" className=" btn-primary1">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
          
        <div className="registered-users-container">
            <Table className="custom-table" style={{ backgroundColor: 'transparent', }}>
              <TableHead className="custom-table">
                <TableRow className="custom-table">
                <TableCell
  style={{
    backgroundColor: '#7986cb',
    color: ' #3f51b5',
    fontWeight: '600',
    borderBottom: 'none',
  }}
>
                  <TableSortLabel
                  className="tableCell"
                 active={this.state.sortBy === 'name'}
                    direction={this.state.sortBy === 'name' ? this.state.sortDirection : 'asc'}
                    onClick={() => this.handleSort('name')}
                  >
                    Name
                    {this.state.sortBy === 'name' && (
                      <span className={this.state.sortDirection === 'asc' ? 'arrow-up' : 'arrow-down'}></span>
                    )}
                  </TableSortLabel>
                </TableCell>
                <TableCell
  style={{
    backgroundColor: '#7986cb',
    color: ' #3f51b5',
    fontWeight: '600',
    borderBottom: 'none',
  }}
>
                  <TableSortLabel
                    active={this.state.sortBy === 'email'}
                    direction={this.state.sortBy === 'email' ? this.state.sortDirection : 'asc'}
                    onClick={() => this.handleSort('email')}
                  >
                    Email
                    {this.state.sortBy === 'email' && (
                      <span className={this.state.sortDirection === 'asc' ? 'arrow-up' : 'arrow-down'}></span>
                    )}
                  </TableSortLabel>
                </TableCell>
                <TableCell  style={{
                   borderBottom: 'none',
                    backgroundColor: '#7986cb',
                    color:' #3f51b5',
                    fontweight: '600',
                    
                    // Add your custom styles for the table cell
                  }}>
                  <TableSortLabel
                    active={this.state.sortBy === 'password'}
                    direction={this.state.sortBy === 'password' ? this.state.sortDirection : 'asc'}
                    onClick={() => this.handleSort('password')}
                  >
                    Password
                    {this.state.sortBy === 'password' && (
                      <span className={this.state.sortDirection === 'asc' ? 'arrow-up' : 'arrow-down'}></span>
                    )}
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ borderBottom: 'none', backgroundColor: '#7986cb', color:' #3f51b5', fontweight: '600' }}>Status</TableCell>
                    
                <TableCell  style={{
                   borderBottom: 'none',
                    backgroundColor: '#7986cb',
                    color:' #3f51b5',
                    fontweight: '600',
                  
                    // Add your custom styles for the table cell
                  }}>Role</TableCell>
                <TableCell  style={{
                   borderBottom: 'none',
                    backgroundColor: '#7986cb',
                    color:' #3f51b5',
                    fontweight: '600',
                  
                    // Add your custom styles for the table cell
                  }}>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
            {sortedUsers.map((user, index) => (
  <TableRow key={index}>
          <TableCell className="tableCell" style={{ borderBottom: 'transparent' }}>{user.name}</TableCell>
          <TableCell style={{ borderBottom: 'transparent' }}>{user.email}</TableCell>
          <TableCell className="tableCell" style={{ borderBottom: 'transparent' }}>{user.password}</TableCell>
          <TableCell>
      {user.status === 'Online' ? (
        <span style={{ color: 'green' }}>Online</span>
      ) : (
        <span style={{ color: 'red' }}>Offline</span>
      )}
    </TableCell>

          <TableCell style={{ borderBottom: 'none' }}>{user.role}</TableCell>
          <TableCell style={{ borderBottom: 'none' }}>
            <IconButton onClick={() => this.handleEditUser(index)}>
              <FaEdit style={{ fontSize: '20px', backgroundColor: '#7986cb' }} />
            </IconButton>
            <IconButton onClick={() => this.handleDeleteUser(index)}>
              <FaTimes style={{ fontSize: '20px', backgroundColor: '#ff4081' }} />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>

          </Table>
        </div>
      </div>
      </Paper>
      
      </>
      )}
      </>
    );
  }
}

export default withStyles(styles)(Signup);
