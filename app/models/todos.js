import DS from "ember-data";
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  userId: attr('number'),
  title: attr('string'),
  completed: attr('boolean'),
  todoList: belongsTo('todos')
});
