import P from 'prop-types';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links, logoData, footerHtml, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window && window.scrollTo(0, 0);
  };

  return (
    <>
      <Header links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop handleClick={handleClick} />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Header.propTypes,
  footerHtml: P.string.isRequired,
};
