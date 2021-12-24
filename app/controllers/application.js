import Ember from "ember";
const {
  inject: { service },
} = Ember;
export default Ember.Controller.extend({
  store: service(),

  actions: {
    addTodoItem() {
      let inputTodoValue = this.get("addtodo");
      if (inputTodoValue == '') {
        return;
      }
      this.get("store").createRecord("todos", {
        id: 200 + this.incrementProperty("i"),
        title: inputTodoValue,
        completed: false,
      });
      this.set("addtodo", "");
    },
  },
});
