import React, { useEffect } from 'react';
import { 
    Button, Snackbar, Grid,
    Card, Avatar, CardActionArea, Typography,
} from '@material-ui/core';

import log from '../../utils/logger.service'
import {Link} from 'react-router-dom';
import { store } from '../../store';
import './ProviderProfile.css';
import MailIcon from '@material-ui/icons/Mail';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from "@material-ui/core/styles";
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';

import HeaderContainer from '../../containers/headerContainer';
import Background from '../../assets/img/newbg.jpg';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './SimilarCards.css';
import Sharefunctionality from '../Home/Sharefunctionality.jsx';
import Contact_modal from '../Home/Contact_modal.jsx';


import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';






var media ={
    height: '70px', width: '70px',
    borderRadius: '50%', align: 'center',
    border: '3px solid #f2f2f2',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  }

var share_link={}
var share_email={}

var modal_data_1={}
var modal_data_2={}
var modal_data_3={}
var modal_data_4={}
var modal_data_5={}
var modal_data_6={}
var modal_data_7={}
var modal_data_8={}






const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '2px 5px 2px 5px',
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);




export default class Similar_Profiles_location extends React.Component {


    constructor(props){
        super();
        this.state = {
            providerData:[],
            cityData:[],
            city:''
        }   
    }
    
    
    componentDidMount() {
       let demo= window.location.search;
       let  myParam = demo.split("=");
       let Id = myParam[1];
       var pcity = '';
        fetch('/api/provider/'+Id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res=> {
                if(res.status === 200) {
                    return res.json().then(res=> {
                        this.setState({
                            providerData:res,
                            city:res.City
                        }) 
                        this.CitySelect()
                        pcity = this.state.providerData.City
                        console.log("Pcityy==",pcity)

                    })
                } 
            }).catch(err=> {
               console.log(err);
            })
         
            }




            CitySelect = () => {
                fetch('/api/provider/city/'+this.state.city, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res=> {
                    console.log("response is=======", res)
                    if(res.status === 200) {
                        return res.json().then(res=> {
                            this.setState({
                                cityData:res
                                
                            })           
    
                        })
                    } 
                }).catch(err=> {
                   console.log(err);
                })
    
                //console.log("ityyyyyy data is ---", this.state.cityData)
             
            } 




            logic_for_restricting_data(){

                var fullname_array=[]



                return(
                    <div>
        
        
                        <div style={{width: '90%', marginLeft: '12px'}}>Expertise&nbsp;<ChevronRightIcon/></div>
                        <br/>
        
        
                        {
                            
                            (this.state.cityData && this.state.cityData.length && this.state.cityData!=undefined  ) ? this.state.cityData.map((itemz,idx)=>{
                                return (
                                    <div>
        
        
                                        {this.props.ren == itemz.partnerType[0].name && itemz.fullName!=this.state.providerData.fullName?
                                        (
                                        <div>    
        
                    
                                            <span style={{display: 'none'}}>
                                                {!fullname_array.includes(itemz.fullName)?
                                                (
                                                    fullname_array.push(itemz.fullName)
                                                )
                                                :
                                                (
                                                ""
                                                )    
                                                }
                                            </span>
        
                                            {fullname_array.indexOf(itemz.fullName)<5 ?
                                            
                                            (
                            
        
                                            <div class="cardd" style={{backgroundColor:"#FFF" }}>    
        
                                            <div class="header_element">
        
                                            <div class="left_header"> 
        
                                            <img src={itemz.providerIdentityImg}  style={media}></img><br/>
        
                                            {itemz.approved == true ? 
                                                        (
                                                            <CheckCircleIcon style={{ backgroundColor: '#fff',color: '#0077b3', fontSize: '16px',border: '1px solid #fff', borderRadius: '50%', marginTop: '-22px'}}/>
                                                        )
                                                        :
                                                        (
                                                            <span style={{ marginTop: '-22px'}}>.</span>
                                                        )
                                            }
                        
                                        </div>
        
                                        <div class="right_header">
        
                                            <Typography variant="body2" color="textprimary" style={{fontSize: '14px'}}>
                                                {itemz.fullName}&nbsp;  
                                                <span style={{display: 'none'}}>{share_link=`/provider/profile?id=${itemz.partnerId}`}</span>
                                                <span style={{display: 'none'}}>{share_email=`http://mailto:${itemz.email}`}</span>
        
                                                <Link style={{float: 'right', marginRight:'15px', color: '#4d4d4d'}} ><Sharefunctionality b1={share_email} brand={share_link} style={{fontSize: '12px'}}/></Link>   
                                            </Typography>
                                            
                                            <Typography variant="caption"  component="p" style={{fontSize: '12px' , color: '#808080'}}>
                                                <WorkIcon style={{fontSize: '11px', marginTop: '-2px'}}/> 
                                                &nbsp;
                                                {itemz.OrganizationName.substr(0, 11)} 
        
                                                {itemz.OrganizationName.length > 8 ? 
                                                    (
                                                <HtmlTooltip
                                                    placement="top-start"
                                                    title={
                                                    <React.Fragment>
                                                    {itemz.OrganizationName}
                                                    </React.Fragment>
                                                    }
                                                    >
                                                    <Link underlineNone class="link_hover" style={{color: '#0077b3',textDecoration: 'none'}}>
                                                        ...
                                                    </Link> 
                                                    </HtmlTooltip>
                                                    )
                                                    :
                                                    (
                                                        ""
                                                    )
                                                }
                                                <br/>
                                                <LocationOnOutlinedIcon style={{fontSize: '12px'}}/> {itemz.City}
                                                
                                            </Typography>
        
                                        </div>
                                    </div>
        
        
                                    <div class="cardd_padding"> 
                                    
                                    <Typography variant="body2" color="textPrimary" style={{fontSize: '13px'}}>
                                        {itemz.partnerId}
                                </Typography>
                                
                                    <Typography variant="caption" color="textSecondary" >
                                    {itemz.partnerType[0].name}
        
                                    
                                    {itemz.partnerType.length > 1 ? 
                                        (
                                            <HtmlTooltip
                                            placement="top-start"
                                            title={
                                            <React.Fragment>
                                                    
                                                {itemz.partnerType!=undefined && itemz.partnerType.map((expertise)=>{
                                                    return(
                                                        <span>{expertise.name},&nbsp;</span>
                                                    )
                                                })
                                                }
                                                
                                                </React.Fragment>
                                                }
                                            >
                                                <Link underlineNone style={{color: '#0077b3', textDecoration: 'none'}}>
                                                &nbsp; &  more
                                                </Link>
                                            </HtmlTooltip>
                                        )
                                        :
                                        (
                                            ""
                                        )
                                    }
                                    </Typography>             
        
        
        
                                    <Typography variant="caption" component="p" style={{fontSize: '12px', color: '#595959'}}> 
                                        Fees {itemz.Fees} &nbsp;
                                        
                                    </Typography>
        
                                    
                                    <br/>
                                    <Link target="_blank" rel="noopener" underlineNone class="link_hover" style={{color: '#4d4d4d'}} to={`/provider/profile?id=${itemz.partnerId}`}>
                                        View Profile
                                    </Link>
                                    &nbsp;&nbsp;
                
                                    
                                    <Link underlineNone class="link_hover" style={{color: '#4d4d4d',textDecoration: 'none'}}>
                                        <span style={{display: 'none'}}>{modal_data_1=itemz.email}</span>
                                        <span style={{display: 'none'}}>{modal_data_2=itemz.mobileNumber}</span>
                                        <span style={{display: 'none'}}>{modal_data_3=itemz.country}</span>
                                        <span style={{display: 'none'}}>{modal_data_4=itemz.approved}</span>
                                        <span style={{display: 'none'}}>{modal_data_5=itemz.City}</span>
        
                                        <span style={{display: 'none'}}>{modal_data_6=itemz.ALineOne}</span>
                                        <span style={{display: 'none'}}>{modal_data_7=itemz.ALineTwo}</span>
                                        <span style={{display: 'none'}}>{modal_data_8=itemz.PinCode}</span>
        
                                        <Contact_modal m1={modal_data_1} m2={modal_data_2} m3={modal_data_3} m4={modal_data_4} 
                                            m5={modal_data_5} m6={modal_data_6} m7={modal_data_7} m8={modal_data_8}
                                        />
                                    </Link>
        
                                
        
                            
        
                                    {itemz.partnerType.length > 1 ? 
                                        (
                                            <FavoriteBorderIcon style={{float: 'right', fontSize: '14px', color: '#666666',cursor: 'pointer', marginTop: '5px'}}/>
                                        )
                                        :
                                        (
                                            <FavoriteIcon style={{float: 'right', fontSize: '14px',color: '#0077b3', cursor: 'pointer', marginTop: '7px'}}/>
                                        )
                                    }
        
                                    </div>  
                                    
                                    
                                
        
        
                                </div>
                                )
                                :
                                (
                                    ""
                                )
                                }
        
        
        
        
        
        
        
                            
        
                            </div>
                            )
                            
                            :
                            (
                                ""
                            )    
                            }
                            </div>
        
        
                        )
                        
                    }):  "No profiles"
                }
        
                        
        
                        <div class="cardd" style={{textAlign: 'center'}}>
                            <br/><br/>
                            <CheckCircleOutlinedIcon style={{color: '#006699'}}/><br/>
                            <Link variant="caption">See all profiles from<br/>{this.props.rcn}</Link> 
                            <br/>
                            
                        </div> 
        
                    </div>
                )
        
                





                

            }//end of function

            
        


   
                            


    
    render() {
    
            return(
                <div>
                    {this.logic_for_restricting_data()}
                </div>
            )


            }


}

