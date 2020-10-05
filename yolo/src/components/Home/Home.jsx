import React from 'react';
import HeaderContainer from '../../containers/headerContainer';
import {
    Button, Snackbar, Grid,
    Card, Avatar, CardActionArea,
} from '@material-ui/core';
import './Home.css';
import classNames from "classnames";

import { Rating } from '@material-ui/lab';
import { store } from '../../store';
import CardErrorBoundary from '../shared/CardErrorBoundary';
import log from '../../utils/logger.service'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Link } from 'react-router-dom';
import { classList } from '@syncfusion/ej2-base';
import Parallax from '../Parallax/Parallax'
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'
import { withStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import CountrySelect from "../select/country1";
import HomeProviders from '../Home/HomeProviders'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Sharefunctionality from './Sharefunctionality';
import WorkIcon from '@material-ui/icons/Work';
import Tooltip from '@material-ui/core/Tooltip';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Contact_modal from './Contact_modal';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

var media = {
    height: '70px', width: '70px',
    borderRadius: '50%', align: 'center',
    border: '3px solid #f2f2f2',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
}

var share_link = {}
var modal_data_1 = {}
var modal_data_2 = {}
var modal_data_3 = {}
var share_email = {}

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        padding: '2px 5px 2px 5px',
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            errorMessage: '',
            providerData: [],
            allProviderData: [],
            filteredData: [],
            location: '',
            dialogOpen: false,
            name: '',
            allService: [],
            allExpertise: [],
            allCountry: []
        }
    }

    componentDidMount() {
        document.title = 'Welcome to Infosys - Yolo Network';
        this.props.getAllProvider();
        this.props.getAllService();
        this.props.getAllBusinessType();
        store.subscribe(() => {
            if (store.getState().getAllApprovedProvider.error) {
                this.setState({
                    open: true
                })
                this.setState({
                    errorMessage: String(store.getState().getAllApprovedProvider.error)
                })
            } else {
                this.setState({
                    providerData: store.getState().getAllApprovedProvider.success,
                    allProviderData: store.getState().getAllApprovedProvider.success,
                    allService: store.getState().getFinancialService.success,
                    allExpertise: store.getState().getBusinessTypes.success,
                    allCountry: store.getState().getCountries.success
                })
            }
        })
    }

    filterFunction = (filterValue, field) => {
        this.setState({ filteredData: [] })
        let filterArr = []
        let searchData = []
        if (filterValue.country != null && filterValue.city == null) {
            for (let obj of this.state.allProviderData) {
                if (obj.country == filterValue.country) {
                    filterArr.push(obj)
                }
            }
        }
        else if (filterValue.city != null && filterValue.city != null) {
            for (let obj of this.state.allProviderData) {
                if (obj.country == filterValue.country && obj.City == filterValue.city) {
                    filterArr.push(obj)
                }
            }
        }
        else if (filterValue.city == null && filterValue.city == null) {
            for (let obj of this.state.allProviderData) {
                filterArr.push(obj)
            }
        }

        if (field == "name") {
            for (let obj of filterArr) {
                if (obj.fullName == filterValue.name) {
                    searchData.push(obj)
                }
            }
        }
        else if (field == "orgName") {
            for (let obj of filterArr) {
                if (obj.OrganizationName == filterValue.orgName) {
                    searchData.push(obj)
                }
            }
        }
        else if (field == "service") {
            for (let obj of filterArr) {
                for (let service of obj.servicesOffered) {
                    if (service.name == filterValue.service) {
                        searchData.push(obj)
                    }
                }
            }
        }
        else if (field == "expertise") {
            for (let obj of filterArr) {
                for (let expertise of obj.partnerType) {
                    if (expertise.name == filterValue.expertise) {
                        searchData.push(obj)
                    }
                }
            }
        }
        
        if (field == "") {
            this.setState({ providerData: filterArr })
        }
        else {
            this.setState({ providerData: searchData })
        }
    }


    change = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'location':
                this.setState({ location: value });
                break;
            case 'name':
                this.setState({ name: value });
                break;
            default:
                break;
        }
    }

    handleClose = () => {
        this.setState({ dialogOpen: false })
    }

    handleClickOpen = () => {
        this.setState({ dialogOpen: true });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <HeaderContainer />
                <Parallax image={require("../../assets/img/newbg.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand}>
                                    <CountrySelect
                                        getAllProvider={this.state.allProviderData}
                                        getAllService={this.state.allService}
                                        getAllExpertise={this.state.allExpertise}
                                        filterFunction={this.filterFunction} />
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)} style={{ padding: 2, backgroundColor: "#F8F8F8" }}>

                    <Grid container spacing={2} xs={12} style={{ marginTop: 70 }} >
                        <div class="grid_row" >
                            {
                                (this.state.providerData && this.state.providerData.length) ? this.state.providerData.map((itemz, index) => {


                                    return (

                                        <div class="cardd" style={{ backgroundColor: "#FFF" }}>

                                            <div class="header_element">

                                                <div class="left_header">

                                                    <img src={itemz.providerIdentityImg} style={media}></img><br />

                                                    {itemz.approved == true ?
                                                        (
                                                            <CheckCircleIcon style={{ backgroundColor: '#fff', color: '#0077b3', fontSize: '16px', border: '1px solid #fff', borderRadius: '50%', marginTop: '-22px' }} />
                                                        )
                                                        :
                                                        (
                                                            <span style={{ marginTop: '-22px' }}>.</span>
                                                        )
                                                    }


                                                </div>

                                                <div class="right_header">

                                                    <Typography variant="body2" color="textprimary" style={{ fontSize: '14px' }}>
                                                        {itemz.fullName}&nbsp;
                                        <span style={{ display: 'none' }}>{share_link = `/provider/profile?id=${itemz.partnerId}`}</span>
                                                        <span style={{ display: 'none' }}>{share_email = `http://mailto:${itemz.email}`}</span>

                                                        <Link style={{ float: 'right', marginRight: '15px', color: '#4d4d4d' }} ><Sharefunctionality b1={share_email} brand={share_link} style={{ fontSize: '12px' }} /></Link>
                                                    </Typography>

                                                    <Typography variant="caption" component="p" style={{ fontSize: '12px', color: '#808080' }}>
                                                        <WorkIcon style={{ fontSize: '11px', marginTop: '-2px' }} />
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
                                                                    <Link underlineNone class="link_hover" style={{ color: '#0077b3', textDecoration: 'none' }}>
                                                                        ...
                                            </Link>
                                                                </HtmlTooltip>
                                                            )
                                                            :
                                                            (
                                                                ""
                                                            )
                                                        }
                                                        <br />
                                                        <LocationOnOutlinedIcon style={{ fontSize: '12px' }} /> {itemz.country}

                                                    </Typography>

                                                </div>
                                            </div>


                                            <div class="cardd_padding">

                                                <Typography variant="body2" color="textPrimary" style={{ fontSize: '13px' }}>
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

                                                                        {itemz.partnerType != undefined && itemz.partnerType.map((expertise) => {
                                                                            return (
                                                                                <span>{expertise.name},&nbsp;</span>
                                                                            )
                                                                        })
                                                                        }

                                                                    </React.Fragment>
                                                                }
                                                            >
                                                                <Link underlineNone style={{ color: '#0077b3', textDecoration: 'none' }}>
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



                                                <Typography variant="caption" component="p" style={{ fontSize: '12px', color: '#595959' }}>
                                                    Fees {itemz.Fees} &nbsp;

                            </Typography>


                                                <br />
                                                <Link underlineNone class="link_hover" style={{ color: '#4d4d4d' }} to={`/provider/profile?id=${itemz.partnerId}`}>
                                                    View Profile
                            </Link>
                            &nbsp;&nbsp;


                            <Link underlineNone class="link_hover" style={{ color: '#4d4d4d', textDecoration: 'none' }}>
                                                    <span style={{ display: 'none' }}>{modal_data_1 = itemz.email}</span>
                                                    <span style={{ display: 'none' }}>{modal_data_2 = itemz.mobileNumber}</span>
                                                    <span style={{ display: 'none' }}>{modal_data_3 = itemz.country}</span>

                                                    <Contact_modal m1={modal_data_1} m2={modal_data_2} m3={modal_data_3} />
                                                </Link>





                                                {itemz.partnerType.length > 1 ?
                                                    (
                                                        <ThumbUpAltOutlinedIcon style={{ float: 'right', fontSize: '14px', color: '#666666', cursor: 'pointer' }} />
                                                    )
                                                    :
                                                    (
                                                        <ThumbUpIcon style={{ float: 'right', fontSize: '14px', color: '#0077b3', cursor: 'pointer' }} />
                                                    )
                                                }

                                            </div>



                                        </div>




                                    )
                                }) : <span>We do not have enough data right now. Please check back later.</span>
                            }
                        </div>
                    </Grid>
                </div>



                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    onClose={(e, r) => this.handleClose(e, r)}
                    message={this.state.errorMessage}
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={(e, r) => this.handleClose(e, r)}>
                                Hide
                        </Button>
                        </React.Fragment>
                    }
                />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Home);