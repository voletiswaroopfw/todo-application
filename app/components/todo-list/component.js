import Ember from "ember";
const { set, getProperties, setProperties, computed, get } = Ember;

export default Ember.Component.extend({
  modelData: [],

  showDataInReverse: computed("model.@each.id", {
    get() {
      return get(this, "model").toArray().reverse();
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

  sortByStatusCompleted: computed("sortByStatusPending", {
    get() {
      let { sortByStatusPending } = getProperties(this, "sortByStatusPending");
      return sortByStatusPending.reverse();
    },
  }),

  markEveryItemsCompleted: computed("model.@each.completed", {
    get() {
      return get(this, "model").isEvery("completed");
    },
  }),

  init() {
    this._super(...arguments);
    let { showDataInReverse } = getProperties(this, "showDataInReverse");
    setProperties(this, { modelData: showDataInReverse });
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
