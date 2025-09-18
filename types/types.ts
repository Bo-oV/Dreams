export interface Step {
  id: string;
  text: string;
  done: boolean;
}

export interface Dream {
  id: string;
  title: string;
  steps: Step[];
  done: boolean;
  createdAt: Date;
}