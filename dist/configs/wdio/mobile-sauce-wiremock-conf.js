"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_mobile_caps_1 = require("../../support/test-run/get-mobile-caps");
const base_conf_1 = __importDefault(require("./base-conf"));
const services_config_1 = require("./services/services-config");
exports.config = {
    ...base_conf_1.default,
    ...services_config_1.SAUCE_CONFIG,
    capabilities: (0, get_mobile_caps_1.getMobileCaps)(),
    services: [services_config_1.SAUCE_SERVICE_CONFIG, services_config_1.WIREMOCK_SERVICE_CONFIG],
};
//# sourceMappingURL=mobile-sauce-wiremock-conf.js.map