import Ember from "ember";
const {
  get,
  getProperties,
  inject: { service },
  computed,
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

      // Clear the "New Todo" text field
      this.set('addtodo', '');
      // Save the model
      //  todo.save();
    }
  },
});
