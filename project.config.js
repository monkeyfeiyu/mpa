const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  title: 'Initialization project',
  port: 9001,
  // publicPath: '/',
  pathConfig: {},
  unpkgConfigList: {
    script: [
      'https://unpkg.com/babel-polyfill@6.26.0/dist/polyfill.min.js',
      isDevelopment
        ? 'https://unpkg.com/vue@2.6.10/dist/vue.js'
        : 'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
      'https://unpkg.com/element-ui@2.8.2/lib/index.js'
    ],
    style: ['https://unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css']
  },
  externals: {
    vue: 'Vue',
    'element-ui': 'ELEMENT'
  },
  proxyMiddleware(fetch, axios) {
    return async (ctx, next) => {
      const {
        path,
        method,
        query,
        request: { body, headers }
      } = ctx;
      if (path.startsWith('/api')) {
        const getConfig = {
          method: method,
          headers: headers,
          rejectUnauthorized: false
        };
        const postConfig = {
          body: qs.stringify(body),
          method: method,
          headers: headers
        };

        const isGet = method.toLowerCase() === 'get';
        const fetchParams = isGet ? getConfig : postConfig;
        const urlPrefix = 'http://192.168.1.1';

        let url = [urlPrefix, path].join('');

        if (isGet) {
          url = [url, qs.stringify(query)].join('?');
        }

        const data = await fetch(url, fetchParams).then(res => res.json());
        return (ctx.body = data);
      }
      return await next();
    };
  }
};
