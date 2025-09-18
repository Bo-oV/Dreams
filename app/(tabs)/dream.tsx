import React from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Dream, Step } from "../../types/types";

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
            placeholder="Назва мрії"
            value={props.currentDreamTitle}
            onChangeText={props.setCurrentDreamTitle}
          />

          <FlatList
            data={props.currentSteps}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    props.toggleStep(props.currentDreamTitle, item.id)
                  }
                  style={{
                    padding: 8,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 4,
                    width: 24,
                    height: 24,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16 }}>{item.done ? "☑" : "☐"}</Text>
                </TouchableOpacity>
                <Text>{item.text}</Text>
              </View>
            )}
          />

          <TextInput
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