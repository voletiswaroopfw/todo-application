import Ember from "ember";
const { set, computed, getProperties, setProperties } = Ember;

export default Ember.Component.extend({
  showDetailsPage: true,
  init() {
    this._super(...arguments);
    let settings = JSON.parse(localStorage.getItem("settings"));
    setProperties(this, { showDetailsPage: settings ? settings.details : showDetailsPage });
  },
  actions: {
    toggleCompleted(e) {
      let { item } = getProperties(this, "item");
      set(item, "completed", e.target.checked);
      item.save();
    },
    removeTodo() {
      let { item } = getProperties(this, "item");
      item.deleteRecord();
    },
  },
});
