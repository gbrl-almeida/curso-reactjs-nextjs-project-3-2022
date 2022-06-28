import { createGlobalStyle } from 'styled-components';

import OpenSansV29LatinRegularWoff from '../fonts/open-sans-v29-latin/open-sans-v29-latin-regular.woff';
import OpenSansV29LatinRegularWoff2 from '../fonts/open-sans-v29-latin/open-sans-v29-latin-regular.woff2';
import OpenSansV29LatinItalicWoff from '../fonts/open-sans-v29-latin/open-sans-v29-latin-italic.woff';
import OpenSansV29LatinItalicWoff2 from '../fonts/open-sans-v29-latin/open-sans-v29-latin-italic.woff2';
import OpenSansV29Latin700Woff from '../fonts/open-sans-v29-latin/open-sans-v29-latin-700.woff';
import OpenSansV29Latin700Woff2 from '../fonts/open-sans-v29-latin/open-sans-v29-latin-700.woff2';
import OpenSansV29Latin700ItalicWoff from '../fonts/open-sans-v29-latin/open-sans-v29-latin-700italic.woff';
import OpenSansV29Latin700ItalicWoff2 from '../fonts/open-sans-v29-latin/open-sans-v29-latin-700italic.woff2';

import PoppinsV20Latin900Woff from '../fonts/poppins-v20-latin/poppins-v20-latin-900.woff';
import PoppinsV20Latin900Woff2 from '../fonts/poppins-v20-latin/poppins-v20-latin-900.woff2';
import PoppinsV20LatinRegularWoff from '../fonts/poppins-v20-latin/poppins-v20-latin-regular.woff';
import PoppinsV20LatinRegularWoff2 from '../fonts/poppins-v20-latin/poppins-v20-latin-regular.woff2';

import RamelayV27Latin500Woff from '../fonts/raleway-v27-latin/raleway-v27-latin-500.woff';
import RamelayV27Latin500Woff2 from '../fonts/raleway-v27-latin/raleway-v27-latin-500.woff2';
import RamelayV27Latin600Woff from '../fonts/raleway-v27-latin/raleway-v27-latin-600.woff';
import RamelayV27Latin600Woff2 from '../fonts/raleway-v27-latin/raleway-v27-latin-600.woff2';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${OpenSansV29LatinRegularWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansV29LatinRegularWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: local(''),
        url(${OpenSansV29LatinItalicWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansV29LatinItalicWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${OpenSansV29Latin700Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansV29Latin700Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 700;
    src: local(''),
        url(${OpenSansV29Latin700ItalicWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansV29Latin700ItalicWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    src: local(''),
        url(${PoppinsV20Latin900Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${PoppinsV20Latin900Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${PoppinsV20LatinRegularWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${PoppinsV20LatinRegularWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Ramelay';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url(${RamelayV27Latin500Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RamelayV27Latin500Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Ramelay';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url(${RamelayV27Latin600Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RamelayV27Latin600Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  body {
    font-family: ${({ theme }) => theme.font.family.default};
    color: #444444;
    font-size: 1.6rem;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.alternative};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
  }

  a:hover {
    color: #1ac7a4;
    text-decoration: none;
  }

`;
