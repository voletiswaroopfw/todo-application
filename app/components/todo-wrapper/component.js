import Ember from "ember";
const {
  getProperties,
  inject: { service },
} = Ember;
export default Ember.Component.extend({
  store: service(),

  actions: {
    addTodoItem() {
      let newTodo = this.get("addtodo");
      if (!newTodo.trim()) {
        return;
      }
      this.get('store').push({
        data: [{
          id: 200+this.incrementProperty('i'),
          type: 'todos',
          attributes: {
            title: newTodo,
            completed: false,
          },
          relationships: {}
        }]
      });
      this.set("addtodo", "");
    },
  },
});
