import * as Styled from './styles';
import { ArrowUpShort } from '@styled-icons/bootstrap/ArrowUpShort';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const GoTop = ({ handleClick }) => {
  const [visible, setVisible] = useState(false);

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setVisible(true);
    }
  };

  onscroll(document, handleScroll);

  return (
    <Styled.Container
      href="#"
      onClick={handleClick}
      onScroll={handleScroll}
      aria-label="Go to top"
      title="Go to top"
      visible={visible}
    >
      <ArrowUpShort />
    </Styled.Container>
  );
};

GoTop.propTypes = {
  handleClick: PropTypes.func,
  backToTopScrollY: PropTypes.func,
};
