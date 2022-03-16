import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {colors} from '../utils/colors';
import {RoundedButton} from '../Components/RoundedButton';
import {PacificoRegular} from '../../assets/PacificoRegular.ttf';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <>
    <View style={styles.titleWrapper}>
      <Text style={styles.titleText}>FOCUS TIME</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textinput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
        <RoundedButton title='+' size={60} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  titleWrapper:{
    paddingTop : 10,
    color : colors.white,
    fontWeight : 'bold',
    alignItems: 'center',
    borderBottomColor: 'pink',
    borderBottomWidth: 2
  },
  titleText:{
    color : colors.white,
    fontWeight : 'bold',
    fontSize : 40,
    fontFamily: 'Cochin'
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'flex-start',
    flexDirection : 'row',
  },
  textinput: {
    flex: 1,
    marginRight : 10
  },
  button:{
    justifyContent: 'center'
  },
});
