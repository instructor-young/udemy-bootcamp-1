export default class TodoModel {
  static async findMany() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const todos = await fetch(url).then((res) => res.json());

    return todos as Todo[];
  }

  static async findUnique(todoId: number) {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    const todo = await fetch(url).then((res) => res.json());

    return todo as Todo;
  }
}

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};
