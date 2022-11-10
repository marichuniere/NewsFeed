import { NEWS_API_KEY } from "@env";
import api from "../../helpers/Axios";

export const fetchNews = async () => {
	try {
		const response = await api.get(`/top-headlines?sources=bbc-news&apiKey=${ NEWS_API_KEY}`)
  	return response
	} catch (error) {
		console.error('fetch news api error', error)
	}
}
