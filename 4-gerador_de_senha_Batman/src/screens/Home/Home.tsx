import React from 'react';
import { StatusBar, View } from 'react-native';
import styles from './styleHome';
import Logo from '../../components/BatLogo/BatLogo';
import BatButton from '../../components/BatButton/BatButton';

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <BatButton />
      </View>
    </View>
  );
}
