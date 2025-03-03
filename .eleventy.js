
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("script.js");

  return {
      dir: {
          input: "site",  
          output: "_site" 
      }
  };
};
