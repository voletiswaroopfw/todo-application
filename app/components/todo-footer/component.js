import Ember from "ember";
const {
  get,
  getProperties,
  computed,
} = Ember;

export default Ember.Component.extend({
  getItemsCount: computed("model.[]", {
    get() {
      let  totalItems = get(this, "model").get('length')
      return totalItems
    },
  }),
});
