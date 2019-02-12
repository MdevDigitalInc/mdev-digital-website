// [ Moreira Development ] Project Entry --------------------------
// Author: Lucas Moreira - l.moreira@live.ca

// [ Vue.js ] -------------------------------------------
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import App from './App.vue';

// Import Routes & Central Stores
import { routes  } from './routes.js';
import store from './store/store.js';

// In Viewport Custom Directive
// Adds classes to elements given the v-in-viewport directive
// can be used to target animations.
// To see an example, check buttons.css and the btn-primary.vue element
import inViewportDirective from 'vue-in-viewport-directive';
Vue.directive('in-viewport', inViewportDirective);

// Check View Directive
import checkView from 'vue-check-view';
Vue.use(checkView);
// Import Auth Plugin
// import Auth from './plugins/auth.js';
import Validate from './plugins/validate.js';
Vue.use(Validate);
// [ i18n - Internationalization ] ----------------------

// Configure I18n Internationalization Locales
import en from './locales/en.js';
//import pt from './locales/pt.js';
const locales = {
  en
};

// Initialize vue-resource | vue-router | vue-i18n
Vue.use(VueI18n);
Vue.use(VueResource);
// Vue Head Configuration
// TODO - Edit Title Separator
// SEE - https://github.com/ktquez/vue-head
Vue.use(VueHead, {
  separator: ' | '
})
// Vue Router
Vue.use(VueRouter);
//Vue.use(Auth);

// Set Language Default [ ENGLISH ]
Vue.config.lang = 'en';

// Create Global Method for accepting language change
Vue.prototype.$locale = {
  change (lang) {
    Vue.config.lang = lang;
  },
  current () {
    return Vue.config.lang;
  }
};

// Set Key:value pairs for translation keys
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang]);
});
//-----------------------------------------------[ i18n ]

// [ Vue Resource ] ------------------------------------
// Set Global Root path
//Vue.http.options.root = 'https://vuejs-http-resource.firebaseio.com/';

// Set Global Intercept
//Vue.http.interceptors.push( (request, next) => {
//  console.log(request);
//  // To use when defining a single API that is not firebase
//  //if (request.url[0] === '/'){
//  //  request.url = "https:apiurl:3030" + request.url;
//  //}
//  next( function(response){
//    if (response.status == 404){
//      alertify.error('Sorry, Our systems are not responding right now.');
//    }
//  });
//});

//--------------------------------------[ vue-resource ]


// [ Vue-Router ] ------------------------------------
// --------------------------------
// Server must be set to AWLAYWAS return
// [index.html] file for history mode to work.
//
// History mode in vue-router permits forgoing
// the ugly "#" hash syntax on Url's.
//
const router = new VueRouter ({
  routes: routes,
  mode: 'history',

  //Control Scrolling Behavior
  scrollBehavior( to, from, savedPosition ){
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    else if (savedPosition) {
      return savedPosition;
    }
    else {
      return { x: 0, y: 0 }
    }
  }
});
//--------------------------------------[ vue-router ]

// Route Guard - Executes before each route change
// In this case being used to dynamically change BKG color

// Add regex for routes where you want white BKG
let whiteBkgPaths = [
  "contact",
  "bios",
  "services"
]

router.beforeEach(function( to, from, next){
  let bodyWhite = "--body-white";
  var regEx = new RegExp(whiteBkgPaths.join("|"), "i");

  if ( regEx.test(to.path) ) {
    // Ternary operator adds class when body doesn't already have it
    // prevents multiple classes being added to body
    !$('body').hasClass(bodyWhite) ? $('body').addClass(bodyWhite) : '';
  }
  else {
    $('body').hasClass(bodyWhite) ? $('body').removeClass(bodyWhite) : '';
  }
  next();
});

// [ Global Mixins ] --------------------------------
Vue.mixin({
  methods: {
    loadImage(path){
      return require('./assets/images/' + path);
    },
    // Change Language METHOD
    change () {
      let current = this.$locale.current();
      if (current === 'en') {
        this.$locale.change('pt');
      } else {
        this.$locale.change('en');
      }
    },
    changeNavBrand(e, brandClass){
      if ( e.target.rect.y <= 0 ) {
        $('[data-main-nav]').removeClass('--teal-black');
        $('[data-main-nav]').removeClass('--white-black');
        $('[data-main-nav]').removeClass('--teal-white');
        $('[data-main-nav]').addClass(brandClass);
      }
    }
  }
})

// [ Main Vue Instance ] ----------------------------
const _vue = new Vue({
  el: '#app',
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBp0nBhc3N3b3Jk'
    }
  },
  router,
  store,
  render: h => h(App)
});


window._vuePrerender = _vue;
