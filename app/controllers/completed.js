import Ember from "ember";
const { computed } = Ember;

export default Ember.Controller.extend({
  todos: computed.filterBy("model", "completed", true),
});
