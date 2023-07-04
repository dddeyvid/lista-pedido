import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonT = ({text, action}) => (
  <Button icon="camera" mode="contained" onPress={action}>
    {text}
  </Button>
);

export default ButtonT;