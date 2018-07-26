<template>
  <form action="https://formspree.io/mlnakram" method="POST">
    <input type="text" name="_gotcha" style="display: none">
    <div class="flex flex-hor-between flex-vert-center mdev-input-split">
      <!-- First Name -->
      <div class="mdev-input-group">
        <div class="mdev-input-name">
          {{ $t("contact.fields.fname.label") }}*
        </div>
        <input
          data-required
          :class="{ '--filled' : fname }"
          v-model="fname"
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
          tab-index="0"
          aria-required="true"
          :aria-label="$t('contact.fields.lname.label')"
          type="text"
          :placeholder="$t('contact.fields.lname.placeholder')">
      </div>
    </div>
    <!-- Company Name -->
    <div class="mdev-input-group">
      <div class="mdev-input-name">
        {{ $t("contact.fields.company.label") }}*
      </div>
      <input
        data-required
        :class="{ '--filled' : company }"
        v-model="company"
        tab-index="0"
        aria-required="true"
        :aria-label="$t('contact.fields.company.label')"
        type="text"
        :placeholder="$t('contact.fields.company.placeholder')">
    </div>
    <!-- Phone Number -->
    <div class="mdev-input-group">
      <div class="mdev-input-name">
        {{ $t("contact.fields.phone.label") }}*
      </div>
      <input
        data-required
        :class="{ '--filled' : phone }"
        v-model="phone"
        v-on:keydown.tab="validatePhone"
        tab-index="0"
        aria-required="true"
        :aria-label="$t('contact.fields.phone.label')"
        type="tel"
        :placeholder="$t('contact.fields.phone.placeholder')">
    </div>
    <!-- Email -->
    <div class="mdev-input-group">
      <div class="mdev-input-name">
        {{ $t("contact.fields.email.label") }}*
      </div>
      <input
        data-required
        :class="{ '--filled' : email }"
        v-model="email"
        tab-index="0"
        v-on:keydown.tab="validateEmail"
        aria-required="true"
        :aria-label="$t('contact.fields.email.label')"
        type="email"
        :placeholder="$t('contact.fields.email.placeholder')">
    </div>
    <!-- Message -->
    <div class="mdev-input-group">
      <div class="mdev-input-name">
        {{ $t("contact.fields.message.label") }}*
      </div>
      <textarea
        data-required
        :class="{ '--filled' : message }"
        v-model="message"
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
    <button
      type="button"
      v-on:click.prevent="submitForm"
      class="mdev-btn mdev-form-btn"
      :aria-label="$t('contact.fields.submit.accessibility')">
        {{ $t('contact.fields.submit.label') }}
    </button>
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
      fname   : '',
      lname   :'',
      company : '',
      phone   : '',
      email   : '',
      message : ''
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

      let fieldsValid = this.$validate.validateFields(formFields, this.$t("validation.errors.form"));
      let emailValid  = this.$validate.validateEmail(emailField, this.$t("validation.errors.email"));
      let phoneValid  = this.$validate.validatePhone(phoneField, this.$t("validation.errors.phone"));

      // Check All Fields
      if ( fieldsValid && emailValid && phoneValid ) {
        alertify.warning('Form Submitted to the void...');
      }
      else {
        alertify.warning('Form not submitted try again..');
      }
    },
    validateEmail(event) {
      this.$validate.clearErrors();
      let error = this.$t("validation.errors.email");
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(event.target.value)){
        alertify.warning(error);
        event.target.classList.add('mdev-error');
      }
    },
    validatePhone(event) {
     this.$validate.clearErrors();
      let error = this.$t("validation.errors.phone");
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

  .mdev-input-name {
    font-weight: 700;
    font-size: 1.3vw;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  input,
  input::placeholder,
  textarea,
  textarea::placeholder {
    font-size: 1.05vw;
    text-transform: capitalize;
    font-weight: 300;
    letter-spacing: 1px;
  }
}

.mdev-input-split {
  .mdev-input-group {
    width: 48%;
  }
}
/*--------------------------------------*/

</style>
