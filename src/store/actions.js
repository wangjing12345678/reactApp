import require from '../utils/require'
export const SET_PAGE_TITLE = "SET_PAGE_TITLE";
export const SET_INFO_LIST = "SET_INFO_LIST";
export const SET_PAGE_TAB = "SET_INFO_LIST";
export const SET_ROUTEALL = "SET_ROUTEALL";
export const SET_DEFAULT_SELECTED_KEYS = "SET_DEFAULT_SELECTED_KEYS";


export function setPageTitle(data){
    return {type: SET_PAGE_TITLE, data: data}
}

export function setPageTab(data){
    return {type: SET_PAGE_TAB, data: data}
}

export function setRouteAll(data){
    return {type: SET_ROUTEALL, data: data}
}

export function setDefaultSelectKeys(data){
    return {type: SET_DEFAULT_SELECTED_KEYS, data: data}
}


export function setInfoList (data) {
    return async (dispatch, getState) => {
        // 使用fetch实现异步请求
        // 请求发起前可以先dispatch一个加载开始状态
        // 例如 dispatch({ type: SET_LOADING_TYPE, data: "loading" })
        var  result = await require({
            url: '/api/route/getRoutes',
            method: 'post',
            data: 'DD0072191'
        })
        if (result.code == '0000'){
            dispatch({ type: SET_INFO_LIST, data: result })
            return result
        }else{
            return false
        }

    }
}
