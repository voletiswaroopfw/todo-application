import Ember from "ember";
const { computed } = Ember;

export default Ember.Controller.extend({
  queryParams: ["items"],
  items: null,
  todos: computed("items", "model", "model.@each.completed", function () {
    let items = this.get("items");
    let todoList = this.get("model");
    if (items !== "all") {
      return todoList.filterBy(
        "completed",
        items == "completed" ? true : false
      );
    } else {
      return this.store.findAll("todo");
    }
  }),
});
