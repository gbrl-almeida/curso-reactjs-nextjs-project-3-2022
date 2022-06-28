import styled, { css } from 'styled-components';
import { Container } from 'react-bootstrap';

export const Header = styled.header`
  ${() => css`
    background: #fff;
    transition: all 0.5s;
    z-index: 997;
    padding: 10px 0;

  `}
`;

export const ContainerBs = styled(Container)`
  display: flex !important;
  align-items: center !important;
`;
