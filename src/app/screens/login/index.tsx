import React from 'react';
import styled from 'app/styles/styled';
import {screenHeight, screenWidth} from 'app/styles/dimens';
import {
  AreaContainer,
  Container,
  KeyboardContainer,
  RowBetween,
  RowCenter,
  RowCenterItem,
  ShadowCard,
  TextHuge,
  TextMedium,
  TextSmall,
} from 'app/styles/globalStyled';
import {
  FacebookIcon,
  GoogleIcon,
  TweetIcon,
  LinkingIcon,
} from 'app/components/icons/Icons';
import TextboxInput from 'app/components/TextboxInput';
import Button from 'app/components/Button';
import {getTranslate} from 'app/locate/reducer';
import {Image} from 'react-native';
import {useForm} from 'app/hooks/useForm';
import {validateRequire} from 'app/utils/common/validate';

const Login = () => {
  const getString = getTranslate();
  const [data, errors, onChange] = useForm<LoginInput>({
    username: [[validateRequire]],
    password: [[validateRequire]],
  });

  return (
    <KeyboardContainer notPadding scrollEnabled={false}>
      <ParentContainer>
        <BackgroundImage source={require('images/bg_login.png')} />
        <ContainerLogin notPadding>
          <CenterContainer>
            <CardLogin>
              <LoginTitle>{getString('Login', 'LoginTitle')}</LoginTitle>
              <TextboxInput
                value={data.username}
                title={getString('Login', 'Username')}
                onChangeText={onChange('username')}
                error={errors.username}
              />
              <TextboxInput
                value={data.password}
                onChangeText={onChange('password')}
                title={getString('Login', 'Password')}
                error={errors.password}
              />
              <ForgotPassText>
                {getString('Login', 'ForgotPassword')}
              </ForgotPassText>
            </CardLogin>
            <RowBetween>
              <TextMedium>Remember me</TextMedium>
              <CustomButton>Signin</CustomButton>
            </RowBetween>
          </CenterContainer>
          <SocialLoginView>
            <UnderLineView />
            <SocialLoginText>Social Login</SocialLoginText>
            <UnderLineView />
          </SocialLoginView>
          <RowCenter>
            <ContainerIcon>
              <FacebookIcon />
              <GoogleIcon />
              <TweetIcon />
              <LinkingIcon />
            </ContainerIcon>
          </RowCenter>
          {/* <FingerTouchOpacity onPress={fingerID}>
						<FingerIconCustom />
						<TextCaption>
							{getString('Login', 'LoginBy')}
							<TextOrange>
								{getString('Login', typeBiometry === 'FaceID' ? 'FaceId' : 'FingerId')}
							</TextOrange>
						</TextCaption>
					</FingerTouchOpacity> */}
        </ContainerLogin>
      </ParentContainer>
    </KeyboardContainer>
  );
};
const CardLogin = styled(ShadowCard)`
  padding-horizontal: ${({theme}) => theme.scaping(2)};
  padding-vertical: ${({theme}) => theme.scaping(5)};
  background-color: white;
`;
const BackgroundImage = styled(Image)`
  width: ${screenWidth}px;
  position: absolute;
  resize-mode: contain;
`;
const CenterContainer = styled.View`
  justify-content: center;
  margin-top: ${screenWidth / 4}px;
`;
const ContainerLogin = styled(AreaContainer)`
  background-color: #00000000;
  flex: 1;
  justify-content: center;
`;
const ParentContainer = styled(Container)`
  height: ${screenHeight}px;
  justify-content: center;
`;
const LoginTitle = styled(TextHuge)``;
const ForgotPassText = styled(TextSmall)`
  font-weight: bold;
  text-align: right;
  color: ${({theme}) => theme.colors.purple};
`;
const UnderLineView = styled.View`
  border-bottom-width: 1px;
  flex: 1;
`;
const SocialLoginText = styled(TextMedium)`
  background-color: ${({theme}) => theme.colors.background};
  padding-horizontal: ${({theme}) => theme.scaping(2)};
`;
const SocialLoginView = styled(RowCenterItem)`
  justify-content: center;
  margin-vertical: ${({theme}) => theme.scaping(6)};
`;
const ContainerIcon = styled(RowCenterItem)`
  width: ${screenWidth / 1.6}px;
  justify-content: space-around;
`;
const CustomButton = styled(Button)`
  padding-horizontal: ${({theme}) => theme.scaping(8)};
`;
export default Login;
