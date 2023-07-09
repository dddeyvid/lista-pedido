import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

// const handleCardPress = () => {
//   setIsSelected(!isSelected)
// }

// const cardStyles = isSelected ? [styles.card, styles.selectedCard] : styles.card;  


function CustomCard({mode, title, source, style, styleSource}) {

  const [isSelected, setIsSelected] = useState(false) // fazendo um useState para setar seleçao

  const handleCardPress = () => {
    setIsSelected(!isSelected)
  }

  const cardStyles = isSelected ? styles.selectedCard : style.card //ternario para mudar o css

  return(

    <TouchableOpacity onPress={handleCardPress}>
      <View style ={cardStyles}>

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
      </View>
    </TouchableOpacity>

        )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    // outros estilos do card
  },
  selectedCard: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    // outros estilos do card selecionado
  },
});


// modelo de source: { uri: 'https://picsum.photos/700' }

export default CustomCard;