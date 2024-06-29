import { useState } from "react";
import FormBuilder from "./components/FormBuilder";
import DynamicForm from "./components/DynamicForm";

const App = () => {
  const [formFields, setFormFields] = useState([]);

  return (
    <div className="app-default">
      <div className="w-full max-w-[544px] flex flex-col gap-24">
        <FormBuilder formFields={formFields} setFormFields={setFormFields} />
        <DynamicForm formFields={formFields} setFormFields={setFormFields} />
      </div>
    </div>
  );
};

export default App;
