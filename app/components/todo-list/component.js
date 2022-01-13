import Ember from "ember";
const { set, getProperties, setProperties, computed, get } = Ember;

export default Ember.Component.extend({
  modelData: computed("model.@each.id", {
    get() {
      return get(this, "model").toArray().reverse();
    },
  }),

  markEveryItemsCompleted: computed("model.@each.completed", {
    get() {
      return get(this, "model").isEvery("completed");
    },
  }),

  showDataInReverse: computed("model.@each.id", {
    get() {
      return get(this, "model").toArray();
    },
  }),

  sortByTitle: computed("model.@each.title", {
    get() {
      return get(this, "model").toArray().sortBy("title");
    },
  }),

  sortByStatusPending: computed("model.@each.completed", {
    get() {
      return get(this, "model").toArray().sortBy("completed");
    },
  }),

  sortByStatusCompleted: computed("model.@each.completed", {
    get() {
      return get(this, "model").toArray().sortBy("completed").reverse();
    },
  }),

  init() {
    this._super(...arguments);
  },

  actions: {
    toggleAll() {
      let { model, markEveryItemsCompleted } = getProperties(
        this,
        "model",
        "markEveryItemsCompleted"
      );
      return model.forEach((todo) =>
        set(todo, "completed", !markEveryItemsCompleted)
      );
    },

    sortList(e) {
      let selectedSortData = get(this, e.target.getAttribute("data-action"));
      setProperties(this, { modelData: selectedSortData });
    },
  },
});
