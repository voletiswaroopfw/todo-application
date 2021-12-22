import Ember from "ember";
const {
  get,
  set,
  getProperties,
  inject: { service },
  computed,
} = Ember;

export default Ember.Component.extend({
  store: service(),
  actions: {
    removeTodo() {
      let { item } = getProperties(this, "item"); 
      item.deleteRecord();
    },
  },
});
