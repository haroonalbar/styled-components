import styled from "styled-components";

type StyledHeaderProps={
    bg?: string,
}

export const StyledHeader = styled.header<StyledHeaderProps>`
background-color: ${({bg}) => bg};
padding: 40px 0;
`