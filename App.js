import React from 'react';
import { StyleSheet, Alert, StatusBar, Platform, View, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'NATS_Regular': require('./assets/fonts/NATS_Regular.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/crank_logo.png')}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'powderblue',
        }}
      >
        <View style={styles.title_section}>
          {fontLoaded && (
            <>
              <Text style={[styles.text, { fontFamily: 'NATS_Regular', lineHeight: 76 }]}>Lorem ipsum tip.{'\n'}Ipsum rip.</Text>
              {/* <Text style={[styles.text, { fontFamily: 'NATS_Regular' }]}>Ipsum rip.</Text> */}
            </>
          )}
        </View>
        <View style={styles.button_section}>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.buttonImage}
              source={require('./assets/nexticon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styles.image_bottom_left}
        source={require('./assets/grey_gear.png')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  body: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  logo: {
    flex: 0,
    marginLeft: 25,
    height: '10%',
    width: '50%',
  },
  title_section: {
    flex: 5,
    paddingLeft: 35,
    paddingTop: 15,
    backgroundColor: '#F1F1F1',
  },
  title_text: {},
  text: {
    padding: 0,
    margin: 0,
    textAlign: 'left',
    color: 'black',
    fontSize: 50,
  },
  button_section: {
    flex: 4,
    backgroundColor: '#F1F1F1',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#252525',
    borderRadius: 999, // Set to a high value to ensure a perfect circle
    padding: 20,
    marginRight:40,
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  image_bottom_left: {
    height: '50%',
    width: '100%',
  },
});

