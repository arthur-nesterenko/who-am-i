import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledAvatar = styled.img`
  box-sizing: border-box;
  border-radius: 100%;
  border-color: ${p => (p.border ? `#2496a0` : 'transparent')};
  border-style: solid;
  border-width: ${p => p.borderSize}px;
  background: white;
  padding: ${p => p.borderSize}px;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  margin: 0;
`;

export const StyledAvatarPropTypes = {
  size: PropTypes.number,
  border: PropTypes.bool,
  borderSize: PropTypes.number,
};

StyledAvatar.propTypes = {
  ...StyledAvatarPropTypes,
};
StyledAvatar.defaultProps = {
  border: true,
  size: 150,
  borderSize: 5,
};
export default StyledAvatar;
