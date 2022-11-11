import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { useNavigate } from "../config/RootNavigation";
import tw from 'twrnc'
import { fonts } from '../styles/global'
import moment from 'moment'

interface NewsCardProps {
	items: any
}

interface NewsCardState {
	items: any
}

class NewsCard extends React.PureComponent<NewsCardProps, NewsCardState> {
	constructor(props: NewsCardProps) {
		super(props)
		this.state = {
			items: props.items
		}
	}

	render() {

		const { items }: any = this.state

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
					<Text style={[tw`text-xl text-left text-white`, fonts.fontRalewaySemiBold]}>{items.item.title}</Text>
					<View style={tw`flex-col w-full`}>
						<Image
							style={tw`w-full h-[10rem] rounded-xl my-5`}
							resizeMode="cover"
							source={{
								uri: `${items.item.urlToImage}`
							}}
						/>
						<Text style={[tw`text-base text-left text-white`, fonts.fontRaleway]}>{items.item.description}</Text>
						<Text style={[tw`text-xs text-left text-[#82AC6A] my-3`, fonts.fontRaleway]}>{moment(items.item.date).format('LL')}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

export default NewsCard