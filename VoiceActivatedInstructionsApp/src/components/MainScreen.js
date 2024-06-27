import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from '@react-native-voice/voice';

const MainScreen = ({ navigation }) => {
  const [command, setCommand] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (e) => {
    setCommand(e.value[0]);
    navigation.navigate('Instructions', { command: e.value[0] });
  };

  const startListening = () => {
    Voice.start('en-US');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Say a command</Text>
      <Button title="Start Listening" onPress={startListening} />
    </View>
  );
};

export default MainScreen;
