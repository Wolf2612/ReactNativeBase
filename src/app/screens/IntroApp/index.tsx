import React from 'react';
import {RootStackParamList} from 'app/navigation';
import {
	AreaContainer,
	CenterItemView,
	Container,
	TextHuge,
	TextMedium,
} from 'app/styles/globalStyled';
import {StackScreenProps} from '@react-navigation/stack';
import styled from 'app/styles/styled';
import {screenHeight, screenWidth} from 'app/styles/dimens';
import Button from 'app/components/Button';
import {navigate} from 'app/navigation/rootNavigation';

type Props = StackScreenProps<RootStackParamList, 'Intro'>;

const IntroApp = (_: Props) => {
	return (
		<Container>
			<AreaCenter notPadding>
				<CenterItemView>
					<ImageIntro source={require('images/intro_bg.png')} resizeMode={'contain'} />
				</CenterItemView>
				<TitleIntro>Get Connect to the best Mentors</TitleIntro>
				<Description>Easy way to connect to mentor and get advise solution of design. </Description>
				<Button onPress={() => navigate('Login')} marginTop>
					Get started
				</Button>
			</AreaCenter>
		</Container>
	);
};
const ImageIntro = styled.Image`
	margin-top: ${({theme}) => theme.scaping(5)};
	width: ${screenWidth / 1.5}px;
	height: ${screenHeight / 4}px;
`;
const TitleIntro = styled(TextHuge)`
	margin-top: ${screenWidth / 6}px;
	text-align: center;
`;
const Description = styled(TextMedium)`
	margin-vertical: ${({theme}) => theme.scapingElement};
	text-align: center;
`;
const AreaCenter = styled(AreaContainer)`
	justify-content: center;
`;

export default IntroApp;
