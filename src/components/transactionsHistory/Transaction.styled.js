import styled from "styled-components";


export const TableWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: ${props => props.theme.colors.white};
border: 3px solid ${props => props.theme.colors.black};
padding: 5px;
border-radius: 15px;

margin-right: auto;
margin-left: auto;
margin-bottom: 100px;
`


export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    margin: 0;
`

export const Table = styled.table`
border: 1px solid ${props => props.theme.colors.black};
border-radius: 5px;
`

export const TableTitles = styled.thead`
    text-align: center;
`

export const Title = styled.tr`
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
`

export const TH = styled.th`
    border: 1px solid ${props => props.theme.colors.black};
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
`

export const DataInfo = styled.tbody`
    display: flex;
    justify-content: center;
    border: 1px solid ${props => props.theme.colors.black};
    padding-top: 5px;
    padding-bottom: 5px;
`


