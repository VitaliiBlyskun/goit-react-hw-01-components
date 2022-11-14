import styled from "styled-components";

export const MainContainer =  styled.div`
    padding: 10px;
    border: 3px solid ${props => props.theme.colors.blue};
    border-radius: 10px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.white};
    border: 3px solid ${props => props.theme.colors.black};
    padding: 20px;
    border-radius: 15px;

    margin-right: auto;
    margin-left: auto;
    margin-bottom: 100px;
`

export const Container = styled.div`
    width: 350px;
`

