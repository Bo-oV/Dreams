import React, { useState } from 'react';
import DreamFormUI from '../../components/DreamFormUI';
import { Dream, Step } from "../../types/types";
;

export default function DreamFormContainer() {
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [currentDreamTitle, setCurrentDreamTitle] = useState('');
  const [currentStepText, setCurrentStepText] = useState('');
  const [currentSteps, setCurrentSteps] = useState<Step[]>([]);
  const [showDreamInput, setShowDreamInput] = useState(false);

  
  const addStep = () => {
    if (!currentStepText) return;
    const newStep: Step = { id: Date.now().toString(), text: currentStepText, done: false };
    setCurrentSteps(prev => [...prev, newStep]);
    setCurrentStepText('');
  };

  const addDream = () => {
    if (!currentDreamTitle) return;
    const newDream: Dream = {
      id: Date.now().toString(),
      title: currentDreamTitle,
      steps: currentSteps,
      done: false,
      createdAt: new Date(),
    };
    setDreams(prev => [...prev, newDream]);
    setCurrentDreamTitle('');
    setCurrentSteps([]);
    setShowDreamInput(false);
  };

  const toggleStep = (dreamId: string, stepId: string) => {
    
    setDreams(prev =>
      prev.map(d => {
        if (d.id !== dreamId) return d;
        const updatedSteps = d.steps.map(s => (s.id === stepId ? { ...s, done: !s.done } : s));
        const allDone = updatedSteps.every(s => s.done);
        return { ...d, steps: updatedSteps, done: allDone };
      })
    );
  };

  return (
    <DreamFormUI
      dreams={dreams}
      showDreamInput={showDreamInput}
      setShowDreamInput={setShowDreamInput}
      currentDreamTitle={currentDreamTitle}
      setCurrentDreamTitle={setCurrentDreamTitle}
      currentStepText={currentStepText}
      setCurrentStepText={setCurrentStepText}
      currentSteps={currentSteps}
      addStep={addStep}
      addDream={addDream}
      toggleStep={toggleStep}
    />
  );
}

