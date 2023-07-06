import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CustomCard = ({mode, title, source, style, styleSource}) => (
  <Card 
    mode={mode}
    style={style} 
  >
    <Card.Title 
        title={title}
        subtitle=""
        left='' //icon que vem da const
        />

    <Card.Cover 
        source={source}
        style={styleSource}
        />
    
    <Card.Actions>
    </Card.Actions>
  </Card>
);

// modelo de source: { uri: 'https://picsum.photos/700' }

export default CustomCard;