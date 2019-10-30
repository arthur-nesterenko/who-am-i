import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';

const typography = new Typography(funstonTheme);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}
// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
