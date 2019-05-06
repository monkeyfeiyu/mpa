export const get = (url = '', data = {}, headers = {}) => {
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

export const post = (url = '', data = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res.data);
        }).catch(e => {
            reject(e);
        });
    });
};
