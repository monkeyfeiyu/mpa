import {time} from './time';

// 格式化数据
export const formatData = (data, options = {}) => {
    const ret = {...data};
    Object.entries(data)
        .filter(([k, v]) => k in options)
        .forEach(([k, v]) => {
            const option = options[k];
            const {type, defaultValue} = option;
            if (['number', 'date'].includes(type)) {
                if (v === '') {
                    ret[k] = defaultValue;
                } else {
                    ret[k] = +v;
                }
            }
        });
    return ret;
};

/**
 * [处理默认数据]
 * @param  {Object} data         [数据源]
 * @param  {String} key          [要处理的字段名]
 * @param  {any} defaultValue [默认值]
 * @param  {any} replaceValue [替换值]
 *
 * 比如 当数据是 '-1' 时, 显示为 '-'
 */
export const formatDefaultData = (data, key, defaultValue, replaceValue) => {
    const val = data[key];
    data[key] = val === defaultValue ? replaceValue : val;
};

/**
 * [金额格式化]
 * @param  {Object} data [数据源]
 * @param  {Array}  keys [数据中的金额字段名]
 * @param  {string} empty [当为空时的显示]
 * formatMoney({
 *     a: 'aaa',
 *     b: 123
 * }, ['b'])
 */
export const formatMoney = (data = {}, keys = [], empty = '-') => {
    keys.forEach(v => {
        const val = +data[v];
        if (val < 0) {
            data[v] = empty;
        } else {
            data[v] = val ? (val / 1e2).toFixed(2) : empty;
        }
    });
};

/**
 * [格式化data中的日期]
 * @param  {Object} data       [数据源]
 * @param  {Object} timeOption [数据中的日期字段名以及其对应的格式化字符串]
 * @param  {string} empty [当为空时的显示]
 * timeOption: {
 *     key1: 'yyyy-MM-dd HH:mm',
 *     key2: 'yyyy-MM-dd'
 * }
 */
export const formatTime = (data, timeOption = {}, empty = '-') => {
    Object.entries(data).map(([k, v]) => {
        if (k in timeOption) {
            data[k] = v == '-1' ? empty : time(v, timeOption[k]);
        }
    });
};
