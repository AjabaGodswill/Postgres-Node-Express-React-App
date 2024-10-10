import React, { useEffect, Component } from 'react'
import history from './history'
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'
import axios from 'axios'

class authCheck extends Component {
    sendProfileToDb = (profile) => {
        const data = profile
        axios.post('/api/post/userProfileToDB', data)
            .then(() => axios.get('/api/post/userProfileFromDB'), { params: { email: profile.profile.email } }
                .then(res => this.props.setDbProfile(res.data)))
            .then(history.replace('/'))
    }

    componentDidMount() {
        if (this.props.auth.isAuthticated()) {
            this.props.loginSuccess()
            this.props.addProfile(this.props.auth.userProfile)
            this.props.sendProfileToDb(this.props.auth.userProfile)
            history.replace('/')
        } else {
            this.props.loginFailure()
            this.props.removeProfile()
            this.props.removeDbProfile()
            this.props.replace('/')
        }
    }
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginSuccess: () => dispatch(ACTIONS.loginSuccess()),
        loginFailure: () => dispatch(ACTIONS.loginFailure()),
        addProfile: (profile) => dispatch(ACTIONS.addProfile(profile)),
        removeProfile: () => dispatch(ACTIONS.removeProfile()),
        setDbProfile: (profile) => dispatch(ACTIONS.setDbProfile(profile)),
        removeDbProfile: () => dispatch(ACTIONS.removeDbProfile())

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(authCheck)
