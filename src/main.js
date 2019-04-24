// [ Moreira Development ] Project Entry --------------------------
// Author: Lucas Moreira - l.moreira@live.ca

// [ Vue.js ] -------------------------------------------
import '@babel/polyfill'
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Meta from 'vue-meta'
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

// Vue Router
Vue.use(VueRouter);
// Meta Info
Vue.use(Meta)
//Vue.use(Auth);

// Set Language Default [ ENGLISH ]
Vue.config.lang = 'en';

// Create Global Method for accepting language change
Vue.prototype.$locale = {
  change(lang) {
    Vue.config.lang = lang;
  },
  current() {
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

// [ Global Mixins ] --------------------------------
Vue.mixin({
  methods: {
    // Load images with require
    loadImage(path){
      return require('./assets/images/' + path);
    },
    // Change Application Language
    change() {
      let current = this.$locale.current();
      if (current === 'en') {
        this.$locale.change('pt');
      } else {
        this.$locale.change('en');
      }
    },
    // Change Navigation Logo Colors
    changeNavBrand(e, brandClass) {
      // Grab Element
      var mainNav = document.querySelectorAll('[data-main-nav]')[0];
      if ( e.target.rect.y <= 0 ) {
        this.removeClass(mainNav, '--teal-black');
        this.removeClass(mainNav, '--white-black');
        this.removeClass(mainNav, '--teal-white');
        this.addClass(mainNav, brandClass);
      }
    },
    // Scroll to specific anchor link
    scrollToHash(hashRef, offset) {
      var element = document.querySelectorAll(hashRef);
      var top = element.offset().top;
      window.scrollTo(0, (top - offset));
    },
    // Checks Visibility of Element (vue-check-view npm)
    // Takes in event, amount of overlap and Array Length
    checkVisibility(event, overlap) {
      if (event.percentInView >= overlap) {
        if (event.type == 'exit') {
          return false;
        }
        else {
          return true;
        }
      }
      else {
        return false;
      }
    },
    // Add Class JQUERY replacement
    addClass(element, className) {
      if (element.classList) {
        element.classList.add(className);
      }
      else {
        element.className += ' ' + className;
      }
    },
    // Remove Class
    removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      }
      else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    },
    // Check for class
    hasClass(element, className) {
      if (element.classList) {
        element.classList.contains(className);
      }
      else {
        new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
      }
    },
    // Toggle Class
    toggleClass(element, className) {
      if (element.classList) {
        element.classList.toggle(className);
      }
      else {
        var classes = element.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
          classes.splice(existingIndex, 1);
        }
        else {
          classes.push(className);
        }
        element.className = classes.join(' ');
      }
    },
    // Reset Body Class
    bodyReset(className) {
      var mainBody = document.querySelectorAll('body')[0];
      this.removeClass(mainBody, className);
    },
    // Add Body Class
    bodyClass(className) {
      // Change body class
      var mainBody = document.querySelectorAll('body')[0];
      this.addClass(mainBody, className);
    },
    // Async Load Scipts
    asyncScript( src, asyncLoad, deferLoad) {
      var s = document.createElement( 'script' );
      s.setAttribute( 'src', src );
      if ( asyncLoad ) {
        s.setAttribute( 'async', true );
      }
      if ( deferLoad ) {
        s.setAttribute( 'defer', true );
      }
      document.head.appendChild( s );
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
