'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async test(ctx, next) { // called by GET /test
    ctx.body = 'restaurant test message';
  },
};
