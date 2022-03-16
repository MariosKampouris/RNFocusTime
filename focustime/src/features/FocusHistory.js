import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';

export const FocusHistory = ({history}) => {

  if(!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet!</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>


  return(
    <View style={styles.container}>
      <Text style = {styles.title}> Succesfully focused on :</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    padding: 18,
    flex:1
  },
  item:{
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
    paddingTop: 5
  },
  title:{
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})