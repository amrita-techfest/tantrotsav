


var validateEmail = (email) => {
    var regEx = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return regEx.test(email)
}

var validatePhone = (pass) => {
    var regEx = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
    return regEx.test(pass)
}

export var validator = (params) => {
    var flags = {}
    if (params.name?.trim() == "" || ! params.name){
        flags.name = "empty name"
    }
    if (params.email?.trim() == "" || ! params.email){
        flags.email = "empty email"
    }
    else{
        if(!validateEmail(params.email)){
            flags.email = "invalid email"
        }
    }
    if (params.phone?.trim() == "" || ! params.phone){
        flags.phone = "empty phone no"
    }
    else{
        if(!validatePhone(params.phone)){
            flags.phone = "invalid phone"
        }
    }
    if (params.city?.trim() == "" || ! params.city){
        flags.city= "empty city"
    }
    if (! params.gender){
        flags.gender = "Select valid gender"
    }
    if (! params.events){
        flags.events = "Select valid event"
    }
    if (params.collegeName?.trim() == "" || ! params.collegeName){
        flags.collegeName = "empty collegeName"
    }

    return flags
}