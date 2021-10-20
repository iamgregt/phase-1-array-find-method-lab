

function superbowlWin(array) {
     let matchedItem = array.find(function (obj){
        return obj.result === "W";
     })
    if (matchedItem){
        return matchedItem.year
    } else{
        return matchedItem;
    }
};
