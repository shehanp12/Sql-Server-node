const model = require('../model/AdsModel')

exports.addAds = (
    req
) => {

    const {imagePath,
        titleTxt,
        subTxt ,
        dist,
        reviews,
        rating,
        perMounth } = req.body;


    model.setAd(imagePath,
        titleTxt,
        subTxt ,
        dist,
        reviews,
        rating,
        perMounth)
        .then(()=>{
            return 'success'
        })
        .catch((err)=>{
            return err
        })
}