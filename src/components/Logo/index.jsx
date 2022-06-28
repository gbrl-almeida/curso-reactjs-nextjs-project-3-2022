import P from 'prop-types';
import * as Styled from './styles';

export const Logo = ({ text, srcImg = '', link }) => {
  return (
    <Styled.Container href={link}>
      {!!srcImg && <img src={srcImg} alt={text} />}
    </Styled.Container>
  );
};

Logo.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
