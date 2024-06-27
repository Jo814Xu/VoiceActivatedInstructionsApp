import React from 'react';
import { View, Text } from 'react-native';
import DataModel from '../data/DataModel';

const InstructionsScreen = ({ route }) => {
  const { command } = route.params;
  const instructions = DataModel.getInstructions(command);
  const sauce = DataModel.getSauce(command);
  const comments = DataModel.getComments(command);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Instructions: {instructions}</Text>
      <Text>Sauce: {sauce}</Text>
      <Text>Comments: {comments}</Text>
    </View>
  );
};

export default InstructionsScreen;
