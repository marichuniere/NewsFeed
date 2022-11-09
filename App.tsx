import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, StyleSheet, TextInput, FlatList, Dimensions, Image } from 'react-native'
import api from './src/lib/Axios'
import { NEWS_API_KEY } from '@env'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsFetch } from './src/redux/states/newsState'
import moment from 'moment'

const App = () => {

  const { news, isLoading }: any = useSelector<any>(state => state.newsReducer)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getNewsFetch())
  }, [dispatch])



  // const [news, setNews] = useState([])

  // const getNewsAPI = async () => {
  //   const res = await api.get(`/top-headlines?sources=bbc-news&apiKey=${NEWS_API_KEY}`)
  //   setNews(res.data.articles)
  // }

  // useEffect(() => {
  //   getNewsAPI()
  // }, [])

  const renderItems = (items: any) => {
    return (
      <View style={{ padding: 20, marginVertical: 10, backgroundColor: '#FEFEFE', borderRadius: 10 }}>
        <Text style={{ fontSize: 18 }}>{items.item.title}</Text>
        <View style={{ paddingVertical: 20, justifyContent: 'space-between' }}>
          <Image
            style={{width: 250, height: 250}}
            resizeMode="cover"
            source={{
              uri: `${ items.item.urlToImage }`
              }}
          />
          <Text>{items.item.description}</Text>
          <Text style={{ paddingTop: 20}}>{moment(items.item.date).format('LL')}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>News Feed</Text>
      </View>
      <View>
        {isLoading && (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
      {!isLoading && (
        <FlatList
          data={news}
          renderItem={renderItems}
        />
      )}
    </View>
  )
}

export default App
