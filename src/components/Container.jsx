import React from 'react'
import Form from "./Form";
import TaskList from "./TaskList";
import { useState } from 'react'

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div>
      <Form handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};


export default Container;



/*const Container = () => {
  return (
    <div>
      Container!
      <Form/>
      <TaskList />
    </div>
  )
}*/
