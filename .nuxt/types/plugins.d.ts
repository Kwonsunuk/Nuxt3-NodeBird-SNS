// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/@pinia/nuxt/dist/runtime/payload-plugin.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../node_modules/vuetify-nuxt-module/dist/runtime/plugins/vuetify-date.js")> &
  InjectionType<typeof import("../../node_modules/vuetify-nuxt-module/dist/runtime/plugins/vuetify-icons.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-site-config/dist/runtime/nuxt/plugins/0.siteConfig.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/browser-devtools-timing.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused.js")> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/robots/dist/runtime/nuxt/plugins/robot-meta.server.js")> &
  InjectionType<typeof import("../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server.js")> &
  InjectionType<typeof import("../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-aos/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../node_modules/usebootstrap/dist/runtime/plugins/shiki.js")> &
  InjectionType<typeof import("../../node_modules/usebootstrap/dist/runtime/plugins/vueuse.js")> &
  InjectionType<typeof import("../../node_modules/usebootstrap/dist/runtime/plugins/breakpoint.js")> &
  InjectionType<typeof import("../../node_modules/usebootstrap/dist/runtime/plugins/localization.js")> &
  InjectionType<typeof import("../../node_modules/usebootstrap/dist/runtime/plugins/seometa.js")> &
  InjectionType<typeof import("../../node_modules/usebootstrap/dist/runtime/plugins/bootstrap.js")> &
  InjectionType<typeof import("../../node_modules/vuetify-nuxt-module/dist/runtime/plugins/vuetify-no-client-hints.js")> &
  InjectionType<typeof import("../../node_modules/@nuxt/icon/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/dev-server-logs.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-if-layout-used.js")> &
  InjectionType<typeof import("../../node_modules/@vueuse/nuxt/ssr-plugin.mjs")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'vuetify:date:plugin' | 'vuetify:icons:plugin' | 'nuxt:head' | 'nuxt:router' | 'nuxt-site-config:init' | 'nuxt:browser-devtools-timing' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'vue-devtools-client' | '@nuxt/icon' | 'nuxt:checkIfLayoutUsed' | 'vuetify:nuxt:server:plugin' | 'vuetify:nuxt:client:plugin'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
