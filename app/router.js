import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todo-details', { path: '/todo-details/:item_id' });
  this.route('features-list');
  this.route('todo-list');
  this.route('settings');
});

export default Router;
