looker.plugins.visualizations.add({
  create: function(element, config) {
    
  },
  updateAsync: function(data, element, config, queryResponse, details, done) {
      console.log("test")
      this.addError({title: "No Dimensions", message: "This chart requires dimensions.",});
      return;
  }
})
