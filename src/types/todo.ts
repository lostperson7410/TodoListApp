export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoState {
  todos: Todo[];
}
