/*获取到默认的路径*/
/*require('path') 输出的内容是： { "sep": "/", "delimiter": ":" }*/
const path = require('path');

/*将指定的路径进行拼接*/
/*_dirname 是项目的根路径 / */
const resolve = dir => {
    return path.join(__dirname, dir);
};


module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@',resolve('src/components'))
    }
};
