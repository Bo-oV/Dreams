import React from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { inputStyles, listStyles } from '../app/style/styles';

import { Dream, Step } from "../types/types";


interface Props {
  dreams: Dream[];
  showDreamInput: boolean;
  setShowDreamInput: (show: boolean) => void;
  currentDreamTitle: string;
  setCurrentDreamTitle: (text: string) => void;
  currentStepText: string;
  setCurrentStepText: (text: string) => void;
  currentSteps: Step[];
  addStep: () => void;
  addDream: () => void;
  toggleStep: (dreamId: string, stepId: string) => void;
}

export default function DreamFormUI(props: Props) {
  console.log('props.setShowDreamInput:', props.setShowDreamInput);
  return (
    <View style={{ padding: 80 }}>
      <Button
        title="Додати мрію"
        onPress={() => props.setShowDreamInput(true)}
      />
      {props.showDreamInput && (
        <>
          <TextInput
            style={inputStyles.input}
            placeholder="Назва мрії"
            value={props.currentDreamTitle}
            onChangeText={props.setCurrentDreamTitle}
          />

          <FlatList
            style={listStyles.list}
            data={props.currentSteps}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={listStyles.itemContainer}>
                <TouchableOpacity
                  onPress={() =>
                    props.toggleStep(props.currentDreamTitle, item.id)}
                    style={listStyles.checkbox}
                >
                  <Text style={listStyles.checkboxText}>{item.done ? "+" : "-"}</Text>
                </TouchableOpacity>
                <Text style={listStyles.stepText}>{item.text}</Text>
              </View>
            )}
          />

          <TextInput
            style={inputStyles.input}
            placeholder="Додати крок"
            value={props.currentStepText}
            onChangeText={props.setCurrentStepText}
          />
          <Button title="Додати крок" onPress={props.addStep} />
          <Button title="Додати мрію" onPress={props.addDream} />
        </>
      )}
    </View>
  );
}