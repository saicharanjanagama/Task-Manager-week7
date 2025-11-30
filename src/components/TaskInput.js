import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice"

const TaskInput = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() === "") return;
        dispatch(addTask(text));
        setText("");
    }

    return (
        <InputBox>
            <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter task..." />
            <Button onClick={handleAdd}>Add</Button>
        </InputBox>
    );
}

const InputBox = styled.div`
/* border: 2px solid red; */
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

const Button = styled.button`
    padding: 12px 18px;
    background: #4b7bec;
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
    background: #365fcf;
  }
`;

export default TaskInput;