import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const Player = (props) => {
  const { team , palerList } = props.route.params;
 
  console.log(props.route.params.team);
  return (
    <ScrollView>
     <View  >
      <Text style={styles.teamName} >{team}</Text>
      {palerList.map(player => (
        <View key={player.id}>
          <Text style={styles.text} >{player.name}</Text>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
       teamName : {
        color: 'black',
        fontSize:25,
        textAlign:'center',
         textTransform: 'uppercase',
         margin:10,
       },
       text:{
        backgroundColor:'skyblue',
        fontSize:20,
        padding:10,
        margin:5,
        textAlign:'center',
        color:'black',
        borderRadius:8,
        flex: 1 ,
    },

})

export default Player;
