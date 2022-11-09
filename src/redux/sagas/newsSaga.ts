import { call, put, takeEvery } from 'redux-saga/effects'
import { getNewsSuccess } from '../states/newsState'
import api from '../../lib/Axios'
import { NEWS_API_KEY } from '@env'

function* workGetNewsFetch(): any {
  const news = yield call(() => api.get(`/top-headlines?sources=bbc-news&apiKey=${ NEWS_API_KEY}`)) 
  const formattedNews = yield news.data.articles
  yield put(getNewsSuccess(formattedNews))
}

function* newsSaga() {
  yield takeEvery('news/getNewsFetch', workGetNewsFetch)
}

export default newsSaga