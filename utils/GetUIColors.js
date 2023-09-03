import { Platform } from 'react-native';
import { useTheme } from 'react-native-paper';

function GetUIColors() {
  const theme = useTheme();

  // background
  let background = '';

  if (Platform.OS === 'ios') {
    background = theme.dark ? '#000000' : '#f2f2f7';
  } else {
    background = theme.colors.background;
  }

  // element
  let element = '';
  let elementHigh = '';

  if (Platform.OS === 'ios') {
    element = theme.dark ? '#151515' : '#ffffff';
    elementHigh = theme.dark ? '#151515' : '#ffffff';
  } else {
    element = theme.colors.elevation.level1;
    elementHigh = theme.colors.elevation.level2;
  }

  // text
  const text = theme.dark ? '#fff' : '#000';

  // main
  // let primary = '';
  let primaryBackground = '';

  if (Platform.OS === 'ios') {
    // primary = '#29947A';
    primaryBackground = '#29947A';
  } else {
    // primary = theme.colors.primary;
    primaryBackground = theme.dark
      ? theme.colors.primaryContainer
      : theme.colors.primary;
  }

  // textOnPrimary
  // let textOnPrimary = '#ffffff';

  if (Platform.OS === 'android') {
    // textOnPrimary = theme.colors.onPrimary;
  }

  return {
    background,
    element,
    elementHigh,
    text,
    primary: primaryBackground,
    primaryBackground,
  };
}

export default GetUIColors;
