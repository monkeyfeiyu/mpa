module.exports = {
    title: 'Initialization project',
    port: 9001,
    publicPath: './',
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
            if (path.startsWith('/interface')) {
                const data = await fetch('http://192.168.1.1' + path, {
                    body: JSON.stringify(body),
                    method: 'POST',
                    headers: headers
                }).then(res => res.json());
                return ctx.body = data;
            }
            return await next();
        }
    }
};
