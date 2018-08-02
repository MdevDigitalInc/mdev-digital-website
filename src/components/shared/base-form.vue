<template>
  <form id="form" v-on:keyup.enter="submitForm">
    <input name="_caught" type="text" class="mdev-honeypot" v-model="honeypot">
    <div v-in-viewport
      class="flex flex-hor-between flex-vert-center mdev-input-split a-flyin a-flyin-right">
      <!-- First Name -->
      <div class="mdev-input-group">
        <div class="mdev-input-name">
          {{ $t("contact.fields.fname.label") }}*
        </div>
        <input
          data-required
          :class="{ '--filled' : fname }"
          v-model="fname"
          name="FirstName"
          tab-index="0"
          aria-required="true"
          :aria-label="$t('contact.fields.fname.label')"
          type="text"
          :placeholder="$t('contact.fields.fname.placeholder')">
      </div>
      <!-- Last Name -->
      <div class="mdev-input-group">
        <div class="mdev-input-name">
          {{ $t("contact.fields.lname.label") }}*
        </div>
        <input
          data-required
          :class="{ '--filled' : lname }"
          v-model="lname"
          name="LastName"
          tab-index="0"
          aria-required="true"
          :aria-label="$t('contact.fields.lname.label')"
          type="text"
          :placeholder="$t('contact.fields.lname.placeholder')">
      </div>
    </div>
    <!-- Company Name -->
    <div class="mdev-input-group a-flyin a-flyin-right" v-in-viewport>
      <div class="mdev-input-name">
        {{ $t("contact.fields.company.label") }}*
      </div>
      <input
        data-required
        :class="{ '--filled' : company }"
        v-model="company"
        name="Company"
        tab-index="0"
        aria-required="true"
        :aria-label="$t('contact.fields.company.label')"
        type="text"
        :placeholder="$t('contact.fields.company.placeholder')">
    </div>
    <!-- Phone Number -->
    <div class="mdev-input-group a-flyin a-flyin-right" v-in-viewport>
      <div class="mdev-input-name">
        {{ $t("contact.fields.phone.label") }}*
      </div>
      <input
        data-required
        :class="{ '--filled' : phone }"
        v-model="phone"
        name="Phone"
        v-on:blur="validatePhone"
        tab-index="0"
        aria-required="true"
        :aria-label="$t('contact.fields.phone.label')"
        type="tel"
        :placeholder="$t('contact.fields.phone.placeholder')">
    </div>
    <!-- Email -->
    <div class="mdev-input-group a-flyin a-flyin-right" v-in-viewport>
      <div class="mdev-input-name">
        {{ $t("contact.fields.email.label") }}*
      </div>
      <input
        data-required
        :class="{ '--filled' : email }"
        v-model="email"
        name="Email"
        tab-index="0"
        v-on:blur="validateEmail"
        aria-required="true"
        :aria-label="$t('contact.fields.email.label')"
        type="email"
        :placeholder="$t('contact.fields.email.placeholder')">
    </div>
    <!-- Message -->
    <div class="mdev-input-group a-flyin a-flyin-right" v-in-viewport>
      <div class="mdev-input-name">
        {{ $t("contact.fields.message.label") }}*
      </div>
      <textarea
        data-required
        :class="{ '--filled' : message }"
        v-model="message"
        name="Message"
        tab-index="0"
        aria-required="true"
        :aria-label="$t('contact.fields.message.label')"
        type="text"
        :placeholder="$t('contact.fields.message.placeholder')">
        </textarea>
    </div>
    <!--
    Dont forget to prevent default and validate...
      your other form fields go here use form.submit();
    -->
    <div class="mdev-input-group a-flyin a-flyin-right" v-in-viewport>
      <button
        type="submit"
        v-on:click.prevent="submitForm"
        class="mdev-btn mdev-form-btn"
        v-in-viewport
        :aria-label="$t('contact.fields.submit.accessibility')">
          <span>
            {{ $t('contact.fields.submit.label') }}
          </span>
          <span v-if="loading">
            <i class="fas fa-circle-notch fa-spin"></i>
          </span>
      </button>
    </div>
  </form>
</template>

<script>
export default{
  name: 'BaseForm',

  data: function(){
    return {
      // Data used here as a flag to mark fields as
      // filled witn the .--filled class
      // Allows for better UI control
      fname       : '',
      lname       : '',
      company     : '',
      phone       : '',
      email       : '',
      message     : '',
      honeypot    : '',
      loading     : false
    };
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    },
    // Validate and Submit form
    submitForm() {
      // Clear Errors First
      this.$validate.clearErrors();
      // Collect Fields
      let formFields = $('[data-required]');
      let emailField = $('input[type="email"]');
      let phoneField = $('input[type="tel"]');
      // Validate fields and store result
      let fieldsValid = this.$validate.validateFields(formFields, this.$t("validation.errors.form"));
      let emailValid  = this.$validate.validateEmail(emailField, this.$t("validation.errors.email"));
      let phoneValid  = this.$validate.validatePhone(phoneField, this.$t("validation.errors.phone"));
      let spam        = this.honeypot.length > 0 ? true : false;

      // Success Callback
      let callback = this.formSubmitted;

      // Checks: Fields are filled, Email is Valid, Phone is Valid, No Spam.
      if ( fieldsValid && emailValid && phoneValid && !spam) {
        // Flip flag for UX animations
        this.loading = true;
        // Collect fields and serialize them
        let data = $('#form').serialize();
        // Ajax call to POST
        jQuery.ajax ({
          type: "POST",
          url: "https://api.formbucket.com/f/buk_4MuLPaj4f0PlLFxvxjFhlk9E",
          data: data,
          success: callback,
          error: function() {
            alertify.error(this.$t("validation.errors.fail"));
          }
        });
      }
      // Else, likely SPAM
      else {
        console.log(this.$t("validation.errors.spam"));
      }
    },
    // Emit Submitted event upon Ajax success
    formSubmitted() {
      this.$emit('submitted');
    },
    // Validate Emails
    validateEmail(event) {
      // Clear errors
      this.$validate.clearErrors();
      // Load error message..
      let error = this.$t("validation.errors.email");
      // Email Regex with up to 7 trailing chars for .digital TLD
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(event.target.value)){
        alertify.warning(error);
        event.target.classList.add('mdev-error');
      }
    },
    // Validate NA phone number
    validatePhone(event) {
      // Clear errors
      this.$validate.clearErrors();
      // Load error message..
      let error = this.$t("validation.errors.phone");
      // North America Phone Regex
      if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)){
        alertify.warning(error);
        event.target.classList.add('mdev-error');
      }
    }
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* 404 Component Styles
/--------------------------------------*/
.mdev-input-group {
  width: 100%;
  position: relative;
  margin-bottom: 40px;

  @media #{$phone-only} {
    margin-bottom: 25px;
  }

  .mdev-input-name {
    font-weight: 700;
    font-size: 1.8vw;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media #{$portrait} {
      font-size: 3.3vw;
    }
  }

  input,
  input::placeholder,
  textarea,
  textarea::placeholder {
    font-size: 1.05vw;
    text-transform: capitalize;
    font-weight: 300;
    letter-spacing: 1px;

    @media #{$portrait} {
      font-size: 2.7vw;
    }
  }
}

.mdev-input-split {
  .mdev-input-group {
    width: 48%;
  }
}

.mdev-honeypot {
  display: none;
}
/*--------------------------------------*/

</style>
