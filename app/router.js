import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('completed');
  this.route('pending');
  this.route('todo-details', { path: '/todo-details/:item_id' });
});

export default Router;
