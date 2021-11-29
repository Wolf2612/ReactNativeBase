import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const light_theme = {};
export const SCAPING_CONTAINER = wp('4%');
export const FONT_SMALL = wp('3%');
export const FONT_MEDIUM = wp('3.5%');
export const FONT_MEDIUM_PLUS = wp('3.8%');
export const FONT_LARGE = wp('5%');

export const SCAPING = hp('0.5%');

export const withNumber = (dimenString: string) => +dimenString.replace(/px/g, '');
const globalFont = {
	fontFamily: 'Montserrat Alternates',
	fontMax: '42px',
	fontHuge: '28px',
	fontMedium: FONT_MEDIUM + 'px',
	fontSmall: FONT_SMALL + 'px',
	normal: '500',
	bold: '600',
	bold_100: '700',
	fontXLarge: '24px',
	font: '18.5px',
	fontLarge: FONT_LARGE + 'px',
	fontMediumLarge: FONT_MEDIUM_PLUS + 'px',
};
const globalScaping: ScapingTheme = {
	scapingElement: SCAPING * 4 + 'px',
	borderRadiusStand: SCAPING * 3 + 'px',
	borderRadius: SCAPING * 3 + '15px',
	borderRadiusSmall: SCAPING * 1.7 + 'px',
	scaping: (num: number) => `${num * SCAPING}px`,
	scapingNumber: (num: number) => num * SCAPING,
	scapingContainer: SCAPING_CONTAINER + 'px',
};
export const globalColor: ColorTheme = {
	gray: '#E2E2E2',
	white: '#fff',
	red_100: '#ff0000',
	none: 'transparent',
	textColor: '#3C3F3D',
	purple: '#3930d8',
	gray_200: '#F2F2F2',
	gray_100: '#F7F7F7',
	gray_300: '#262B33',
	gray_400: '#22272F',
	darkGray: '#545454',
	textColor_100: '#4C4F4D',
	orange_100: '#C89524',
	background: '#fff',
	backgroundGray: '#0C1015',
	bottomBarUnFocus: '#BBBBBB',
	bottomBarFocus: '#C89524',
	text: '#333',
	textGray: '#959CB4',
	line: '#ccc',
	card: '#141921',
	toastBackground: '#2F3032',
	textHuge: '#444',
};

export const myTheme: ThemeInterface = {
	colors: {
		main: '#2accdd',
		secondary: '#fff',
		...globalColor,
	},
	font: {
		...globalFont,
	},
	...globalScaping,
};
export const myThemeDark: ThemeInterface = {
	colors: {
		main: '#111',
		secondary: '#fff',
		...globalColor,
	},
	font: {
		...globalFont,
	},
	...globalScaping,
};
