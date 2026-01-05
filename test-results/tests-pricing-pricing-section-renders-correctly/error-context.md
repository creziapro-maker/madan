# Page snapshot

```yaml
- generic [active]:
  - alert [ref=e1]
  - dialog [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - heading "Build Error" [level=1] [ref=e7]
        - paragraph [ref=e8]: Failed to compile
        - generic [ref=e9]:
          - text: Next.js (14.2.4) is outdated
          - link "(learn more)" [ref=e11] [cursor=pointer]:
            - /url: https://nextjs.org/docs/messages/version-staleness
      - generic [ref=e12]:
        - generic [ref=e13]:
          - link "src\\app\\layout.tsx" [ref=e14] [cursor=pointer]:
            - text: src\app\layout.tsx
            - img [ref=e15]
          - generic [ref=e20]: "An error occurred in `next/font`. Error: Cannot find module '@tailwindcss/postcss' Require stack: - c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js - c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js - c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack\\config\\index.js - c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack-config.js - c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\server\\dev\\hot-reloader-webpack.js - c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\server\\lib\\router-utils\\setup-dev-bundler.js - c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\server\\lib\\router-server.js - c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\server\\lib\\start-server.js at Function.<anonymous> (node:internal/modules/cjs/loader:1401:15) at c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\server\\require-hook.js:55:36 at Function.resolve (node:internal/modules/helpers:145:19) at loadPlugin (c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:49:32) at c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:56 at Array.map (<anonymous>) at getPostCssPlugins (c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:47) at async c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js:124:36 at async c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\build\\webpack\\loaders\\next-font-loader\\index.js:86:33 at async Span.traceAsyncFn (c:\\Project\\madan Rajendra\\madan-portfolio\\node_modules\\next\\dist\\trace\\trace.js:154:20)"
        - contentinfo [ref=e21]:
          - paragraph [ref=e22]: This error occurred during the build process and can only be dismissed by fixing the error.
```