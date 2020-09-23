import React from 'react';
import { connect } from 'react-redux'
import { setPageTitle} from "../../store/actions";
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        let { setPageTitle } = this.props

        setPageTitle('我是clock')
        console.log(this.props.pageTitle)
        // this.timer = setInterval(function () {
        //     var opacity = this.state.opacity;
        //     opacity -= .05;
        //     if (opacity < 0.1) {
        //         opacity = 1.0;
        //     }
        //     this.setState({
        //         date:12
        //     });
        // }.bind(this), 100);
    }
    render() {
        return (
            <div>
                <h1>{this.props.pageTitle}</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        infoList: state.infoList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle (data) {

            dispatch(setPageTitle(data))

        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Clock)
