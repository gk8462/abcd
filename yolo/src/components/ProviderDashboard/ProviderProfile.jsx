import React from 'react';
import { 
    Button, Snackbar, Grid,
    Card, Avatar, CardActionArea,
} from '@material-ui/core';

import log from '../../utils/logger.service'
import {Link} from 'react-router-dom';

export default class ProviderProfile extends React.Component {

    constructor(props){
        super();
        this.state = {
            providerData:{}
        }
    }
    
    componentDidMount() {
       let demo= window.location.search;
       let  myParam = demo.split("=");
       let Id = myParam[1];
       console.log(Id)
      

       
        fetch('/api/provider/'+Id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res=> {
                if(res.status === 200) {
                    return res.json().then(res=> {
                        this.setState({
                            providerData:res
                        })
                      
            

                    })
                } 
            }).catch(err=> {
               console.log(err);
            })
        }
    

    
    render() {
    
            return(
                <div className="profile_container">
                <div className="profile_card">
                
                <div className="profile_img">        
                     <img src ={this.state.providerData.providerIdentityImg} ></img> 
                </div>
                <div className="profile_company">
                        PartnerId:  {this.state.providerData.partnerId }
                </div>

                <div className="profile_company">
                        Name:  {this.state.providerData.fullName }
                </div>
                <div className="profile_company">
                        EmailId:  {this.state.providerData.email }
                </div>
                <div className="profile_company">
                        Contact No:  {this.state.providerData.mobileNumber }
                </div>

                <div className="profile_company">
                        City:  {this.state.providerData.City }
                </div>

                <div className="profile_company">
                        Fees:  {this.state.providerData.Fees }
                </div>

                <div className="profile_company">
                        Org Name:  {this.state.providerData.OrganizationName }
                </div>

                <div className="profile_company">
                        Org Reg No:  {this.state.providerData.OrganizationRegNumber }
                </div>


                <div className="profile_company">
                        Org Address:  {this.state.providerData.OrganizationAddress }
                </div>

                <div className="profile_title">     
                   {this.state.providerData.servicesOffered!=undefined  && this.state.providerData.servicesOffered.map((expertise)=> {                 
                                return (
                                <div><p>Services:</p> 
                                <li>{expertise.name}</li>
                                </div>
                                
                     )})                               
                    }                              
                </div>
                <div className="profile_title">     
                   {this.state.providerData.partnerType!=undefined  && this.state.providerData.partnerType.map((expertise)=> {                 
                                return (
                                <div><p>Expertise:</p> 
                                <li>{expertise.name}</li>
                                </div>
                                
                     )})                               
                    }                              
                </div>


                </div>
                </div>
            )
    }
}

