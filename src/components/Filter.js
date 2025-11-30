import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Filter = ({ setFilter }) => {
    const [active, setActive] = useState("all");
    const tasks = useSelector((state) => state.tasks);

    const handleFilter = (status) => {
        setActive(status);
        setFilter(status);
    }
    
    return (
        <FilterWrapper>
            <FilterBtn active={active === "all"} onClick={() => handleFilter("all")}>All</FilterBtn>
            <FilterBtn active={active === "pending"} onClick={() => handleFilter("pending")}>Pending</FilterBtn>
            <FilterBtn active={active === "completed"} onClick={() => handleFilter("completed")}>Completed</FilterBtn>
            <CountText>Total Tasks: {tasks.length}</CountText>
        </FilterWrapper>
    )
}

const FilterWrapper = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    align-items: center;
    /* justify-content: center; */
`;

const FilterBtn = styled.button`
    padding: 6px 10px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background: ${({ active }) => (active ? "#4b7bec" : "#e3e7f1")};
    color: ${({ active }) => (active ? "#fff" : "#4a4a4a")};
    transition: .3s ease;

  &:hover {
    background: ${({ active }) => (active ? "#3a68d8" : "#d6d9e2")};
  }
`;

const CountText = styled.p`
    margin-left: 20px;
    font-weight: bold;
`;

export default Filter;