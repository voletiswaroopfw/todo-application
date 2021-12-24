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
    removeTodo(item) {
      // let { item } = getProperties(this, "item"); 
      item.deleteRecord();
      // get(this,'model').save();
    },
  },
});
