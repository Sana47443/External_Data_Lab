
// The export statement makes these settings available to other files in 11ty

module.exports = function(eleventyConfig) {
  // ✅ Allows Eleventy to copy the styles and scripts to the output folder
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("script.js");

  return {
      dir: {
          input: "site",  // ✅ Points Eleventy to the "site" folder for content
          output: "_site" // ✅ Where Eleventy will generate the final files
      }
  };
};
