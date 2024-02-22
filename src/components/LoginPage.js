/* eslint-disable */
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert'; // Import for the warning component
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useTranslation } from 'react-i18next'; 

//import i18n from './i18n'; 
//import en from './locale/en/translation.json'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false); // Add state for warning
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault(); // Prevents form submission upon clicking the icon
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctUsername = "USERNAME";
    const correctPassword = "123098";

    if (username === correctUsername && password === correctPassword) {
      console.log("Login Successful!"); 
    } else {
      setShowWarning(true); 
    }
  };

  return (
 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
   <div style={{ width: 300 }}>
     <form onSubmit={handleSubmit} sx={{ 
       padding: 20,
       backgroundColor: '#fff',
       borderRadius: 5,
       boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
       width: '100%'  // Form takes up full available width within wrapper
     }}>
       <Grid container spacing={2}> 
                 <Grid item xs={12}>
                   <Typography variant="h5" gutterBottom>{t('LoginPage:Title')} </Typography>
                 </Grid>
                 <Grid item xs={12}>
                   <TextField
                     fullWidth 
                     label={t('LoginPage:UserName')} 
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                   />
                 </Grid>
                 <Grid item xs={12}>
                   <TextField
                   fullWidth
                   label={t('LoginPage:Password')}
                   type={showPassword ? 'text' : 'password'} // Toggle visibility
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   InputProps={{ 
                     endAdornment: (
                       <InputAdornment position="end">
                         <IconButton
                           onClick={() => setShowPassword(!showPassword)}
                           onMouseDown={handleMouseDownPassword}
                         >
                           {showPassword ? <VisibilityOff /> : <Visibility />}
                         </IconButton>
                       </InputAdornment>
                     )
                   }}
                 />
                 </Grid>
                 <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Login
                  </Button>
                </Grid>
                { showWarning && ( // Place the Alert Component Here 
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {t('LoginPage:loginWarning')} 
                  </Alert>
                ) } 
               </Grid>
             </form>
      </div>
    </Box>
  );
};

export default LoginPage;
