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
        Hacktiv8 News !
      </Text>
      <Image
      style={styles.newspaper}
      source={{uri : "https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Newspaper_news_rss_vector_paper_symbol_simple.png"}}
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
    newspaper: {
        width: 40,
        height: 40
    }
});
