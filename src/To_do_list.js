import React, { useState } from "react";

import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import LisComp from './ListComp';

const To_do_list = () => {
  const [list, setList] = useState();
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setList(event.target.value);
  };

  const listOfItem = () => {
    setNewItem((prevalue) => {
      return [...prevalue, list];
    });
   setList(" ");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>To do list</h1>
          <br />
          <input
            type="text"
            placeholder="Add an items"
            onChange={itemEvent}
            value={list}
          />
          <Button className="newBtn" onClick={listOfItem}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val,index) => {
              return <LisComp key={index} text={val}/>;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default To_do_list;
