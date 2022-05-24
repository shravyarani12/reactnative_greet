import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const Greeter = ({greeting,buttontitle}) => {
    const [name, setName]=useState('');
    const [personalGreeting, setPersonalGreeting]=useState(greeting);
    console.log(name);
    return(
        <View style={styles.container}>
        <Text> {personalGreeting}</Text>
        <TextInput
           placeholder='Enter the name' 
           value={name}
           onChangeText={setName}
        />
        <Button 
          title ={buttontitle}
          onPress={() => {
            setPersonalGreeting(`${greeting} to you ${name}!`);
         }}
       />
    </View>
  );
};
const styles= StyleSheet.create({
    container: {
        margin: 20,
    },
});
export default Greeter;