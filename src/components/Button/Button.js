import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonT = ({text, action, icon, style, textStyle, mode}) => (
  <Button 
    icon={icon}
    style={style}
    mode={mode}
    onPress={action}
    labelStyle={textStyle} 
    >
    
    {text}
  </Button>
);

export default ButtonT;