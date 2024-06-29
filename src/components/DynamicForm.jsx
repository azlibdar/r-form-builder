import PropTypes from "prop-types";

import FormControl from "./FormControl";
import Input from "./Input";
import Button from "./Button";

const DynamicForm = ({ formFields, setFormFields }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Check console for details.");
    console.log(formFields);

    const clearedFields = formFields.map((field) => ({
      ...field,
      value: "",
    }));
    setFormFields(clearedFields);
  };

  const handleFieldChange = (id, value) => {
    setFormFields(formFields.map((field) => (field.id === id ? { ...field, value } : field)));
  };

  const handleRemoveField = (id) => {
    setFormFields(formFields.filter((field) => field.id !== id));
  };

  return (
    <div className="w-full flex flex-col gap-8 lg:gap-12">
      <h2 className="title">Generated Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-controls">
          {formFields.map((field) => (
            <FormControl key={field.id} label={field.label}>
              <div className="relative">
                <Input
                  required={field.isRequired}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveField(field.id)}
                  className="absolute right-2 top-[50%] translate-y-[-50%]"
                >
                  🗑️
                </button>
              </div>
            </FormControl>
          ))}
          {formFields.length > 0 && (
            <div className="w-full mt-12">
              <Button variant="primary">Submit</Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

DynamicForm.propTypes = {
  formFields: PropTypes.array.isRequired,
  setFormFields: PropTypes.func.isRequired,
};

export default DynamicForm;
