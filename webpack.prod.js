// MDEV Digital - Webpack Boilerplate[VueJS]
// Webpack 4 Configuration file
// -----------------------------------------
// PRODUCTION ENVIRONMENT
// ----------------------------------------

// Require Imports
var webpack = require('webpack');
var path = require('path')
// Robots TXT
const RobotstxtPlugin = require("robotstxt-webpack-plugin").default;
// Favicons
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Compression
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// Prerendering
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// Sitemap Generator
const SitemapPlugin = require('sitemap-webpack-plugin').default;

// Webpack Merge Configuration
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin");

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

// SEO & Sitemap Configuration
const hostDomainUrl = "https://mdev.digital"
const sitemapFile = hostDomainUrl + "/sitemap.xml"
// Robots.TXT Configuration
const robotOptions = {
  policy: [
    {
      userAgent: "Googlebot",
      //allow: "/",
      //disallow: ["/search"],
      disallow: ["/"],
      crawlDelay: 2
    },
    {
      userAgent: "OtherBot",
      allow: ["/allow-for-all-bots", "/allow-only-for-other-bot"],
      disallow: ["/admin", "/login"],
      crawlDelay: 2
    },
    {
      userAgent: "*",
      //allow: "/",
      disallow: "/",
      //disallow: "/search",
      crawlDelay: 10,
      cleanParam: "ref /articles/"
    }
  ],
  // Configured on SEO &Sitemap Configuration
  sitemap: sitemapFile,
  host: hostDomainUrl
}

// Prerenderer Routes
// These tell the prerenreder which routes to render..
// These should match routes.js
const prerenderRoutes = [
  '/',
  '/contact',
  '/about',
  '/services/overview',
  '/services/branding',
  '/services/app-development',
  '/services/consulting',
  '/services/digital-marketing',
  '/services/ui-ux',
  '/team/lucas-moreira',
  '/team/becky-domenico',
  '/team/haly-hawkins',
  '/team/dorian-hall',
  '/team/luis-guerrero',
  '/team/graham-coutts',
]

// Production Environment Exports
module.exports = merge(common, {
  // Set Webpack Mode
  mode: 'production',
  // Plugins & Post Processing
  plugins: [
    // Clean ./dist Folder
    new CleanWebpackPlugin('dist', {} ),
    // Generate Robots.TXT
    new RobotstxtPlugin(robotOptions),
    // Set NODE_ENV to Production
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true,}, reduceIdents: false, discardDuplicates: false, autoprefixer: false },
      canPrint: true
    }),
    // Process and Inject Favicon
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/favicon.png', // Source for Favicon file
      prefix: 'icons-[hash]/', // File Prefix
      emitStats: false,
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
      inject: true, // Inject Calls on index.html automatically
      // CHANGE COLOR OF THEME
      background: '#13b2a9',
      // CHANGE PROJECT TITLE
      title: 'MDEV Digital Inc.',
      // Icons to export
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    // Prerenderer Plugin
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      // Routes to render
      routes: prerenderRoutes,
      // Export & Optimization options
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      // Process page before output..
      postProcess(renderedRoute) {
        // Remove active classes from prerendered routes
        renderedRoute.html = renderedRoute.html
          .replace('--mask-active', '')
          .replace('--nav-active', '')
          .replace('--active', '');

        return renderedRoute;
      },
      // Renderer Options
      renderer: new Renderer({
        // Inject window property
        injectProperty: '__PRERENDER_INJECTED',
        headless: true,
        // Triggered by App.Vue
        renderAfterDocumentEvent: 'spa-rendered'
      })
    }),
    // Sitemap Generation
    new SitemapPlugin(hostDomainUrl, prerenderRoutes, {
      changeFreq: 'monthly',
      lastMod: true,
      priority: '0.4',
      skipGzip: true,
    }),
    // Gzip Compression
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});
