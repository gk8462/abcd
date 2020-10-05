/**
 * @description Controller for search and finding providers.
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel');

exports.serachByName = (req, res) => {
    if(req.body.name && req.body.country) {
        let query = {};
        query = {
            $or:[
                {OrganizationName: {$regex: req.body.name, $options: 'i'}},
                {country: {$regex: req.body.country, $options:'i'}}
            ]
        };
        providerModel.find(query, { OrganizationRegNumber: 0, idType: 0, providerIdentityImg: 0, approved: 0}, (err, docs)=> {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(docs);
            }
        })
    }else if(req.body.name) {
        providerModel.find({OrganizationName: {$regex : req.body.name, $options: '1'}},(error, docs)=> {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(docs);
            }
        })
    }else if(req.body.location) {
        providerModel.find({country: {$regex : req.body.location, $options: '1'}},(error, docs)=> {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(docs);
            }
        })
    } else {
        res.status(200).json([]);
    }
    
}