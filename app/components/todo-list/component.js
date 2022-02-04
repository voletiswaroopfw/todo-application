import Ember from "ember";
const { set, getProperties, setProperties, computed, get } = Ember;

export default Ember.Component.extend({
  searchVal: null,
  modelData: computed("model.[]", {
    get() {
      return get(this, "model").toArray().reverse();
    },
  }),

  markEveryItemsCompleted: computed("model.@each.completed", {
    get() {
      return get(this, "model").isEvery("completed");
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

    sortList(type) {
      let selectedSortData;
      if (type === "id") {
        selectedSortData = get(this, "model").toArray();
      } else if (type === "title" || type === "completed") {
        selectedSortData = get(this, "model").toArray().sortBy(type);
      } else if (type === "pending") {
        selectedSortData = get(this, "model")
          .toArray()
          .sortBy("completed")
          .reverse();
      }
      setProperties(this, { modelData: selectedSortData });
    },

    searchItem() {
      let modelData = get(this, "model").filter((todo) => {
        return get(todo, "title").includes(this.get("searchVal"));
      });
      set(this, "modelData", modelData);
      set(this, "searchVal", "");
    },

    resetSearch() {
      setProperties(this, { modelData: get(this, "modelData") });
    },
  },
});
