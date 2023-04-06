import styled from "styled-components";

type StyledHeaderProps={
    bg?: string,
}

export const StyledHeader = styled.header<StyledHeaderProps>`
background-color: ${({theme}) => theme.color.header};
padding: 40px 0;
`