/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import type { StatusBarStyle } from 'react-native';
import classNames from 'classnames';
import { NavigationContainer } from '@react-navigation/native';
import TabbedView from 'src/views/Tabbed.view';
const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(STYLES[0]);

  const [statusBarTransition, setStatusBarTransition] = useState<'fade' | 'slide' | 'none'>(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView className={classNames('flex-1', `bg-[${isDarkMode ? Colors.darker : Colors.lighter}]`)}>
      <StatusBar
        //barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
        animated={true}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <NavigationContainer>
        <TabbedView />
      </NavigationContainer>
      {/*<View style={styles.buttonsContainer}>*/}
      {/*  <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />*/}
      {/*  <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />*/}
      {/*</View>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    padding: 10,
    gap: 4,
  },
});

export default App;
