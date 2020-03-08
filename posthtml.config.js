module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        API_KEY: process.env.API_KEY
      }
    }
  }
};
