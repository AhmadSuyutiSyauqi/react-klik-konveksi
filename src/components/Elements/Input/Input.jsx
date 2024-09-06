import { forwardRef } from "react";
import Label from "./Label";

const Search = forwardRef((props, ref) => {
  const { type, placeholder, name, focus } = props;

  return (
    <>
      <input
        type="text"
        id="search-input"
        className="grow w-10"
        placeholder={placeholder}
        focus={focus}
        typeof={type}
        name={name}
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
    </>
  );
});

const Input = (props) => {
  const { name, type, placeholder, focus, autoComplete, onChange } = props;
  return (
    <>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          focus={focus}
          autoComplete={autoComplete}
          onChange={onChange}
          required
          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-primer sm:text-sm sm:leading-6"
        />
    </>
  );
};

Input.Search = Search;

export default Input;
