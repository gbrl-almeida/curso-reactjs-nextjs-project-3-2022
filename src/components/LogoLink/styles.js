import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
  font-size: 30px;
  color: #111111;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-family: "Poppins", sans-serif;

    > img {
      max-height: 42px;
    }

    > span {
      color: #0a9f82;
    }


  `}
`;
