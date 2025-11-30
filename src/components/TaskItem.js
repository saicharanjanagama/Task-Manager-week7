import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTask, toggleStatus, editTask } from "../features/task/taskSlice";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const saveEdit = () => {
        dispatch(editTask({
            id: task.id,
            newText: editText,
        }));
        setEditing(false);
    };

    const handleToggleStatus = () => {
        dispatch(toggleStatus(task.id))
    };

    const handleDelete = () => {
        const confirmed = window.confirm("Are you sure you want to delete this task?");
        if (confirmed) {
            dispatch(deleteTask(task.id));
        }
    };

    const handleEdit = () => {
        setEditing(true);
    };

    return (
        <Item>
            {editing ? (
                <input style={{flex: "1", padding: "6px 10px", border: "1px solid #ccc", borderRadius: "8px"}} value={editText} onChange={(e) => setEditText(e.target.value)} />
            ) : (
                <Text completed = {task.status === "completed"}>{task.text}</Text>
            )}
            
            <ButtonGroup>
                <Btn type="done" onClick={handleToggleStatus}>Done</Btn>
                <Btn type="delete" onClick={handleDelete}>Delete</Btn>
                
                {editing ?(
                    <Btn onClick={saveEdit}>Save</Btn>
                ) : (
                    <Btn type="edit" onClick={handleEdit}>Edit</Btn>
                )}
            </ButtonGroup>
        </Item>
    );
}

const Item = styled.div`
    padding: 15px;
    background: white;
    border-radius: 10px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
`;

const Text = styled.span`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-left: 10px;
`;

const Btn = styled.button`
    padding: 6px 10px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: linear-gradient(180deg, rgba(0,0,0,0.06));
    
    &:hover {
        background: linear-gradient(180deg, rgba(0,0,0,0.09));
    }
`;

export default TaskItem;