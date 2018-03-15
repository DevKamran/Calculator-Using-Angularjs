/*------------------[Number fields]--------------------------------*/

/*==================== Just Number ====================*/
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //Checking Alphabet
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
}
/*==================== /End Just Number ====================*/

/*==================== Number with dot(.) ====================*/
function isNumberDot(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //Checking Dash
    if(charCode == 46){return true}
    //Checking Alphabet
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
}
/*================= /End Number with dot(.) ==================*/

/*==================== Number with Comma(,) ====================*/
function isNumberComma(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //Checking Dash
    if(charCode == 44){return true}
    //Checking Alphabet
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
}
/*================= /End Number with comma(,) ==================*/

/*==================== Number with Dashes(-) ====================*/
function isNumberWD(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //Checking Dash
    if(charCode == 45){return true}
    //Checking Alphabet
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
}
/*================= /End Number with Dashes(-) ==================*/


/*==================== Number with Back Backslash(/) ====================*/
function isNumberBC(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //Checking Dash
    if(charCode == 47){return true}
    //Checking Alphabet
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
}
/*==================== /End Number with Back Backslash(/) ====================*/



/*==================== All characters without space ( ) ====================*/
function spaceNorAllow(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //Checking Alphabet
    if (charCode == 32) {return false;}
    return true;
}
/*==================== /End All characters without space ( ) ====================*/




/*================ Number with 2 decimal =============*/
function validateFloatKeyPress(el, evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split('.');
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot
    if(number.length>1 && charCode == 46){
         return false;
    }
    //get the carat position
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(".");
    if( caratPos > dotPos && dotPos>-1 && (number[1].length > 1)){
        return false;
    }
    return true;
}
function getSelectionStart(o) {
    if (o.createTextRange) {
        var r = document.selection.createRange().duplicate()
        r.moveEnd('character', o.value.length)
        if (r.text == '') return o.value.length
        return o.value.lastIndexOf(r.text)
    } else return o.selectionStart
}
/*================ /End Number with 2 decimal =============*/
/*------------------[Number fields]--------------------------------*/



//===== 2 decimal values in input ====//
function show2Decimal(el){
    el.value=parseFloat(el.value).toFixed(2);
}
