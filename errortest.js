looker.plugins.visualizations.add({
  create: function(element, config) {
    
  },
  updateAsync: function(data, element, config, queryResponse, details, done) {
      this.addError({title: "No Dimensions", message: "This chart requires dimensions."});
      return;
  }
})
