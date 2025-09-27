import React from 'react';
import { Text, Image } from 'react-native';
import { styles } from './BatLogoStyles';
import BatLogo from '../../assets/bat-logo.png';

export default function Logo() {
  return (
    <>
      <Text style={styles.title}>BAT PASS GENARATOR</Text>
      <Image source={BatLogo} style={styles.batImage} />
    </>
  );
}
