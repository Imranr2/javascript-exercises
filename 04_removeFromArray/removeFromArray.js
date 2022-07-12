const removeFromArray = function(arr, ...toRemove) {
    for (let i = 0; i < toRemove.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === toRemove[i]) {
                arr.splice(j,1)
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
