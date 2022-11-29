import React from 'react'
import { Text,StyleSheet, View, Button,TextInput} from 'react-native'


export default class App extends React.Component {
  render() {
    return (



      <View style={styles.BlocP}>

          <View style={styles.Bloc1} >
                <Text style={styles.text1} >Projet SJP 5</Text>
          </View>

          <View style={styles.Bloc2} >

            <View style={{ backgroundColor: "yellow", flex: 2.5 }} />
            <View style={{ backgroundColor: "green", flex: 1, justifyContent: center }}
            <Button
              title="<<"
              onPress={() => alert('droite à gauche')}
            />
            <Button
              title=">>"
              onPress={() => alert('gauche à droite')}
            />
            <View style={{ backgroundColor: "white", flex: 2.5 }} />

          </View>

          <View style={styles.Bloc3} >

                <View style={styles.Boutong}>
                  <Button
                    title="+"
                    onPress={() => alert('ajouter element')}
                  />
                  <Button
                    title="M"
                    onPress={() => alert('modifier element')}
                  />
                  <Button
                    title="-"
                    onPress={() => alert('supprimer element')}
                  />
                </View>

                <View style={styles.Boutond}>
                  <Button
                    title="+"
                    onPress={() => alert('ajouter element')}
                  />
                  <Button
                    title="M"
                    onPress={() => alert('modifier element')}
                  />
                  <Button
                    title="-"
                    onPress={() => alert('supprimer element')}
                  />
                </View>

          </View>

      </View>

      );
          }
}

const styles = StyleSheet.create({

  text1: {
      textAlign : 'center',
      padding: 30,
      paddingTop: 60,
      color: 'white',

    },
  BlocP: {
      flex: 1,
      padding: 2,
    },
  Bloc2: {
      flex: 4,
      flexDirection: "row",
      backgroundColor: "red",
      padding: 5,
    },
  Bloc1: {
      backgroundColor: "blue",
      flex: 1
    },
  Bloc3: {
      backgroundColor: "black",
      flex: 1,
      flexDirection: 'row',
    },
  Boutong: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  Boutond: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
