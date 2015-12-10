AutoForm.hooks({
  'add-form': {
    onSuccess: function (operation, result, template) {
      Router.go("complaints");
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
