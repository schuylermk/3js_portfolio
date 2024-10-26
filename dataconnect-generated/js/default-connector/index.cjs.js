const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: '3d_portfolio',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

