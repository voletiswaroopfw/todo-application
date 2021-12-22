import Ember from "ember";
const {
  inject: { service },
} = Ember;
export default Ember.Component.extend({
  store: service(),

  actions: {
    addTodoItem() {
      let newItem = this.get('addtodo');
      if (!newItem.trim()) { return; }
      let store = this.get('store') 
      let todo = store.createRecord('todos', {
        title: newItem,
        completed: false
      });
      this.set('addtodo', '');
      //  todo.save();
    }
  },
});
