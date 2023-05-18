import { useRef } from "react";

export const UseRefExample1 = () => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const paraRef = useRef();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
};
