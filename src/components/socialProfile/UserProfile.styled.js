import styled from "styled-components";

export const CardInfo = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

export const ImgUser = styled.img`
    margin-bottom: 15px;
`

export const Paragraph = styled.p`
    color: ${props => props.theme.colors.grey};
`

export const ListInfo = styled.ul`
    display: flex;
    justify-content: space-between;
`

export const Section = styled.span`
    border: 2px solid ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.azure};
`