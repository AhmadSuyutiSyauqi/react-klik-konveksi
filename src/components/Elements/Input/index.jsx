import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const SearchTerm = forwardRef((props, ref) => {
  const { label, name, type, placeholder, focus, onChange, value } = props;
  return (
    <>
      {/* <!-- FITUR SEARCH --> */}
      <label className="input input-bordered flex items-center gap-2 min-w-lg md:w-72 border-warning focus:border-none focus:outline-none">
        <input
          type="text"
          id="search-input"
          className={`grow w-10 ${focus}`}
          placeholder={placeholder}
          name={name}
          typeof={type}
          onChange={onChange}
          value={value}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </>
  );
});

const InputForm = (props) => {
  const { label, name, type,  placeholder, focus, onChange, value, autoComplete} = props;
  return (
    <>
    <div className="mt-1">
      <Label label={label} htmlFor={name}/>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        focus={focus}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
      />
      </div>
    </>
  );
};

InputForm.SearchTerm = SearchTerm;
export default InputForm;
