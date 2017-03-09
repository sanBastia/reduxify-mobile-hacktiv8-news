import React from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native'

import { connect } from 'react-redux'

import { fetchMyProfile, fetchYourProfile } from '../../actions'
import { Search } from './Search'
import { Header } from './Header'

class People extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        searchKeyword : []
      }

      this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount(){
        this.props.fetchMyProfile()
    }

    handleChange(e){
      let value = e.nativeEvent.text
      let profile = value.split(" ")
      this.setState({
        searchKeyword: profile
      })
      let self = this;
      setTimeout(() => {
        console.log(this.state.searchKeyword);
        self.props.fetchYourProfile(this.state.searchKeyword)
      }, 100);
    }

    render() {
        return (
          <View style={styles.container}>
            <Header />
            <Search handleChange={this.handleChange} />
            <Text>
              Nama : {this.props.people.nama}
            </Text>
            <Text>
              lahir : {this.props.people.usia}
            </Text>
            <Text>
              zodiak : {this.props.people.zodiak}
            </Text>
            <Text>
              Tips Buat kamu  : {this.props.people.ramalan ? this.props.people.ramalan.harian.umum : 'Loading...'}
            </Text>
            <Button onPress={this.props.goToNews} title="News"/>
            <Button onPress={this.props.back} title="Back"/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    searchForm : {
      width:"50%"
    }
});


const mapStateToProps = state => {
  return{
    people : state.people
   }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchMyProfile : () => dispatch(fetchMyProfile()),
    fetchYourProfile : (profile) => dispatch(fetchYourProfile(profile))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(People)
