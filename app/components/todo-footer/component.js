import Ember from "ember";
const { get, computed } = Ember;

export default Ember.Component.extend({
  getItemsCount: computed("model.@each.[]", {
    get() {
      let totalItems = get(this, "model").get("length");
      return totalItems;
    },
  }),
  getPendingItemsCount: computed("model.@each.completed", {
    get() {
      let pending = get(this, "model")
        .filterBy("completed", false)
        .get("length");
      return pending;
    },
  }),
  getCompletedItemsCount: computed("model.@each.completed", {
    get() {
      let completed = get(this, "model")
        .filterBy("completed", true)
        .get("length");
      return completed;
    },
  }),
});
