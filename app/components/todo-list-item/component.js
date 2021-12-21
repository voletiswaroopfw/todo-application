import Ember from "ember";
const {
  get,
  set,
  getProperties,
  inject: { service },
  computed,
} = Ember;

export default Ember.Component.extend({
  store: service(),
  actions: {
    toggleTodo(e) {
      let todo = getProperties(this, 'model');
    //   set(todo, "completed", e.target.checked);
    },
    removeTodo(){
      let {item} = getProperties(this, 'item');
      // todo.deleteRecord();
      let store = this.get('store') 
      console.log(item.id,'todo');
      item.deleteRecord();
      // });
      // store.findRecord('todos', item.id, { backgroundReload: false }).then(function(post) {
      //   post.deleteRecord();
        // post.get('isDeleted'); // => true
        // post.save(); // => DELETE to /posts/1
      // });
    }
  },
});
