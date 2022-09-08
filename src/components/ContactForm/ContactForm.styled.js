import styled from "styled-components";
import { Field, Form} from "formik";


export const Input = styled(Field)`
padding: 15px;
margin:15px;
width: 250px;
height: 15px;
font-size: 16px;
border-radius: 8px;
outline: none;
border: 1px solid gray;
transition: border-color 800ms ease-in-out 0s;
`;

export const FormContact = styled(Form)`
display:flex;
flex-direction:column;
margin: 0 auto;
width:350px;
padding: 5px;
border: 1px solid dimgray;
border-radius: 10%;
transition: border-color 800ms ease-in-out 0s;
`;

export const Label = styled.label`
display:flex;
flex-direction: column;
width:200px;
`;

export const Button = styled.button`
background-color:floralwhite;
margin: 0 auto 10px;
 border-radius: 25px;
 padding: 7px;
 width: 180px;
 font-size: 20px;
    curcor:pointer;
    transition:transform 500ms linear;
    & :focus , :hover {
        background-color:whitesmoke;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
    }
`;

export const Error = styled.p`
color: red;
`;