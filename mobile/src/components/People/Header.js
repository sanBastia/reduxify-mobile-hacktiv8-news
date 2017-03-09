import React from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'


export const Header = () => {

  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>
        Hacktiv8 People !
      </Text>
      <Image
      style={styles.people}
      source={{uri : "https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png"}}
      />
    </View>
  )

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "steelblue",
        flexDirection: 'column',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    people: {
        width: 40,
        height: 40
    }
});
