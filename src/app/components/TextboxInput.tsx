/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useState} from 'react';
import {TextInputProps} from 'react-native';
import styled, {useTheme} from 'app/styles/styled';
import {textSmallCss} from 'app/styles/globalStyled';
import {Animated} from 'react-native';
import {withNumber} from 'app/styles/theme';
import useToggleAnimate from 'app/hooks/useToggleAnimate';

interface ChildrenProps {
  handleChange?: (e: string) => void;
  title?: string;
  error?: string;
}
type PropsTextInput = Without<TextInputProps, 'accessibilityRole'> &
  ChildrenProps;

const TextBoxInput = ({
  children,
  handleChange,
  style,
  error,
  title,
  accessibilityState: _,
  ...props
}: PropsTextInput) => {
  const theme = useTheme();
  const [focus, setFocus] = useState(false);
  const setInputChange = useCallback(
    text => handleChange?.(text),
    [handleChange],
  );
  //Animation
  const {inAnim, outAnim, interpolate} = useToggleAnimate({
    outputRange: [20, -5],
    disableStart: true,
    config: {useNativeDriver: true, duration: 150},
  });

  const {
    inAnim: inScaleText,
    outAnim: outScaleText,
    interpolate: interText,
  } = useToggleAnimate({
    outputRange: [
      withNumber(theme.font.fontMedium),
      withNumber(theme.font.fontMediumLarge),
    ],
    disableStart: true,
    config: {useNativeDriver: true, duration: 150},
  });

  const onFocus = useCallback(() => {
    inScaleText();
    inAnim();
    setFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    outScaleText();
    outAnim();
    setFocus(false);
  }, []);
  return (
    <ViewContainer style={style}>
      <TitleText style={{top: interpolate, fontSize: interText}}>
        {title}
      </TitleText>
      <TextInputContent
        {...props}
        placeholderTextColor={'#C4C4C4'}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={setInputChange}
        focusable={focus}
      />
      {children}
      <TextError>{error || ''}</TextError>
    </ViewContainer>
  );
};
const ViewContainer = styled.View``;
const TextError = styled.Text`
  font-size: ${({theme}) => theme.font.fontSmall};
  color: ${({theme}) => theme.colors.red_100};
  padding-left: ${({theme}) => theme.scaping(1)};
`;
const TitleText = styled(Animated.Text)`
  position: absolute;
  ${textSmallCss}
  font-weight: 600;
`;
const TextInputContent = styled.TextInput<{focusable?: boolean}>`
  margin-top: ${({theme}) => theme.scaping(2)};
  color: ${({theme}) => theme.colors.text};
  border-bottom-width: 2px;
  border-color: ${({theme, focusable}) =>
    focusable ? theme.colors.main : theme.colors.line};
  height: 40px;
  font-size: ${({theme}) => theme.font.fontMedium};
`;
export default TextBoxInput;
