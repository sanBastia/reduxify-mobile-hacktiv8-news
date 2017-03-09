import * as types from '../constants/actionType'

export const displayNews = (news) => ({ type : types.DISPLAY_NEWS , payload : news })
export const displayProfile = (people) => ({ type : types.DISPLAY_PROFILE , payload : people })

export const fetchNews = () => {
    return (dispatch) => {
      fetch('http://hn.algolia.com/api/v1/search?query=react')
      .then(res => res.json())
      .then(news => {
        dispatch(displayNews(news))
      })
      .catch(err =>{})
    }

}

export const SearchingNews = (query) => {
    return (dispatch) => {
      fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then(res => res.json())
      .then(news => {
        dispatch(displayNews(news))
      })
      .catch(err =>{})
    }

}

export const fetchMyProfile = () => {
    return (dispatch) => {
      fetch('https://ibacor.com/api/zodiak?nama=irsan&tgl=14-07-1992')
      .then(res => {

        return res.json()

      })
      .then(people => {
        dispatch(displayProfile(people))
      })
      .catch(err =>{
        console.log(err);
      })
    }
}

export const fetchYourProfile = (profile) => {

    let name = profile[0]
    let birthdate = profile[1]
    let credential = `nama=${name}&tgl=${birthdate}`



    return (dispatch) => {
      fetch(`https://ibacor.com/api/zodiak?${credential}`)
      .then(res => res.json())
      .then(people => {
        dispatch(displayProfile(people))
      })
      .catch(err =>{})
    }
}
