import Ember from "ember";
const { get, computed } = Ember;

export default Ember.Controller.extend({
  todos: computed("model", {
    get() {
      return get(this, "model").filterBy("completed", false);
    },
  }),
});