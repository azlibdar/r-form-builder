import PropTypes from "prop-types";

import { ChevronDownIcon } from "@heroicons/react/16/solid";

import Button from "./Button";
import FormControl from "./FormControl";
import Input from "./Input";

const FormBuilder = ({ formFields, setFormFields }) => {
  const handleAddField = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const newField = {
      id: Date.now(),
      type: form.get("type"),
      label: form.get("label"),
      placeholder: form.get("placeholder"),
      isRequired: form.has("required"),
      value: "",
    };

    setFormFields([...formFields, newField]);
    e.target.reset();
  };

  return (
    <div className="w-full flex flex-col gap-8 lg:gap-12">
      <h2 className="title">Form Builder</h2>
      <form onSubmit={handleAddField}>
        <div className="form-controls">
          <FormControl label="Field type">
            <div className="relative">
              <Select name="type" options={["text", "email", "password", "number"]} />
              <ChevronDownIcon className="size-5 fill-b-yellow absolute right-2 top-[50%] translate-y-[-50%]" />
            </div>
          </FormControl>
          <FormControl label="Label">
            <Input required name="label" placeholder="Enter field label" />
          </FormControl>
          <FormControl label="Placeholder">
            <Input name="placeholder" placeholder="Enter field placeholder" />
          </FormControl>
          <div className="flex items-center gap-1.5">
            <input id="required" type="checkbox" name="required" className="w-4 h-4 accent-b-yellow" />
            <label htmlFor="required" className="form-control-label cursor-pointer">
              Required
            </label>
          </div>
        </div>
        <div className="w-full mt-12">
          <Button variant="secondary">Add Field</Button>
        </div>
      </form>
    </div>
  );
};

const Select = ({ name, options }) => (
  <select
    name={name}
    className="w-full appearance-none p-2.5 bg-transparent border border-primary-600 rounded-md outline-none focus:bg-primary-800 text-b-yellow"
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

FormBuilder.propTypes = {
  formFields: PropTypes.array.isRequired,
  setFormFields: PropTypes.func.isRequired,
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FormBuilder;
