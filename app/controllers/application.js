import Ember from "ember";
const {
  get,computed,
  // inject: { service },
} = Ember;

export default Ember.Controller.extend({ 
  pending: computed("model", {
    get() {
      return get(this, "model").filterBy("completed", false);
    },
  }),
  completed: computed("model", {
    get() {
      return get(this, "model").filterBy("completed", true);
    },
  }),
});
