'use strict';

/**
 * komnaty service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::komnaty.komnaty');
