import Ember from "ember";
const { set, getProperties, setProperties, computed, get } = Ember;

export default Ember.Component.extend({
  modelData: computed("model.[]", {
    get() {
      return get(this, "model").toArray().reverse();
    },
  }),
  
  markEveryItemsCompleted: computed("model.[]", {
    get() {
      return get(this, "model").isEvery("completed");
    },
  }),

  showListData: computed("model.[]", {
    get() {
      return get(this, "model").toArray();
    },
  }),

  sortByTitle: computed("model.[]", {
    get() {
      return get(this, "model").toArray().sortBy("title");
    },
  }),

  sortByStatusPending: computed("model.[]", {
    get() {
      return get(this, "model").toArray().sortBy("completed");
    },
  }),

  sortByStatusCompleted: computed("model.[]", {
    get() {
      return get(this, "model").toArray().sortBy("completed").reverse();
    },
  }),

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

    searchItem(e) {
      if (e.keyCode === 13) {
        let data = [];
        get(this, "model").mapBy("title").forEach((i) => {
          if (i.includes(e.target.value)) {
            data.pushObject(get(this, "model").toArray().filterBy("title", i)[0]);
          }
        });
        setProperties(this, { modelData: data });
        e.target.value = "";
      }
    },

    resetSearch() {
      let completeModelData = get(this, "showListData").reverse();
      setProperties(this, { modelData: completeModelData });
    },
  },
});
