exports.arrayDel = function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) return i;
    }
    return -1;

};
exports.timeNow = function(){
    var date = new Date();
    return new Date(date.getFullYear(),date.getMonth()+1,date.getDate());
};
exports.day = function(day){
    return new Date().getTime()+day*24*60*60*1000;
};
exports.decrement = function(date,days){
    //days ����
    return this.day(new Date(new Date(date).getTime()-days*24*60*1000));
};
