import React from "react"
import { View, Text, Image } from "react-native"
import tw from 'twrnc'
import { fonts } from '../styles/global'

interface NewsImageModalProps {
  imageUrl: string
  title: string
}

class NewsImageModal extends React.PureComponent<NewsImageModalProps> {

  constructor(props: NewsImageModalProps) {
    super(props)
    this.state = {}
  }

  render() {
    const { imageUrl, title }: any = this.props

    return (
      <View style={tw`flex-col items-center justify-center w-full h-full px-5 py-3 bg-[#272E32]`}>
        <View style={tw`flex-col w-full`}>
          <Text style={[tw`text-xl text-left text-white`, fonts.fontRalewaySemiBold]}>{ title }</Text>
          <Image
            style={tw`w-full h-[20rem] rounded-xl my-5`}
            resizeMode="cover"
            source={{
              uri: `${imageUrl}`
            }}
          />
        </View>
      </View>
    )
  }
}

export default NewsImageModal