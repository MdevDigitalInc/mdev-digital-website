<template>
  <form id="form" v-on:keyup.enter.stop="submitForm">
    <input name="_caught" type="text" class="mdev-honeypot" v-model="honeypot">
    <div v-in-viewport
      class="flex flex-hor-between flex-vert-center mdev-input-split a-flyin a-flyin-right">
      <!-- First Name -->
      <div class="mdev-input-group">
        <div class="mdev-input-name">
          {{ $t("contact.fields.name.label") }}*
        </div>
        <input
          data-required
          :class="{ '--filled' : name }"
          v-model="name"
          name="Name"
          tab-index="0"
          aria-required="true"
          :aria-label="$t('contact.fields.name.label')"
          type="text"
          :placeholder="$t('contact.fields.name.placeholder')">
      </div>
      <!-- Last Name -->
      <div class="mdev-input-group">
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
        v-on:keyup.enter.stop="nothing"
        name="Message"
        tab-index="0"
        aria-required="true"
        v-on:keyup.shift.enter.stop
        :aria-label="$t('contact.fields.message.label')"
        type="text"
        :placeholder="$t('contact.fields.message.placeholder')">
        </textarea>
    </div>
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
import axios from 'axios';

export default{
  name: 'BaseForm',

  data: function(){
    return {
      // Data used here as a flag to mark fields as
      // filled witn the .--filled class
      // Allows for better UI control
      name       : '',
      company     : '',
      phone       : '',
      email       : '',
      message     : '',
      honeypot    : '',
      loading     : false
    };
  },

  methods: {
    // Validate and Submit form
    nothing(){
      return;
    },

    submitForm() {
      // Clear Errors First
      this.$validate.clearErrors();
      // Collect Fields
      let formFields = document.querySelectorAll('[data-required]');
      let emailField = document.querySelectorAll('input[type="email"]');
      let phoneField = document.querySelectorAll('input[type="tel"]');
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
        axios.post('https://api.formbucket.com/f/buk_4MuLPaj4f0PlLFxvxjFhlk9E', {
          name: this.name,
          company: this.company,
          phone: this.phone,
          email: this.email,
          message: this.message
        })
        .then(function (response) {
          callback();
        })
        .catch(function (error) {
          alertify.error(this.$t("validation.errors.fail"));
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
/* BASE FORM Component Styles
/--------------------------------------*/

.mdev-input-group {
  width: 100%;
  position: relative;
  margin-bottom: 40px;

  @media #{$phone-only} {
    margin-bottom: 25px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .mdev-input-name {
    font-weight: 700;
    font-size: 1.55vw;
    text-transform: uppercase;
    letter-spacing: .5px;

    @media #{$portrait} {
      font-size: 4.3vw;
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

    @media #{$phone-only} {
      font-size: 3.7vw;
    }
  }

  textarea,
  textarea::placeholder {
    text-transform: none;
  }
}

textarea {
  transition: all .6s;
  height: auto;

  &:hover,
  &:focus,
  &:active,
  &.--filled {
    @media #{$laptop-only} {
      min-height: 3vh;
    }

    @media #{$desktop-only} {
      min-height: 16vh;
    }

    @media #{$portrait} {
      min-height: 5vh;
    }
  }
}

.mdev-input-split {
  @media #{$phone-only} {
    flex-wrap: wrap;
  }

  .mdev-input-group {
    width: 48%;

    @media #{$phone-only} {
      width: 100%;
    }

    &:last-child {
      margin-bottom: 40px;

      @media #{$portrait} {
        margin-bottom: 40px;
      }

      @media #{$phone-only} {
        margin-bottom: 25px;
      }
    }
  }
}

.mdev-honeypot {
  display: none;
}

/*--------------------------------------*/
</style>
