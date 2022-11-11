import React from 'react'
import NewsCard from '../component/NewsCard'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { OcticonsIcon } from '../config/Icons'
import { connect } from 'react-redux'
import { View, Text, FlatList, RefreshControl } from 'react-native'
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
    this.refresh()
  }

  refresh = () => {
    const { dispatch } = this.props
    dispatch({ type: FETCH_NEWS_REQUEST })
  }

  renderHeader = () => {
    return (
      <View style={tw`flex-col items-center w-full my-10`}>
        <OcticonsIcon
          size='extraLarge'
          name='rocket'
          color='#2fc278'          
        />
        <Text style={[tw`text-3xl text-center text-white mt-2`, fonts.fontRalewayBold]}>News Feed</Text>
        <Text style={[tw`text-xl text-center text-[#82AC6A]`, fonts.fontRalewayLight]}>React Redux + Redux Saga</Text>
      </View>
    )
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
        {fetching && (
          <View style={tw`flex-1 flex-col items-center justify-center w-full`}>
            <Text style={[tw`font-black text-xl text-white`, fonts.fontRaleway]}>Loading...</Text>
          </View>
        )}
        {!fetching && (
          <FlatList
            ListHeaderComponent={this.renderHeader}
            data={news}
            renderItem={this.renderItems}
            refreshControl={
              <RefreshControl
                colors={["#9Bd35A", "#689F38"]}
                refreshing={this.state.isRefreshing}
                onRefresh={this.refresh}
              />
            }
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