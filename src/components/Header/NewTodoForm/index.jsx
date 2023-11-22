import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

const NewTodoForm = () => {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{ text: "" }}
      onSubmit={(values, bag) => {
       addTodo(values.text)
        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
};

export default NewTodoForm;
