import Ember from "ember";
const { set, computed, get } = Ember;

export default Ember.Component.extend({
  modelData: computed("model.@each.id", {
    get() {
      return get(this, "model").toArray().reverse();
    },
  }),
});
