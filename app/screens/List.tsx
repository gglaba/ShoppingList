import {View,Text, StyleSheet,TextInput,Pressable, Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const List = ({navigation}: any) => {
  const [list,setList] = useState<any[]>([]);
  const [item,setItem] = useState<any[]>([]);
  useEffect(() => {},[]);

    const addList = async() => {
      const doc = addDoc(collection(FIRESTORE_DB,"lists"),{title:'List 3',items:["item1","item2","item3"]});
        
    };
  return (
    <View style = {styles.container}>
   <View>
    <TextInput placeholder = 'Enter List Name'
    onChangeText = {(text : string) => setList(text)}
    value = {list}/>
   </View>
    </View>
  );
}

export default List;

const styles = StyleSheet.create({

})