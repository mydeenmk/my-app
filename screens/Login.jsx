// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Evilicons from '@expo/vector-icons/EvilIcons';
// import FontAwsome from '@expo/vector-icons/FontAwesome';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  

//   const navigation = useNavigation(); // Initialize navigation hook
   
//   const LandingPage = () => {
//     navigation.navigate('Landingpage');
//   };


//   const HomeScreen = () => {
//     // Basic authentication logic (replace with your actual authentication process)
//     if (username === '1' && password === '1') {
//       console.log('Login successful'); // For demonstration purposes
//       navigation.navigate('Home');
//     } else {
//       console.log('Invalid credentials'); // For demonstration purposes
//       // Handle invalid credentials (e.g., display an error message)
//     }
//   };
  
 

//   return (
//     <View style={styles.container}>
//       <View style={{ position: 'absolute', top: 10, left: 10, marginTop:50}}>
//           <Ionicons name='arrow-back-outline' size={30}  onPress={LandingPage}/>
//       </View>
//       <Text style={styles.head}>HC TECHI</Text>

      
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         placeholderTextColor={'#fff'}
//         onChangeText={text => setUsername(text)}
//         value={username}
//       />
//       <TextInput
//         style={styles.input}
//         styles={{textDecorationLine:'underline'}}
//         placeholder="Password" 
//         placeholderTextColor={'#fff'}
//         onChangeText={text => setPassword(text)}
//         value={password}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button}   onPress={HomeScreen}>
//         <Text style={styles.buttonText}>LOGIN</Text>
//       </TouchableOpacity>
//       <Text style={styles.pass}>Forgot password !!!</Text>

//       <View style={{ flexDirection: 'column',justifyContent:'center',width:165}} >
//       <FontAwsome.Button name='apple' backgroundColor='#47624f' color='#fff' borderRadius={25} >
//       <Text style={{color:'white'}} >Sign in with Apple</Text>
//         </FontAwsome.Button>
//         </View>
//         <View style={{marginTop:20,  }} onPress={HomeScreen}>
//         <FontAwsome.Button name='google' backgroundColor='#47624f' color='white' borderRadius={25} >
//       <Text  style={{color:'white',}}>Sign in with Google</Text>
//         </FontAwsome.Button>
//         </View>
      
      
      
        
      
//    </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#52AD9C',
  
//   },
//   input: {
//     width: 300,
//     height: 40,
//     borderColor: 'gray',
    
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#47624f',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 25,
//     marginBottom:20
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   pass:{
//     color:'white',
//     fontWeight: 'normal',
//     fontSize: 15,
//     marginBottom:20,
//     textDecorationLine:'underline'
//   },
//   head:{
//     color:'white',
//     fontWeight: 'bold',
//     fontSize: 28,
//     marginBottom:20
//   }
  

 
  
// });

//android : 101582001873-3cdlfcp15b2nc8j7ggn57qgahvo5f4b7.apps.googleusercontent.com

// export default Login;



// WebBrowser.maybeCompleteAuthSession()
//   const[request, response, promptAcync]= Google.useAuthRequest({
//     androidClientId:"101582001873-3cdlfcp15b2nc8j7ggn57qgahvo5f4b7.apps.googleusercontent.com"
//   });

//     React.useEffect(()=>{
//       handleSigninWithGoogle();
//     }, [response])

//   async function handleSigninWithGoogle(){
//     const user = await AsyncStorage.getItem("@user");
    
//         if (!user){
//           if (response?.type === "success") {
//             await getUserinfo(response.authentication.accessToken);
//           }
//         }
//     else{
//       setUserInfo(JSON.parse(user));
//     }
// }

//   const getUserinfo = async(token)=> {
//     if (!token) return;
//     try{
//       const response = await fetch(
//         "https://www.googleapis.com/userinfo/v2/me",
//         {
//             headers:{Authorization:`bearer ${token}`},
//         }
//       );
//           const user= await response.json();
//           await AsyncStorage.setItem('@user',JSON.stringify(user));
//           setUserInfo(user);
//           navigateToHome();
//     }     catch(error){
        
//     };
//   };

import React, { useState, } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import Evilicons from '@expo/vector-icons/EvilIcons';
import FontAwsome from '@expo/vector-icons/FontAwesome';
import * as WebBrowser from "expo-web-browser";
import* as Google from "expo-auth-session/providers/google";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react';


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[userinfo,setUserInfo]= useState(null);
  const navigation = useNavigation();

  // const handleSignInWithGoogle = async () => {
  //   try {
  //     const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  //       clientId: "101582001873-3cdlfcp15b2nc8j7ggn57qgahvo5f4b7.apps.googleusercontent.com",
  //     });

  //     await promptAsync();

  //     if (response?.type === 'success') {
  //       const { id_token } = response.params;
  //       await AsyncStorage.setItem('@user', id_token);
  //       navigation.navigate('Home');
  //     } else {
  //       // Handle sign-in failure
  //     }
  //   } catch (error) {
  //     console.error('Error signing in with Google:', error);
  //   }
  // };

  useEffect(() => {
    if (response?.type === 'success') {
      getUserInfo(response.authentication.accessToken);
    }
  }, [response]);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "101582001873-3cdlfcp15b2nc8j7ggn57qgahvo5f4b7.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      AsyncStorage.setItem('@user', id_token);
      navigation.navigate('Home');
    }
  }, [response]);

  const getUserInfo = async (token) => {
    try {
      const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await userInfoResponse.json();
      AsyncStorage.setItem('@user', JSON.stringify(user));
      setUserInfo(user);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };


  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('@user');
      setUserInfo(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const SERVER_IP = '172.20.10.7';

  const handleSendOTP = async () => {
    try {
      const response = await axios.post(`http://${SERVER_IP}:3000/api/send-otp`, { phoneNumber });
      Alert.alert('OTP Sent', response.data.message);
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP');
    }
  };

  const handleVerifyOTP = async () => {
     // Access navigation object
    try {
      const response = await axios.post(`http://${SERVER_IP}:3000/api/verify-otp`, { otp, phoneNumber });
      Alert.alert('OTP Verified', response.data.message);
      if (response.data.success) {
        setPhoneNumber('');
        setOtp('');
        // Navigate to HomeScreen upon successful verification
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  const LandingPage = () => {
    navigation.navigate('Landingpage');
  };

  const HomeScreen = () => {
    // Basic authentication logic (replace with your actual authentication process)
    if (username === '1' && password === '1') {
      console.log('Login successful'); // For demonstration purposes
      navigation.navigate('Home');
    } else {
      console.log('Invalid credentials'); // For demonstration purposes
      // Handle invalid credentials (e.g., display an error message)
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', top: 10, left: 10, marginTop: 50 }}>
        <Ionicons name='arrow-back-outline' size={30} onPress={LandingPage} />
      </View>
      <Text style={styles.head}>HC TECHI</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'#fff'}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#fff'}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={HomeScreen}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.pass}>Forgot password !!!</Text>

      <Text style={{fontSize:15,marginBottom:10}}>Login using OTP</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor={'#fff'}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity onPress={handleSendOTP} style={styles.button}  ><Text style={styles.buttonText}>SEND OTP</Text></TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="OTP"
        placeholderTextColor={'#fff'}
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity  onPress={handleVerifyOTP} style={styles.button} ><Text style={styles.buttonText}>Verify OTP</Text></TouchableOpacity>

      

      <View style={{ flexDirection: 'column', justifyContent: 'center', width: 165 }} >
        <FontAwsome.Button name='apple' backgroundColor='#47624f' color='#fff' borderRadius={25} >
          <Text style={{ color: 'white' }} >Sign in with Apple</Text>
        </FontAwsome.Button>
      </View>
      <View style={{ marginTop: 20 }}>
        <FontAwsome.Button name='google' backgroundColor='#47624f' color='white' borderRadius={25} onPress={() => promptAsync()} >
          <Text style={{ color: 'white' }}>Sign in with Google</Text>
        </FontAwsome.Button>
        {userinfo && <Button title='Sign out' onPress={handleSignOut} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52AD9C',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#47624f',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  pass: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 15,
    marginBottom: 20,
    textDecorationLine: 'underline'
  },
  head: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20
  }
});

export default Login;
