import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsFetch } from '../redux/states/newsState'
import { useNavigate } from '../utils/RootNavigation'
import tw from 'twrnc'
import moment from 'moment'

const NewsFeed = () => {

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
      <TouchableOpacity
				style={tw`flex-col w-full rounded-xl my-3 p-3 bg-[#2F373E]`}
        onPress={() => {
          useNavigate('NewsDetail', {
              id: items.item.id,
              title: items.item.title,
							date: items.item.date,
              content: items.item.content,
              urlToImage: items.item.urlToImage
          })
        }}
      >
        <View style={tw`flex-col items-start w-full`}>
            <Text style={tw`text-xl text-left text-white`}>{items.item.title}</Text>
            <View style={tw`flex-col w-full`}>
              <Image
								style={tw`w-full h-[10rem] rounded-xl my-5`}
								resizeMode="cover"
								source={{
									uri: `${ items.item.urlToImage }`
								}}
              />
              <Text style={tw`text-base text-left text-white`}>{items.item.description}</Text>
              <Text style={tw`text-xs text-left text-[#82AC6A] my-3`}>{moment(items.item.date).format('LL')}</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={tw`flex-1 flex-col items-center w-full px-5 py-3 bg-[#272E32]`}>
      <View style={tw`flex-col items-center w-full my-10`}>
        <Text style={tw`text-3xl text-center text-white`}>News Feed</Text>
        <Text style={tw`text-xl text-center text-[#82AC6A]`}>React Redux + Redux Saga</Text>
      </View>
      {isLoading && (
				<View style={tw`flex-1 flex-col items-center justify-center w-full`}>
					<Text style={tw`font-black text-xl text-white`}>Loading...</Text>
				</View>
			)}
      {!isLoading && (
        <FlatList
          data={news}
          renderItem={renderItems}
        />
      )}
    </View>
  )
}

export default NewsFeed
