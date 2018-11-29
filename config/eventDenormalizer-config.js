const commonConfig = require("./common-config");

module.exports = {
  repository: {
    type: "mongodb",
    host: "ds127428.mlab.com", // optional
    port: 27428, // optional
    dbName: "readmodel", // optional
    timeout: 10000, // optional
    // authSource: 'authedicationDatabase',        // optional
    username: "test_user", // optional
    password: "password123" // optional
  },
  revisionGuardStore: {
    queueTimeout: 1000, // optional, timeout for non-handled events in the internal in-memory queue
    queueTimeoutMaxLoops: 3, // optional, maximal loop count for non-handled event in the internal in-memory queue

    type: "redis",
    host: "redis-17613.c114.us-east-1-4.ec2.cloud.redislabs.com", // optional
    port: 17613, // optional
    db: 0, // optional
    prefix: "readmodel_revision", // optional
    timeout: 10000, // optional
    password: "TqwvBL2ubDjOFriogGQbBDCHbNdUnqR7" // optional
  },
  eventDefinition: commonConfig.eventDefinition
};
