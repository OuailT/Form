import React,{useState} from 'react'
import "./Form.css";
import List from '../List/List';

import styled from 'styled-components';


const FormContent = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const FormControl = styled.div`
    width: 100%;
    margin: 10px 0px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    letter-spacing: 1px;
`;


const Input = styled.input`
    width: 100%;
    padding: 8px;
    font-weight: 400;
    color: #000;
    font-family: inherit;
    border: 2px solid teal;
    letter-spacing: 1px;
`;

const Button = styled.button`
    height: 45px;
    width: 90px;
    margin-top: 15px;
    background-color: teal;
    border: none;
    color: #fff;
    font-family: inherit;
    letter-spacing: 1px;
    cursor: pointer;

`;


const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPhoneNum, setIsPhoneNum] = useState("");
    const [list, setList] = useState([]);



    //Submit handle
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !isEmail) {
            alert("Please Add a Value")
        } else {
            const newSubscription = {id : new Date().getTime().toString(), firstName : firstName, lastName : lastName, email : isEmail, phoneNumber : isPhoneNum }
            setList([...list, newSubscription]);
            setFirstName("");
            setLastName("");
            setIsEmail("");
            setIsPhoneNum("");
            console.log(list, newSubscription);
        }
    }

    // Delete ITem 
    const deleteItem = (id) => {
        const itemRemoved = list.filter((item)=> item.id !== id)
        setList(itemRemoved);
    }


        return (
        <> 
            <FormContent onSubmit={handleSubmit}>
                <FormControl>
                    <Label for="FirstName">First Name</Label>
                    <Input placeholder="First Name..."
                        type="text"
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)} />
                </FormControl>
                
                <FormControl>
                    <Label for="LastName">LastName</Label>
                    <Input placeholder="LastName..."
                            type="text"
                            value={lastName}
                            onChange={(e)=> setLastName(e.target.value)}/>
                </FormControl>

                <FormControl>
                    <Label for="Email">Email</Label>
                    <Input placeholder="Email..."
                            type="email" 
                            value={isEmail}
                            onChange={(e)=> setIsEmail(e.target.value)}/>
                </FormControl>

                <FormControl>
                    <Label for="Phone">Phone Number</Label>
                    <Input placeholder="Phone... "
                            type="number"
                            value={isPhoneNum}
                            onChange={(e)=> setIsPhoneNum(e.target.value)}/>
                </FormControl>
                <Button>Submit</Button> 
            </FormContent>

           {list.length > 0 && <List items ={list} deleteItem={deleteItem}/>}
        </>
    )
}

export default Form
