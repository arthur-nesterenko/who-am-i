import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const StyledAvatar = styled(Image)`
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
  img {
    padding: ${p => p.borderSize}px;
    border-radius: 100%;
  }
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
  size: 200,
  borderSize: 5,
};
export default StyledAvatar;
