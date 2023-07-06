import React from 'react';
import { TextInput } from 'react-native-paper'
import { View } from 'react-native';

const InputText = ({label, style}) => {
  const [text, setText] = React.useState("")

  return (
    <View style={style}>
      <TextInput
        label={label}
        value={text}
        onChangeText={text => setText(text)}
        mode="outlined"
      />
  </View>
  )
}

export default InputText