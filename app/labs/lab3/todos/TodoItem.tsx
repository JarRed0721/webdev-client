type Todo = {
  done: boolean;
  title: string;
  status: string;
};

const TodoItem = ({
  todo = { done: true, title: "Buy milk", status: "COMPLETED" },
}: {
  todo?: Todo;
}) => {
  return (
    <li style={{ listStyle: "none" }}>
      <input type="checkbox" defaultChecked={todo.done} />{" "}
      {`${todo.title} (${todo.status})`}
    </li>
  );
};

export default TodoItem;
