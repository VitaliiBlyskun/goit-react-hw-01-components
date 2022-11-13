import styled from "styled-components";

export const Title = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 0px;
    color: ${props => props.theme.colors.grey};
`;

export const StatsList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ListItem = styled.li`
    text-align: center;
    padding: 10px;
    box-shadow: inset 0 -3em 3em rgb(0 0 0 / 10%), 0 0 0 2px #fff, 0.3em 0.3em 1em rgb(0 0 0 / 30%);
    // background-color: ${props => props.theme.colors.azure};
    background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
    `
    // ${Math.floor(Math.random() * 16777215).toString(16)}

