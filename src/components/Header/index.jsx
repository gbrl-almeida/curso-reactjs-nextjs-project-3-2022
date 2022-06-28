import P from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';
import { Logo } from '../Logo';

export const Header = ({ logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Header visible={visible} onClick={() => setVisible(false)}>
        <Styled.ContainerBs>
          <Logo {...logoData}></Logo>
        </Styled.ContainerBs>
      </Styled.Header>
    </>
  );
};

Header.propTypes = {
  logoData: P.shape(Logo.propTypes).isRequired,
};
