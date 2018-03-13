// Import Parent Compontents
import Home from './components/parent-templates/home.vue';
import About from './components/parent-templates/about.vue';
import Contact from './components/parent-templates/contact.vue';
import ErrorPage from './components/parent-templates/error_404.vue';
//import AuthComponent from './components/auth/Authentication.vue';
//import LoginComponent from './components/auth/Login.vue';
//import RegisterComponent from './components/auth/Register.vue';
//import ResetComponent from './components/auth/Reset.vue';

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
    path: '/contact',
    component: Contact
  }
//  {
//    path:'/auth',
//    component: AuthComponent,
//    redirect: '/auth/login',
//    children: [
//      {
//        path: "login",
//        component: LoginComponent
//      },
//      {
//        path: "register",
//        component: RegisterComponent
//      },
//      {
//        path: "reset",
//        component: ResetComponent
//      }
//    ]
//  },

];
