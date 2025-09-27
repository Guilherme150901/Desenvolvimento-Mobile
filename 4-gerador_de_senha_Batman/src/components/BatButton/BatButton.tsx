import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import BatTextInput from '../BatTextInput/BatTextInput';

import { styles } from './BatButtonStyle';
import generatePass from '../../services/passwordServices';

export default function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setString(pass);
  }

  return (
    <>
      <BatTextInput pass={pass} />

      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>GENARATE</Text>
      </Pressable>
      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
