import Ember from "ember";
const { set, computed, getProperties } = Ember;

export default Ember.Component.extend({
  listItem: computed("item", {
    get() {
      let { item } = getProperties(this, "item");
      return item;
    },
  }),

  actions: {
    toggleCompleted(e) {
      let { listItem } = getProperties(this, "listItem");
      set(listItem, "completed", e.target.checked);
    },
    removeTodo() {
      let { listItem } = getProperties(this, "listItem");
      listItem.deleteRecord();
    },
  },
});
