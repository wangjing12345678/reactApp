// reducers.js

// combineReducers 工具函数，用于组织多个reducer，并返回reducer集合
import {combineReducers} from 'redux'
import defaultState from './state'
import {SET_PAGE_TITLE,SET_INFO_LIST,SET_PAGE_TAB,SET_ROUTEALL,SET_DEFAULT_SELECTED_KEYS} from './actions'


//一个reducer 就是一个函数
function pageTitle ( state = defaultState.pageTitle, action){
    // 不同的action 有不同的处理逻辑
    switch (action.type) {
        case SET_PAGE_TITLE:
            return action.data
        default:
            return state
    }
}

function pageTab ( state = defaultState.pageTab, action){
    // 不同的action 有不同的处理逻辑
    switch (action.type) {
        case SET_PAGE_TAB:
            return action.data
        default:
            return state
    }
}

function infoList (state = defaultState.infoList, action){
    switch (action.type) {
        case SET_INFO_LIST:
            return action.data
        default:
            return state
    }
}

function routesAll (state = defaultState.routesAll, action){
    switch (action.type) {
        case SET_ROUTEALL:
            return action.data
        default:
            return state
    }
}

function defaultSelectedKeys (state = defaultState.defaultSelectedKeys, action){
    switch (action.type) {
        case SET_DEFAULT_SELECTED_KEYS:
            return action.data
        default:
            return state
    }
}
export default combineReducers({
    pageTitle,
    infoList,
    pageTab,
    routesAll,
    defaultSelectedKeys
})
