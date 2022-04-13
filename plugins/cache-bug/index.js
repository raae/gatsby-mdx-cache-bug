module.exports = async ({markdownNode, cache, reporter}) => {
  const test = await cache.get("test");
  if (!test) {
    reporter.info(`Node: ${markdownNode.id} - No cache for test`);
    await cache.set("test", "hello");
  } else {
    reporter.info(`Node: ${markdownNode.id} - Cache for test`);
  }
};
