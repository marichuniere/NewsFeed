import React from 'react'
import NewsCard from '../component/NewsCard'
import tw from 'twrnc'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import { FETCH_NEWS_REQUEST } from '../redux/news/action-types'

interface NewsFeedProps {
  news: any
  fetching: boolean
  dispatch: any
}

class NewsFeed extends React.Component<NewsFeedProps, any> {

  constructor(props: NewsFeedProps) {
    super(props)
    this.state = {}
  }

  componentDidMount(): void {
    const { dispatch } = this.props
    dispatch({ type: FETCH_NEWS_REQUEST })
  }

  renderItems = (items: any) => {
    return (
      <NewsCard items={items} />
    )
  }

  render() {

    const { news, fetching } = this.props

    return (
      <View style={tw`flex-1 flex-col items-center w-full px-5 py-3 bg-[#272E32]`}>
        <View style={tw`flex-col items-center w-full my-10`}>
          <Text style={tw`text-3xl text-center text-white`}>News Feed</Text>
          <Text style={tw`text-xl text-center text-[#82AC6A]`}>React Redux + Redux Saga</Text>
        </View>
        {fetching && (
          <View style={tw`flex-1 flex-col items-center justify-center w-full`}>
            <Text style={tw`font-black text-xl text-white`}>Loading...</Text>
          </View>
        )}
        {!fetching && (
          <FlatList
            data={news}
            renderItem={this.renderItems}
          />
        )}
      </View>
    )
  }
}

const mapStateToProps = (data: any) => ({
  news: data.newsReducer.news,
  fetching: data.newsReducer.fetching
})

export default connect(mapStateToProps)(NewsFeed)