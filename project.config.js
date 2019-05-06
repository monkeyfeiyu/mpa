module.exports = {
    title: 'Initialization project',
    port: 9001,
    publicPath: '/',
    pathConfig: {
        // favicon: ''
    },
    proxyMiddleware(fetch, axios) {
        return async (ctx, next) => {
            const {
                path,
                method,
                query,
                request: {
                    body,
                    headers
                }
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
                return ctx.body = data;
            }
            return await next();
        }
    }
};
