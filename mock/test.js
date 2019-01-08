const axios = require('axios');

module.exports = {
    async registry(ctx) {
        return await axios.get('https://registry.npm.taobao.org/' + ctx.query.name).then(res => {
            return res.data
        });
    }
};
