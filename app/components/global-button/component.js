import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    saveAction() {
      this.get("addTodoItem");
    },
  },
});
