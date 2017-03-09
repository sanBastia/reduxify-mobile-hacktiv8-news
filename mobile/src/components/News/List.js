import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const doSearchAPI = (props) => {
        return (
            <View>
            {
                props.datas.hits.map((item, index) => {
                    return ( <Text
                          style={styles.newslist}
                          key={index}>
                          {item.title}
                            </Text>
                          )
                }) 
            }
            </View>
          )
        }
const showlistAPI = () => {
  return (
    <Text>
    Loading....
    </Text>
  )
}

export const List = (props) => {

  return (
    props.datas.hits ? doSearchAPI(props) : showlistAPI()
  )
}

const styles = StyleSheet.create({

  newslist :{
    textAlign:'center',
    fontFamily:'Cochin',
    textAlign : 'center',
    fontSize: 9
  }
})
