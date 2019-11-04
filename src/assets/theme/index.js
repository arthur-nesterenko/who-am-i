import colors from './colors';
import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
const customMediaQuery = maxWidth => `@media (min-width: ${maxWidth}px)`;
export default {
  colors,
  heading: {
    primary: {
      color: colors.primary,
    },
    secondary: {
      color: colors.secondary,
    },
    dark: {
      color: colors.dark,
    },
  },
  breakpoints: {
    phone: customMediaQuery(breakpoints[0]),
    tablet: customMediaQuery(breakpoints[1]),
    mq,
    customMediaQuery,
  },
};
