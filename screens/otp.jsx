import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
  },
}));

const OTPVerification = () => {
  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const handleSendOTP = async () => {
    try {
      const response = await axios.post('http://your-backend-url/api/send-otp', { phoneNumber });
      setVerificationId(response.data.verificationId); // Assuming backend returns a verification ID
      console.log('OTP sent successfully');
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://your-backend-url/api/verify-otp', { verificationId, otp });
      console.log('OTP verified successfully');
      // Proceed with login after OTP verification
      handleLogin();
    } catch (error) {
      console.error('Failed to verify OTP:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-backend-url/api/login', { phoneNumber });
      console.log(response.data); // Assuming backend returns a message upon successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        OTP Verification
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Phone Number"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="OTP"
              fullWidth
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleSendOTP}>
          Send OTP
        </Button>
        <Button variant="contained" color="primary" onClick={handleVerifyOTP}>
          Verify OTP
        </Button>
      </form>
    </Container>
  );
};

export default OTPVerification;
