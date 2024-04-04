import { Button } from "@react-native-material/core";
import { Text, TouchableOpacity, View ,Image} from "react-native";
import { StyleSheet } from "react-native";
const LandingPage = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/hc.png.jpg')} />
        <Button 
          title="Go to Login"
          onPress={goToLogin}
          style={styles.button}
        />
      </View>
    );
  };
  
  export default LandingPage;


const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#52AD9C',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center'
    },
    img:{
      height:700
  },
  button:{
    marginBottom:50,
    backgroundColor:'#47624f'
  }
});
 
