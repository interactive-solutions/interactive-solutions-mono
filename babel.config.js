module.exports = (api) => {
  api.cache(true);

  return {
    minified: true,
    comments: false
  };
};
