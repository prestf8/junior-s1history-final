module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/partials/_defMixins.scss";
            @import "@/partials/_responsiveMixins.scss";
          `
        }
      }
    }
  };