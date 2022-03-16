import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../Components/RoundedButton';



export const Timing = ({onChangeTime}) => {
  return(
    <>
    <View style={styles.timingWrapper}>
      <View style={styles.timingButton}>
        <RoundedButton size={65} title='10' onPress={() => onChangeTime(10)}/>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={65} title='15' onPress={() => onChangeTime(15)}/>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={65} title='20' onPress={() => onChangeTime(20)}/>
      </View>
    </View>
    <View style={styles.timingWrapper}>
      <View style={styles.timingButton}>
        <RoundedButton size={65} title='30' onPress={() => onChangeTime(30)}/>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={65} title='45' onPress={() => onChangeTime(45)}/>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={65} title='60' onPress={() => onChangeTime(59.99)}/>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton : {
    flex :1,
    alignItems: 'center',
  },
  timingWrapper:{
    flex: 0.1,
    padding : 40,
    flexDirection : 'row',
  },
})