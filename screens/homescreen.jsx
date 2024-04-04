import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image, ScrollView, fontWeight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-native-material/core";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Evilicons from '@expo/vector-icons/EvilIcons';
import FontAwsome from '@expo/vector-icons/FontAwesome';
import Login from './Login';
import { SliderBox } from 'react-native-image-slider-box';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const image = [
    require('../assets/1.jpg'),
    require('../assets/2.jpg'),
    require('../assets/3.jpg'),
    require('../assets/4.jpg'),
  ]


  return (
    
    <ScrollView>
        
      <View style={styles.container}>
        <View style={{ position: 'absolute',  left: 10, marginTop:48  }}>
          <Ionicons name='arrow-back-outline' size={30}  onPress={goToLogin} />
        </View>
        <View style={styles.header}>

            <Text style={styles.headerText}>Explore </Text>

          </View>
          <View style={{ position: 'absolute', left:290, marginTop:48,   }}>
          <Ionicons name='person' size={30}   />
          </View>
          <View style={{ position: 'absolute', left:330, marginTop:48  }}>
          <Ionicons name='cart' size={30}  onPress={goToCart} />
          </View>
          <View style={{ position: 'absolute',  right: 1, marginTop:48  }}>
          <Ionicons name='ellipsis-vertical' size={30}   />
          </View>

        <View style={{ marginTop:50 }}>
          <SliderBox images={image} dotcolor="red" inactiveDotColor="black"
           dotStyle={{ height: 10, width: 10, borderRadius: 50 }} 
           imageLodingColor="black" 
           autoplay={true} 
           autoplayInterevel={1000} 
           circleLoop={true} 
           onCurrentImagePressed={(index) => alert(index + 1)} 
           firstItem={4} 
           paginationBoxVerticalPadding={20} 
    
           />
        </View>
        <View >
          
        </View>
        <View style={styles.content}>
          <View>
            <Image
              source={require('../assets/clothing.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Clothing</Text>
          </View>

          <View>
            <Image
              source={require('../assets/home.jpeg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Home Appliances</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View>
            <Image
              source={require('../assets/hc.png.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Electronics</Text>
          </View>

          <View>
            <Image
              source={require('../assets/hc.png.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Grocerys</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View>
            <Image
              source={require('../assets/hc.png.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Beauty</Text>
          </View>

          <View>
            <Image
              source={require('../assets/hc.png.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Furniture</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View>
            <Image
              source={require('../assets/hc.png.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Pharmacy</Text>
          </View>

          <View>
            <Image
              source={require('../assets/hc.png.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Books,toys</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View>
            <Image
              source={require('../assets/hc.png.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>Travel</Text>
          </View>

          <View>
            <Image
              source={require('../assets/hc.png.jpg')}
              style={styles.cartImage}
            />
            <Text style={styles.contenttext}>For buisness</Text>
          </View>
        </View>



        <View >
          <TouchableOpacity onPress={goToCart} style={styles.button}>
            <Text style={styles.buttonText}>Go to Cart</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  header: {
    marginLeft: 20,
    marginBottom: 5,
    alignItems: 'flex-start',

  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'black',
    marginLeft: 30,
    marginTop: 50
  },
  content: {


    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',


  },
  content2: {
    flexDirection: 'row'
  },
  contenttext: {

    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'black',
    textAlign: 'right',
    marginRight: 15
  },

  cartImage: {
    width: 160,
    height: 180,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'stretch'

  },

  cartText: {
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#535878',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    width: 150,
    marginLeft: 125,
    marginTop: 40,
    position: 'relative'

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
export default HomeScreen;

