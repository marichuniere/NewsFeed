import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchNews } from './effects'
import * as type from './action-types'

function* workGetNewsFetch(): any {
  try {
    const news = yield call(fetchNews)
    yield put({
      type: type.FETCH_NEWS_SUCCESS,
      payload: news.data.articles
    })
  } catch (error: any) {
    yield put({type: type.FETCH_NEWS_ERROR, message: error.message})
  }
}

const newsSaga = [
  takeLatest(type.FETCH_NEWS_REQUEST, workGetNewsFetch)
]

export default newsSaga