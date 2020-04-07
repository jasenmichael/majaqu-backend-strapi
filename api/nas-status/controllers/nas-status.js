'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const moment = require('moment')

module.exports = {
  find: async ctx => {
    let data = await strapi.query('nas-status').find().then(data => data[0])
    let now = moment(new Date())
    let next = moment(data.status.next_update)
    // data.NEXT = next
    // data.NOW = now
    data.status.online = (now <= next)
    ctx.send(data)
  }
}
