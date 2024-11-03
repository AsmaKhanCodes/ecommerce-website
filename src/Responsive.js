import { css } from "styled-components";

// Media queries for mobile, tablet, and desktop
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};

export const largeScreen = (props) => {
  return css`
    @media only screen and (min-width: 1201px) {
      ${props}
    }
  `;
};
