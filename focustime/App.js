import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/Focus';
import { colors } from './src/utils/colors';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory';
import frog from './assets/frog-smallest.png'

export default function App() {
  const [currentSubject, setcurrentSubject] = useState(null);
  const [history,setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle={"light-content"}/>
      {!currentSubject ? (
        <>
          <Focus addSubject={setcurrentSubject}/>
          <FocusHistory history={history}/>
          <View style={styles.imageWrapper}>
          <Image style={styles.image} source={frog}></Image>
          </View>
        </>
      ) : (
        <Timer
          focusSubject = {currentSubject}
          OnTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject={() => setcurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
    image:{
    height:140,
    width:150,
  },
  imageWrapper:{
    flex : 1,
    alignItems: 'center',
    justifyContent : 'flex-end',
    marginTop: 10,
    marginBottom: 15,
  }
});
