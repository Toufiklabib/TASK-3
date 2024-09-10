import { View,  StyleSheet, Button, SafeAreaView, TouchableOpacity, Text, } from 'react-native';
import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import img from '../Assetes/ff.jpg'

const Home = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null); //team
  const [items, setItems] = useState([
    {label: 'Argentina', value: 'argentina'},
    {label: 'Brazil', value: 'brasil'},
    {label: 'Germany', value: 'germany'},
    {label: 'England', value: 'england'},
  ]);
  const argentinas = [
    { id: 1, name: 'Leo Messi', age: 37 },
    { id: 2, name: 'Di María', age: 37 },
    { id: 3, name: 'Lautaro Martinez', age: 37 },
    { id: 5, name: 'Rodrigo de Paul', age: 37 },
    { id: 6, name: 'Enzo Farnadez', age: 37 },
    { id: 7, name: 'Mac Alister', age: 37 },
    { id: 8, name: 'Lisandro Matrinez', age: 37 },
    { id: 9, name: 'Cristian Romero ', age: 37 },
    { id: 10, name: 'Nuhuel Molina', age: 37 },
    { id: 11, name: 'Emiliano Matrinez ', age: 37 },
  ];
  const brasils = [
    { id: 12, name: 'Neymar Jr', age: 37 },
    { id: 13, name: 'Raphinha', age: 37 },
    { id: 14, name: 'Rodrygo', age: 37 },
    { id: 21, name: 'Endrik', age: 37 },
    { id: 22, name: 'Lucas Paqueta', age: 37 },
    { id: 23, name: 'Gabriel', age: 37 },
    { id: 24, name: 'Danilo', age: 37 },
    { id: 25, name: 'Marquinhos', age: 37 },
    { id: 26, name: 'Éder Militao', age: 37 },
    { id: 27, name: 'Alisson Becker', age: 37 },
    { id: 28, name: 'Éderson', age: 37 },
  ];
  const germanys = [
    { id: 15, name: 'Thomas Mular', age: 37 },
    { id: 16, name: 'Antonio Rüdiger', age: 37 },
    { id: 17, name: 'Joshua Kimmich', age: 37 },
  ];
  const englands = [
    { id: 18, name: 'Phil Foden', age: 37 },
    { id: 19, name: 'Cole Palmar', age: 37 },
    { id: 20, name: 'Harry Kane', age: 37 },
  ];


 const handelSubmit = (team)=>{
  let palerList = [];
     if(team === 'argentina')
     {
        palerList = argentinas;
     }
     else if (team === 'brasil') {
      palerList = brasils;
     }
     else if (team === 'germany') {
      palerList = germanys;
     }
     else if (team === 'england') {
      palerList = englands;
     }
     navigation.navigate('Player' , {team , palerList});
 }


  return (
    <SafeAreaView style={styles.continer} >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropDown}
        placeholder="Select Your Favorite Team"
      />
       <TouchableOpacity
        onPress={() => handelSubmit(value)}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
   dropDown :{
    width:380,
     backgroundColor: 'orange',
     color: 'white',
     fontWeight: 'bold',
     margin:'auto',
     marginBottom:40,
   },
   continer :{
     flex:1,
     backgroundColor:'white',
     alignItems:'center',
     justifyContent:'center'
   },
   btn:{
    padding:10,
    backgroundColor: 'green',
    borderRadius:8,
   }, 
    btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
  }
 
});

export default Home;
