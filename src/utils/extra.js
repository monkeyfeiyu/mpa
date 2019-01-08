// 求和
export const sum = arr => arr.reduce((prev, cur) => prev + cur, 0);

// 求积
export const multiplication = arr => arr.reduce((prev, cur) => prev * cur);

// 空数组
export const isEmptyArray = arr => arr.length === 0;

// 浮点数加法
export const floatNumberAdd = arr => {
    if (isEmptyArray(arr)) {
        return 0;
    }
    const arrStr = arr.map(v => `${+v}`);
    const maxLength = Math.max(
        ...arrStr.map(v => {
            const [integer, decimal = ''] = v.split('.');
            return decimal.length;
        })
    );
    const arrStrInt = arrStr.map(v => {
        const [integer, decimal = ''] = v.split('.');
        return Number(integer + decimal.padEnd(maxLength, '0'));
    });
    return sum(arrStrInt) / Math.pow(10, maxLength);
};

// 浮点数乘法
export const floatNumberMultiplication = arr => {
    if (isEmptyArray(arr)) {
        return 0;
    }
    const arrStr = arr.map(v => `${+v}`);
    const maxLength = Math.max(...arrStr.map(v => (v.split('.')[1] || '').length));
    console.log(maxLength);
    const total =
        multiplication(arr.map(v => v * Math.pow(10, maxLength))) /
        Math.pow(10, maxLength * arr.length);
    return +total.toFixed(maxLength);
};

// 浮点数除法
export const floatNumberDivision = (a, b, length) => {
    const arrStr = [a, b].map(v => `${+v}`);
    const maxLength = Math.max(
        ...arrStr.map(v => {
            const [integer, decimal = ''] = v.split('.');
            return decimal.length;
        })
    );
    const arrStrInt = arrStr.map(v => {
        const [integer, decimal = ''] = v.split('.');
        return Number(integer + decimal.padEnd(maxLength, '0'));
    });
    return +(arrStrInt[0] / arrStrInt[1]).toFixed(length);
};

// 获取 locations.search 参数
export const getQuery = (key = '') => {
    const query = qs.parse(location.search.slice(1));
    return key ? query[key] : query;
};

// 过滤 json
export const only = (data = {}, keys = []) =>
    keys.reduce((prev, cur) => {
        prev[cur] = data[cur];
        return prev;
    }, {});

// 解析 url
export const parseUrl = (url = '') => {
    const a = document.createElement('a');
    a.href = url;
    return only(a, ['protocol', 'host', 'pathname', 'port', 'search', 'hash']);
};
