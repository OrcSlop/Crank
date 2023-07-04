import React from 'react'; 
import { StyleSheet,
         Alert, 
         Button, 
         StatusBar, 
         Platform, 
         View,
         Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

export default function App() {
  // console.log(require("./assets/icon.png")); 

  return (
    <SafeAreaView style={styles.container}>
        <Image 
          style = {styles.logo}
          source = {require('./assets/crank_logo.png')}/>
        <View
        style={{
          flex : 1,
          backgroundColor: 'powderblue',
        }}
        />
        <Image 
        style = {styles.image_bottom_left}
        source = {require('./assets/grey_gear.png')}/>
    </SafeAreaView>
  ); 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  body : {
    flex : 1,
    backgroundColor : 'dodgerblue',
  },
  logo : {
    flex : 0,
    marginLeft : 20,
    height : '10%',
    width : '50%'
  },
  image_bottom_left: {
    height : '50%',
    width : '100%',
    // justify
  },
});
