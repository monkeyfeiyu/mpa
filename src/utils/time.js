// 日期格式化
export const time = (date, format = 'yyyy-MM-dd HH:mm:ss') => {
    const pad = s => `0${s}`.slice(-2);
    const dt = new Date(+date);
    const parse = {
        MM: dt.getMonth() + 1,
        dd: dt.getDate(),
        HH: dt.getHours(),
        mm: dt.getMinutes(),
        ss: dt.getSeconds()
    };
    Object.keys(parse).forEach(v => (parse[v] = pad(parse[v])));
    parse.yyyy = dt.getFullYear();
    return Object.entries(parse).reduce((prev, [k, v]) => {
        prev = prev.replace(k, v);
        return prev;
    }, format);
};

// 距离当前日期
export const getDateFromNow = ({year = 0, month = 0, day = 0}) => {
    const dt = new Date();
    dt.setFullYear(dt.getFullYear() + year);
    dt.setDate(dt.getDate() + day);
    return dt;
};

// datePickerOptions.disabledDate
export const disabledDateFn = ({year = 0, month = 0, day = 0}) => time =>
    time.getTime() < getDateFromNow({year, month, day});
