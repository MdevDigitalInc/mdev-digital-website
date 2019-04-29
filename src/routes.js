// Import Parent Compontents
const About = r => require.ensure([], () => r(require('./components/about/about.vue')), 'about');
const Contact = r => require.ensure([], () => r(require('./components/contact/contact.vue')), 'contact');
const ErrorPage = r => require.ensure([], () => r(require('./components/parent-templates/error_404.vue')), 'errorpage');
const Home = r => require.ensure([], () => r(require('./components/home/home.vue')), 'home');
// Case Studies
//const CaseStudies = r => require.ensure([], () => r(require('./components/casestudies/casestudies.vue')), 'casestudies');
//const CaseStudiesOverview  from './components/casestudies/casestudies--all.vue';
//const ZucoraRsp            from './components/casestudies/zucora--rsp.vue';
//const ZucoraTwop           from './components/casestudies/zucora--twop.vue';
// Services
const Services = r => require.ensure([], () => r(require('./components/services/services.vue')), 'services');
const ServicesAppDev = r => require.ensure([], () => r(require('./components/services/service--appdev.vue')), 'services-app');
const ServicesBranding = r => require.ensure([], () => r(require('./components/services/service--branding.vue')), 'services-brand');
const ServicesConsulting = r => require.ensure([], () => r(require('./components/services/service--consulting.vue')), 'services-consult');
const ServicesDigiAds = r => require.ensure([], () => r(require('./components/services/service--digiads.vue')), 'services-digi');
const ServicesOverview = r => require.ensure([], () => r(require('./components/services/service--all.vue')), 'services-all');
const ServicesUx = r => require.ensure([], () => r(require('./components/services/service--ux.vue')), 'services-ux');
// Bios
const Bios = r => require.ensure([], () => r(require('./components/bios/bios.vue')), 'bios');
// Coming Soon
const ComingSoon = r => require.ensure([], () => r(require('./components/comingsoon/comingsoon.vue')), 'comingsoon');
// Import Data From Flat File
import MdevData             from './mdev-data.js';

// Export routes as named constant array.
// Routes consist of desired path + bound parent component
export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '*', //404
    component: ErrorPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/comingsoon',
    component: ComingSoon
  },
  {
    path: '/contact',
    component: Contact
  },
  // Bios Nested Routes
  {
    path: '/team',
    component: Bios,
    redirect: '/team/lucas-moreira'
  },
  {
    path: '/team/:teammember',
    component: Bios,
    props: true,
    beforeEnter: (to, from, next) => {
      // If route slug matches employees proceed..
      // Employee list pulled from mdev-data.js
      if ( MdevData.employeeRoutes.includes(to.params.teammember) ) {
        next();
      }
      // Otherwise redirect to approved route
      else {
        next({ path: '/team/' + MdevData.employeeRoutes[0] });
      }
    }
  },  // Case Study Master Routes
//  {
//    path: '/casestudy',
//    component: CaseStudies,
//    redirect: '/casestudy/overview',
//    // Load case studies as child views
//    children: [
//      {
//        path: 'overview',
//        component: CaseStudiesOverview,
//      },
//      {
//        path: 'zucora-twop',
//        component: ZucoraTwop
//      },
//      {
//        path: 'zucora-rsp',
//        component: ZucoraRsp
//      }
//    ]
//  },
  // Services Master Routes
  {
    path: '/services',
    component: Services,
    redirect: '/services/overview',
    // Load case studies as child views
    children: [
      {
        path: 'overview',
        component: ServicesOverview,
      },
      {
        path: 'branding',
        component: ServicesBranding,
      },
      {
        path: 'app-development',
        component: ServicesAppDev
      },
      {
        path: 'consulting',
        component: ServicesConsulting
      },
      {
        path: 'digital-marketing',
        component: ServicesDigiAds
      },
      {
        path: 'custom-web-development',
        component: ServicesUx
      }
    ]
  }
];
