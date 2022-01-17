import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    saveAction() {
      this.addItem();
    },
    removeItem(){
      this.removeTodo();
    },
    resetSearchData(){
      this.resetSearch()
    }
  },
});
