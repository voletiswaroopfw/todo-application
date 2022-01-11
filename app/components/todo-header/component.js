import Ember from "ember";
const {
  set,
  inject: { service },
} = Ember;

export default Ember.Component.extend({
  store: service(),
  // selectedValue: null,

  actions: {
    defaultNewItemValue(e) {
      this.set("selectedValue", e.target.value);
    },
    addTodoItem() {
      let inputTodoValue = this.get("addtodo");
      let selectedValue = this.get("selectedValue");
      if (inputTodoValue == "") {
        return;
      }
      this.get("store").createRecord("todo", {
        id: 200 + this.incrementProperty("i"),
        title: inputTodoValue,
        completed: selectedValue == "true" ? true : false,
      });
      this.set("addtodo", "");
    },
  },
});
