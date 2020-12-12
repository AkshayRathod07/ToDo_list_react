import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const LisComp = (props) => {

    const [line, setLine] = useState(false);

    const CutLine= () =>{
        setLine(true);
    };


  return (
    <>
      <div className="todo_style">
        <span onClick={CutLine}>
          <DeleteIcon className="deletIcon" />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none"}}>{props.text} </li>
      </div>
    </>
  );
};

export default LisComp;
