import React from 'react'
import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import tw from 'twrnc'
import moment from 'moment'

const NewsDetail = () => {

  const route = useRoute()

  const { id, title, content, urlToImage,date }: any = route.params

  return (
    <View  style={tw`flex-1 flex-col items-center w-full px-5 py-3 bg-[#272E32]`}>
      <View  style={tw`flex-col items-center w-full my-10`}>
        <Text style={tw`text-3xl text-center text-white`}>News Detail</Text>
        <Text style={tw`text-xl text-center text-[#82AC6A]`}>{moment(date).format('LL')}</Text>
      </View >
      <Text>{id}</Text>
      <Text style={tw`text-xl text-left text-white`}>{title}</Text>
      <View style={tw`flex-col w-full`}>
        <Image
          style={tw`w-full h-[10rem] rounded-xl my-5`}
          resizeMode="cover"
          source={{
            uri: `${urlToImage}`
          }}
        />
        <Text style={tw`text-base text-left text-white`}>{content}</Text>
      </View>
    </View>
  )
}

export default NewsDetail 