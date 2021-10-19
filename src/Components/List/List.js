import React from 'react'
import './List.css'
import styled from 'styled-components';


const PopUpContainer = styled.section`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;


const PopUp = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    width: 400px;
    max-width: 100%;
    transform: translate(-50%, -50%);
    padding: 40px;
    border-radius: 5px;
    animation-name : popUpShow;
    animation-duration : 1s;
`;


const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`;

const TitleSpan = styled.span`
    font-size: 25px;
    font-weight: 500;

`;


const UserInfo = styled.div`
    margin: 20px 0px;
`;


const Info = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.5px;

`;


const SpanInfo = styled.span`
    font-weight: 500;
    font-size: 16px;
    padding-left : 5px;
`;


const UserButton = styled.button`
    height: 50px;
    width: 100%;
    font-size: 14px;
    letter-spacing: 1px;
`;


const List = ({items, deleteItem}) => {
    return (
        <PopUpContainer>
            {items.map((item)=> {
                const {id, lastName, firstName, phoneNumber, email} = item;
                return (
                        <PopUp key={id}>
                            <Title>Welcome <TitleSpan>{firstName}</TitleSpan></Title>
                            <UserInfo>
                                <Info>Last Name : <SpanInfo> {lastName} </SpanInfo></Info>
                                <Info>First Name : <SpanInfo> {firstName} </SpanInfo></Info>
                                <Info>Email :  <SpanInfo> {email}</SpanInfo></Info>
                                <Info>Phone Number :  <SpanInfo> {phoneNumber} </SpanInfo> </Info>
                            </UserInfo>
                            <UserButton onClick={()=> deleteItem(id)}>Clear</UserButton>
                        </PopUp>
                )
            })}
        </PopUpContainer>
    )
}

export default List;



