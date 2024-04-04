import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const OtpLoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState(null);

  const sendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log('Error sending OTP', error);
      // Handle error
    }
  };

  const confirmOTP = async () => {
    try {
      await confirm.confirm(otp);
      console.log('OTP confirmed');
      // User is now authenticated
    } catch (error) {
      console.log('Error confirming OTP', error);
      // Handle error
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send OTP" onPress={sendOTP} />
      {confirm && (
        <>
          <TextInput
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <Button title="Confirm OTP" onPress={confirmOTP} />
        </>
      )}
    </View>
  );
};

export default OtpLoginScreen;
