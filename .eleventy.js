
// The export statement makes these settings available to other files in 11ty

module.exports = function(eleventyConfig) {
  // ✅ Allows Eleventy to copy the styles and scripts to the output folder
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("script.js");

  return {
      dir: {
          input: "site",  
          output: "_site" 
      }
  };
};
