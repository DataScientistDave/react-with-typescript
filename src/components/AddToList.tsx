import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  // prop types for people and setPeople handler (found through hovering over)
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

function AddToList({ people, setPeople }: IProps) {
  const [input, setInput] = useState({ name: "", age: "", note: "", img: "" });

  // e throws error has it is any
  // type can be found by chaning onChange to (e) => {} and hover over, need to pipe for text area
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // e.target.name is the name property
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !!input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        // Issue thrown here is that string can't be number
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
}

export default AddToList;
