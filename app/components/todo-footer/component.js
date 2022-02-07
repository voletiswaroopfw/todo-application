import Ember from "ember";
const { get, computed, setProperties } = Ember;

export default Ember.Component.extend({
  showItemsCount: true,
  init() {
    this._super(...arguments);
    let settings = JSON.parse(localStorage.getItem("settings"));
    setProperties(this, { showItemsCount: settings ? settings.count : showItemsCount });
  },
  getPendingItemsCount: computed("model.@each.completed", {
    get() {
      let itemsCount = get(this, "model").get("length");
      return itemsCount > 0 ? itemsCount : false;
    },
  }),
});
