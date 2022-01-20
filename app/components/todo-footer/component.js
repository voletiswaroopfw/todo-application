import Ember from "ember";
const { get, computed } = Ember;

export default Ember.Component.extend({
  getPendingItemsCount: computed("model.@each.completed", {
    get() {
      let itemsCount = get(this, "model").get("length");
      return itemsCount > 0 ? itemsCount : false;
    },
  }),
});
