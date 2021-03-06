import React from "react";
import { IState as IProps } from "../App";

// Can also do something like this
// const List: React.FC<IProps> = ({people}) => {}

function List({ people }: IProps) {
  // Need to define the return type of element before calling the function otherwise it will be void and get angry
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li className="List" key={index}>
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
}

export default List;
