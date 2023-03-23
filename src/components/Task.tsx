import { useState } from "react";
import { IconTrash } from "../Icons/IconTrash";

type props = {
  name: string;
};

export const Task = (props: props) => {
  const [isChoose, setIsChoose] = useState(false);

  const handleChange = () => {
    setIsChoose(!isChoose);
  };

  return (
    <div className="task">
      <input type="checkbox" onChange={handleChange}></input>
      {isChoose ? (
        <h3 className="text-disable">{props.name}</h3>
      ) : (
        <h3>{props.name}</h3>
      )}
      <div className="icon">
        <IconTrash />
      </div>
    </div>
  );
};
