import Ember from "ember";
const { set, computed, get, getProperties } = Ember;

export default Ember.Component.extend({
  listItem: computed("item", {
    get() {
      let { item } = getProperties(this, "item");
      console.log(item, "item");
      return item;
    },
  }),

  actions: {
    toggleCompleted(e) {
      let { item } = getProperties(this, "listItem");
      set(item, "completed", e.target.checked);
    },
    removeTodo() {
      let { item } = getProperties(this, "listItem");
      item.deleteRecord();
    },
  },
});
