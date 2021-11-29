import useToggleAnimate from 'app/hooks/useToggleAnimate';
import React from 'react';
import {Animated, Omit, TouchableOpacityProps, ViewStyle} from 'react-native';
import styled from '../styles/styled';

export type ButtonProps = Omit<
  TouchableOpacityProps &
    InsideTouch & {
      containerStyles?: ViewStyle;
    },
  'onPress'
> & {
  onPress?: () => void;
  marginTop?: boolean;
};

const Button = ({
  style,
  containerStyles,
  ...props
}: RemoveComponentProps<ButtonProps>) => {
  const {children, loading, marginTop} = props;

  const {interpolate} = useToggleAnimate({outputRange: [0, 1]});

  return (
    <ViewContainer
      marginTop={marginTop}
      style={[{opacity: interpolate}, containerStyles]}>
      <Container
        activeOpacity={0.6}
        disabled={loading}
        style={style}
        {...props}>
        {!loading ? (
          typeof children === 'string' ? (
            <TextButton {...props}>{children}</TextButton>
          ) : (
            children
          )
        ) : (
          <Loading size={'small'} color={'#fff'} />
        )}
      </Container>
    </ViewContainer>
  );
};
const ViewContainer = styled(Animated.View)<{marginTop?: boolean}>`
  margin-top: ${({theme, marginTop}) => (marginTop ? theme.scapingElement : 0)};
`;
const Loading = styled.ActivityIndicator`
  height: ${props => props.theme.scapingElement};
`;
const Container = styled.TouchableOpacity<ButtonProps>`
  padding-vertical: ${props => props.theme.scaping(3)};
  background-color: ${({clean, outline, solidWhite, theme}) =>
    clean || outline
      ? 'transparent'
      : solidWhite
      ? theme.colors.white
      : theme.colors.main};
  border-radius: ${props => props.theme.borderRadiusSmall};
  border-width: ${({outline}) => (outline ? 1 : 0)};
  border-color: ${({outline, theme}) =>
    outline ? theme.colors.main : 'transparent'};
  align-items: center;
  justify-content: center;
  opacity: ${({disabled}) => (disabled ? 0.7 : 1)};
`;
const TextButton = styled.Text<ButtonProps>`
  font-style: normal;
  font-weight: ${props => props.theme.font.bold};
  font-size: ${props => props.theme.font.fontLarge};
  text-align: center;
  color: ${({solidWhite, clean, outline, theme}) =>
    solidWhite || clean || outline ? theme.colors.main : theme.colors.white};
`;

export default Button;
