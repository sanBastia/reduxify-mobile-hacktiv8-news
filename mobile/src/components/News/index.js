import React from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native'

import { connect } from 'react-redux'

import { fetchNews,SearchingNews  } from '../../actions'
import { Search } from './Search'
import { List } from './List'
import { Header } from './Header'

class News extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        searchKeyword : ''
      }
      this.handleChange = this.handleChange.bind(this)
    }


    componentWillMount(){
        this.props.fetchNews()
    }

    handleChange(e){
      this.setState({
        searchKeyword: e.nativeEvent.text
      })
      this.props.SearchingNews(this.state.searchKeyword)
    }
    render() {
        return (
          <View style={styles.container}>
            <Header />
            <Search handleChange={this.handleChange} />
            <List datas={this.props.news}/>

            <Button onPress={this.props.goToPeople} title="People"/>
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
    news : state.news
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchNews : () => dispatch(fetchNews()),
    SearchingNews :(query) => dispatch(SearchingNews(query))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News)
