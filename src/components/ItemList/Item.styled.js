import styled from "styled-components";

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
`;

export const Text = styled.p`
margin: 0 auto;
color: white;
`;

export const Button = styled.button`
border: 1px solid darkgreen;
border-radius: 25px;
cursor: pointer;
& :focus , :hover {
        background-color:red;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
        transform: scale(0.9);
    }
`;