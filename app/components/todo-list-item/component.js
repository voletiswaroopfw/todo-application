import Ember from "ember";
const { set, computed, getProperties } = Ember;

export default Ember.Component.extend({
  
  actions: {
    toggleCompleted(e) {
      let { item } = getProperties(this, "item");
      set(item, "completed", e.target.checked);
    },
    removeTodo() {
      let { item } = getProperties(this, "item");
      item.deleteRecord();
    },
  },
});
