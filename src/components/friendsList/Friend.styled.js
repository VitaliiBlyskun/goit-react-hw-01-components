import styled from "styled-components";

export const FriendCard = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px 10px 130px 10px;
    border: 0.3rem outset ${props => props.theme.colors.accent};
    margin-bottom: 10px;
`

export const UserImg = styled.img`
    margin-left: 10px;
    margin-right: 10px;
`

export const Circle = styled.span`
width: 15px;
height: 15px;
font-size: 15px;
border-radius: 50%;

background-color: ${props => {
    return props.isOnline ? props.theme.colors.green : props.theme.colors.red
}}`