module.exports = {
  eventStore: {
    type: "mongodb",
    host: "ds161901.mlab.com", // optional
    port: 61901, // optional
    dbName: "domain", // optional
    eventsCollectionName: "events", // optional
    snapshotsCollectionName: "snapshots", // optional
    transactionsCollectionName: "transactions", // optional
    timeout: 10000, // optional
    // authSource: 'authedicationDatabase',        // optional
    username: "test_user", // optional
    password: "password123" // optional
  },
  eventDefinition: {
    correlationId: "commandId",
    id: "id",
    name: "event",
    aggregateId: "payload.id",
    aggregate: "aggregate.name",
    payload: "payload",
    revision: "head.revision",
    meta: "meta"
  },
  commandDefinition: {
    id: "id",
    name: "command",
    aggregateId: "payload.id",
    aggregate: "aggregate.name",
    payload: "payload",
    revision: "head.revision",
    meta: "meta"
  }
};
