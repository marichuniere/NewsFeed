import React from 'react'
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import moment from 'moment'
import NewsImageModal from '../component/NewsImageModal'

interface NewsDetailProps {
  route: any
}

interface NewsDetailState {
  modalVisible: boolean
}

class NewsDetail extends React.PureComponent<NewsDetailProps, NewsDetailState> {

  constructor(props: any) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  render() {

    const { route } = this.props

    const { id, title, content, urlToImage, date }: any = route.params

    return (
      <View  style={tw`flex-1 flex-col items-center w-full px-5 py-3 bg-[#272E32]`}>
        <View  style={tw`flex-col items-center w-full my-10`}>
          <Text style={[tw`text-3xl text-center text-white`, fonts.fontRalewayBold]}>News Detail</Text>
          <Text style={[tw`text-xl text-center text-[#82AC6A]`, fonts.fontRalewayLight]}>{moment(date).format('LL')}</Text>
        </View >
        <Text>{id}</Text>
        <Text style={[tw`text-xl text-left text-white`, fonts.fontRalewaySemiBold]}>{title}</Text>
        <View style={tw`flex-col w-full`}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                modalVisible: true
              })
            }}
          >
            <Image
              style={tw`w-full h-[10rem] rounded-xl my-5`}
              resizeMode="cover"
              source={{
                uri: `${urlToImage}`
              }}
            />
          </TouchableOpacity>
          <Text style={[tw`text-base text-left text-white`, fonts.fontRaleway]}>{content}</Text>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({
              modalVisible: false
            })
          }}   
        >
          <NewsImageModal
            imageUrl={urlToImage}
            title={title}
          />
        </Modal>
      </View>
    )
  }
}

export default NewsDetail 