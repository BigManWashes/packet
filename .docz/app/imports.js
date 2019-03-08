export const imports = {
  'mdx/home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-home" */ 'mdx/home.mdx'),
  'mdx/Controls/controls.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-controls-controls" */ 'mdx/Controls/controls.mdx'),
}
