const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const { protocol, name } = endpoint;
  const endpointKey = `${protocol}:${name}`;

  let queryCount = weakMap.get(endpointKey) || 0;
  queryCount++;

  weakMap.set(endpointKey, queryCount);

  if (queryCount >= 5) {
    throw new Error(`Endpoint load is high: ${endpointKey}`);
  }
}

module.exports = { weakMap, queryAPI };
