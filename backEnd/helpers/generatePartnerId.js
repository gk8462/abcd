/**
 * @fileoverview Get the name initials.
 */

getNameInitial = (name) => {
    let nameArray = name.split(/\s+/);
    let firstLast;
    if (nameArray.length >1){
        var first = nameArray[0][0];
        var last = nameArray[nameArray.length-1][0];
        firstLast = first+last;

    }
    else{
        var first = nameArray[0][0];
        var last = nameArray[0][1];
        firstLast = first+last;
    }
        
    
    return firstLast.toUpperCase();
}

exports.getPartnerId = (name,mobileNo) =>{
   let nameInitial = getNameInitial(name);
   return nameInitial+mobileNo;



}
