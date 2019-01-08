// 下载文件
export const download = url => {
    const a = document.createElement('a');
    a.href = a.download = url;
    a.click();
};
