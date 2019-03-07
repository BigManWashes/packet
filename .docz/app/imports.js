export const imports = {
  'mdx/home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-home" */ 'mdx/home.mdx'),
}
