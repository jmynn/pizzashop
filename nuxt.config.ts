// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  components: [
    '~/components',
    {
      path: '~/components/ui/icons',
      prefix: 'Icon'
    }
  ],

  modules: ['nuxt-viewport'],
  viewport: {
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1280,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768,
      custom: 600
    },

    cookie: {
      expires: 365, // 365 days
      name: 'viewport',
      path: '/',
      sameSite: 'Strict',
      secure: true
    },

    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet'
    },

    fallbackBreakpoint: 'desktop',

    feature: 'minWidth'
  }
});
