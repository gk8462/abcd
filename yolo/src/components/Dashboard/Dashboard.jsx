import React from 'react';
import ProcHeader from '../../containers/procHeaderContainer';
import UserProfileContainer from '../../containers/userProfleContainer';
import LinearProgress from '@material-ui/core/LinearProgress';


export default class Dashboard extends React.Component {

    constructor(props) {
        super();
        this.state = {
            load:false,
        }
    }

    componentDidMount() {
        document.title = 'Yoloj - User Profile';
        if(localStorage.getItem('userProfile')==='true'){
            this.setState({
                load: true
            })
        }
    }

    render() {
        return(
            <div>
                { this.state.load ?
                    <LinearProgress color="secondary" />
                :<div>
                    <ProcHeader />
                <div style={{paddingTop:100}}>
                    <UserProfileContainer />
                </div>
                </div>
                }
            </div>
        )
    }
}