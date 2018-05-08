const producitonConfig = require('./webpack_conf/webpack.production.config');
const developmentConfig = require('./webpack_conf/webpack.development.config');



module.exports = env => {
    if(!env.production){
        return developmentConfig(__dirname);
    }
    else{
        return producitonConfig(__dirname);
    }

};
