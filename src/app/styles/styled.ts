import * as styledComponents from 'styled-components/native';

const {
	default: styled,
	css,
	ThemeProvider,
	useTheme,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeInterface>;

export {css, ThemeProvider, useTheme};

export default styled;
