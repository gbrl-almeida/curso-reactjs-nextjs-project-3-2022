import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme, visible }) => css`
    position: fixed;
    background: #13dbb3;
    color: ${theme.colors.white};
    display: flex;
    width: 40px;
    height: 40px;
    bottom: 30px;
    right: 100px;
    border-radius: 4px;
    z-index: 6;
    transition: all 0.4s;
    visibility: ${visible ? 'visible' : 'hidden'};
    opacity: ${visible ? 'inherit' : '0'};

    &:hover {
      background: #53f3d3;
      color: #fff;
    }

  `}
`;
