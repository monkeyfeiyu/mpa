const get = (url = '', data = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data
        }).then(res => {
            resolve(res.data);
        }).catch(e => {
            reject(e);
        });
    });
};

const post = (url = '', data = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res.data);
        }).catch(e => {
            reject(e);
        });
    });
};

export { get, post };
