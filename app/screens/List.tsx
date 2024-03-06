import {View,Text, Pressable, Button} from 'react-native';
import React, { useEffect } from 'react';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const List = ({navigation}: any) => {
    const addList = async() => {
        const doc = addDoc(collection(FIRESTORE_DB,"lists"),{title:'List 3',items:["item1","item2","item3"]})
        console.log('Document added',doc);
    };
  return (
    <View>
      <Text>List</Text>
        <Pressable onPress={addList}>
            <Text>Add List</Text>
        </Pressable>
      <Button onPress={() => navigation.navigate('Details')} title="Go to Details" />
    </View>
  );
}

export default List;