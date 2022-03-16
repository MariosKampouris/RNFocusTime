import React, {useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import {Countdown} from '../Components/Countdown';
import {RoundedButton} from '../Components/RoundedButton';
import {colors} from '../utils/colors';
import {ProgressBar} from 'react-native-paper';
import {Timing} from './Timing';
import {useKeepAwake} from 'expo-keep-awake';


const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export const Timer = ({focusSubject, clearSubject, OnTimerEnd}) => {
useKeepAwake();
const[isStarted, setIsStarted] = useState(false);
const[progress,setProgress] = useState(1);
const[minutes,setMinutes] = useState(0.1);

const onEnd= (reset) => {
  Vibration.vibrate(PATTERN);
  setIsStarted(false);
  setProgress(1);
  reset();
  OnTimerEnd(focusSubject);
}


return(
  <View style={styles.container}>
    <View style={styles.countdown}>
      <Countdown 
      minutes={minutes}
      isPaused={!isStarted} 
      onProgress={setProgress} 
      onEnd={onEnd}
      />
      <View style={{paddingTop: 24}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
    <View style={{paddingTop: 20}}>
      <ProgressBar
      progress={progress}
      color={colors.progressBar} 
      style={{height: 8}}
      />
    </View>

    <View style={styles.timingWrapper}>
      <Timing onChangeTime={setMinutes}/>
    </View>

    <View style={styles.buttonWrapper}>
      {!isStarted &&( 
       <RoundedButton size={105} title='start' onPress={() => setIsStarted(true)}/>
      )}
      {isStarted &&( 
       <RoundedButton size={105} title='pause' onPress={() => setIsStarted(false)}/>
      )}
    </View>
    <View style={styles.clearSubjectWrapper}>
      <RoundedButton size={55} title='X' onPress={clearSubject} />
    </View>
  </View>
);};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  countdown:{
    flex:0.5,
    alignItems:'center',
    justifyContent: 'center',
  },
  buttonWrapper:{
    flex: 0.3,
    flexDirection: 'row',
    padding : 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingWrapper:{
    flex: 0.3,
    padding : 5,
  },
  clearSubjectWrapper:{
    flexDirection : 'row',
    justifyContent:'center',
    paddingBottom: 10
  },
  title:{
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task:{
    color: colors.white,
    textAlign: 'center',
  },
})