import Ember from "ember";
const {
  setProperties,
  inject: { service },
} = Ember;

export default Ember.Component.extend({
  store: service(),  
  showStatus: true,
  showAddItem: true,
  init() {
    this._super(...arguments);
    let settings = JSON.parse(localStorage.getItem("settings"));
    setProperties(this, { showAddItem: settings ? settings.newItem : showAddItem });    
    setProperties(this, { showStatus: settings ? settings.status : showStatus });
  },
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
