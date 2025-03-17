import React, { useState } from "react";
import { useReducer, } from "react";
const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todos,dispatch]=useReducer(todoReducer,[])
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
     <form onSubmit={handleSubmit}>
     <input
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        type="text"
        placeholder="Enter 
        "
      />


      <input type="submit" value="Add Todo" />
     </form>
    </>
  );
};

export default Todo;
