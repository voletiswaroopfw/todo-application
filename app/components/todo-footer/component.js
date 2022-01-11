import Ember from "ember";
const { get, computed } = Ember;

export default Ember.Component.extend({
  getPendingItemsCount: computed("model.@each.completed", {
    get() {
      let pending = get(this, "model").filterBy("completed", false).get("length");
      return pending > 0 ? pending : false;
    },
  }),
});
