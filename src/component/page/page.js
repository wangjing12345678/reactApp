import React from 'react';

import { connect } from 'react-redux'

import { setPageTitle, setInfoList } from '../../store/actions.js'

class page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dd:'90'};
        this.handleClick = this.handleClick.bind(this);
    }
   async componentDidMount() {
        let {  setInfoList } = this.props

       // console.log(this.props)

       setInfoList([{data:1}]).then(res => {
           // console.log(res)
       })
        // require({
        //     url: '/api/route/getRoutes',
        //     method: 'post',
        //     data: '12'
        // }).then(res => {
        //     console.log(res)
        // })

    }
    handleClick(){
        let { setPageTitle } = this.props

        setPageTitle('新的标题')
        this.setState({
            dd:'9999999'
        })
    }
    render() {
        return (
            <div>
                <Name name={this.props.pageTitle} />
                <h1 onClick={this.handleClick}>新的{this.state.dd}</h1>
            </div>
        );
    }
}

class Name extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        infoList: state.infoList
    }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle (data) {
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setPageTitle(data))
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
                dispatch({ type: 'SET_PAGE_TITLE', data: data })
            )*/
        },
       async setInfoList (data) {
           var aa = ''
           aa =  await dispatch(setInfoList(data))
           return aa
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(page)
