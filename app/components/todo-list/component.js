import Ember from "ember";
const { set, getProperties, computed, get } = Ember;

export default Ember.Component.extend({
  modelData: computed("model.@each.id", {
    get() {
      return get(this, "model").toArray().reverse();
    },
  }),
  allCompleted: computed("model.@each.completed", {
    get() {
      let model = get(this, "model");
      return model.isEvery("completed");
    },
  }),

  actions: {
    toggleAll() {
      let { model, allCompleted } = getProperties(this, "model", "allCompleted");
      return model.forEach((todo) => set(todo, "completed", !allCompleted));
    },
  },
});
