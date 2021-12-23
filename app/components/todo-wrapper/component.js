import Ember from "ember";
const {
  getProperties,
  inject: { service },
} = Ember;
export default Ember.Component.extend({
  store: service(),

  actions: {
    addTodoItem() {
      let newTodo = this.get("addtodo");
      if (!newTodo.trim()) {
        return;
      }
      let { store } = getProperties(this, "store");
      let todoItem = store.createRecord("todos", {
        title: newTodo,
        completed: false,
      });
      this.set("addtodo", "");
      todoItem.save();
    },
  },
});
