/* config-overrides.js */
/* module.exports = function override(config, env) {
    //do stuff with the webpack config...

    //这里是使用
    return config;
  }

 */

 const { override,
    addDecoratorsLegacy} = require('customize-cra');


modules.exports = override(
    addDecoratorsLegacy()
)