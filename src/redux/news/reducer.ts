import * as types from './action-types'

interface Action {
	type: string
	payload: any
}

interface InitialState {
	news: any
	fetching: boolean
}

const initialState: InitialState = {
	news: [],
	fetching: false
}

export default function (state = initialState, action: Action) {
	switch (action.type) {
		case types.FETCH_NEWS_REQUEST:
			return {
				...state,
				fetching: true
			}
		case types.FETCH_NEWS_SUCCESS: 
			return {
				...state,
				news: action.payload,
				fetching: false
			}
		case types.FETCH_NEWS_ERROR:
			return {
				...state,
				fetching: false
			}
		default:
			return state
	}
}