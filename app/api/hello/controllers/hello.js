'use strict';

module.exports = {
  async hello(ctx, next) { // called by GET /hello
    ctx.body = 'Hello World!';
  },
};
