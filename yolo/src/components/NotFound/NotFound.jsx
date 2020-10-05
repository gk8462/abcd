import React from 'react';
import HeaderContainer from '../../containers/headerContainer';

export default class NotFound extends React.Component {

    render() {
        return(
            <div>
                <HeaderContainer />
                <div style={{marginTop:100}}>
                    <span>The page you are looking for is not found</span>
                </div>
            </div>
        )
    }
}