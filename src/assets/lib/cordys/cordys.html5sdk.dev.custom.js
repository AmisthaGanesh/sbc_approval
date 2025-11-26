
$.cordys.addOrganizationContextToURL = function(url) {
    return url+"?organization=o=Training_NB,cn=cordys,cn=defaultInst,o=nichebit.com";
}


if(!$.cordys.authentication.sso.isAuthenticated()){
    //$.cordys.authentication.sso.authenticate("FASTO_ADMIN","FASTO_ADMIN");
    // $.cordys.authentication.sso.authenticate("cbrec1","cbrec1");
    // $.cordys.authentication.sso.authenticate("500002","500002");
    $.cordys.authentication.sso.authenticate("Ganesh","Ganesh");
    //  $.cordys.authentication.sso.authenticate("upender","upender");

}  
