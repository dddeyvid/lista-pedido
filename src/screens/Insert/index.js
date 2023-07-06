import * as React from 'react';
import { Text } from 'react-native-paper';
import InputText from '../../components/InputText';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Height, Width } from "../../constants/dimensions";
import ButtonT from '../../components/Button/Button';
import CustomCard from '../../components/Card/Card';

export default function Insert({navigation}){
    
    function cancelPedido(){
        goToHome()
    }

    function goToHome(){
        navigation.navigate("Home")
    }

    function confirmPedido(){
        goToWish()
    }
 
    function goToWish(){
        navigation.navigate("WishList")
    }
    
    return(
        
        <SafeAreaView style={styles.container}>
                <View style={styles.cardContainer}>
                    <CustomCard 
                        style={styles.card}
                        mode={'outlined'}
                        title={"MarlBoro Red"}
                        source={{ uri: 'https://encurtador.com.br/jtDHJ' }}
                        styleSource={styles.source}
                        /> 
                    <CustomCard 
                        style={styles.card}
                        mode={'outlined'}
                        title={"MarlBoro Red"}
                        source={{ uri: 'https://abrir.link/J4UHT' }}
                        styleSource={styles.source}
                        /> 
                <ButtonT 
                    text={"Confirmar"}
                    mode={"elevated"}
                    style={styles.confirm}
                    textStyle={styles.textWhite}
                    action={confirmPedido}
                    />

                  <ButtonT 
                    text={"Cancelar"}
                    mode={"elevated"}
                    style={styles.cancel}
                    textStyle={styles.textBlack}
                    action={cancelPedido}
                    />
                </View>
            <View style={styles.inputArea}>

                </View>
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  
    container:{
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
    },
    inputArea:{
      padding: 16,
      width: Width*0.8,
      
    },
    confirm:{
      backgroundColor: "#DC143C",
      marginTop: 10,
    },
    cancel:{
      borderColor: "#DC143C",
      borderWidth: 1,
      backgroundColor: "#fff",
      color: "#000000",
      marginTop: 5,
    },
    textBlack: {
      color: "#000000",
    },
    textWhite: {
      color: "#FFF",
    },
    cardContainer: {
        marginTop: 40,
    },
    card: {
        aspectRatio: 1, 
        marginBottom: 10,
        marginTop: 10,
    },
  })