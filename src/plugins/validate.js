var ValidatePlugin = {
  // [ Moreira Development ]
  // Author: Lucas Moreira
  // email: lucas@moreiradevelopment.io
  // ------------------------------------|
  // Validation Helper Plugin
  // ------------------------------------|
  //
  // This plugin abstracts some of the
  // common Auth functions into a single place
  // for ease of use and maintenance.

  validateFields: function(payload, error){
    // Initiate Loop Var
    var i;
    // Error Flag
    var errorPresent = false;

    // Check for Empty Fields
    for (i = 0; i < payload.length; i++){
      if (payload[i].value === ""){
        errorPresent = true;
        this.addClass(payload[i], 'mdev-error');
      }
    }

    // Return Errors
    if (errorPresent === true) {
      alertify.warning(error);
      return false;
    }
    else {
      return true;
    }
  },

  validatePhone: function(payload, error) {
    // Initiate Loop Var
    var i;
    // Initialize Flag
    var errorPresent = false;

    // Email Regex
    for (i = 0; i < payload.length; i++){
      if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(payload[0].value)){
        errorPresent = false;
      }
      else {
        this.addClass(payload[i], 'mdev-error');
        errorPresent = true;
      }
    }

    // Return Errors
    if (errorPresent === true) {
      alertify.warning(error);
      return false;
    }
    else {
      return true;
    }
  },


  validateEmail: function(payload, error) {
    // Initiate Loop Var
    var i;
    // Initialize Flag
    var errorPresent = false;

    // Email Regex
    for (i = 0; i < payload.length; i++){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(payload[0].value)){
        errorPresent = false;
      }
      else {
        this.addClass(payload[i], 'mdev-error');
        errorPresent = true;
      }
    }

    // Return Errors
    if (errorPresent === true) {
      alertify.warning(error);
      return false;
    }
    else {
      return true;
    }
  },

  validatePassword: function(payload, error){
    // Validate Password Length
    if (payload.length < 6){
      alertify.warning(error);
      return false;
    }
    else {
      return true;
    }

  },

  validateDate: function(payload, error){
    var regDate = /^\d{2}\/\d{2}\/\d{4}$/;
    // Validate Password Length
    if (regDate.test(payload)){
      return true;
    }
    else {
      alertify.warning(error);
      return false;
    }

  },

  validateMatch: function (set, match, error){
    // Match Variables
    if( set === match ) {
      return true;
    }
    else {
      alertify.warning(error);
      return false;
    }

  },

  removeClass: function (element, className) {
    if (element.classList) {
      element.classList.remove(className);
    }
    else {
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },

  addClass: function (element, className) {
    if (element.classList) {
      element.classList.add(className);
    }
    else {
      element.className += ' ' + className;
    }
  },

  clearErrors: function(){
    var errorEl = document.querySelectorAll('.mdev-error');
    // If errors present
    if (errorEl.length > 0) {
      for (var i=0; i <= errorEl.length; i++) {
        this.removeClass(errorEl[i], 'mdev-error');
      }
    }
  }
};

export default function(Vue){
  Vue.validate = ValidatePlugin;

  Object.defineProperties(Vue.prototype, {

    $validate: {
      get: function() {
        return Vue.validate;
      }
    }
  });
};
