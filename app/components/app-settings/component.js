import Ember from "ember";
const { set, computed, getProperties,setProperties } = Ember;

export default Ember.Component.extend({
  details:'',
  status:'',
  search:'',
  sort:'',
  toggle:'',
  count:'',
  newItem:'',

  init() {
    this._super(...arguments);
    let settings = JSON.parse(localStorage.getItem("settings"));
    setProperties(this, { newItem: settings ? settings.newItem : true });
    setProperties(this, { details: settings ? settings.details : true });
    setProperties(this, { status: settings ? settings.status : true });
    setProperties(this, { search: settings ? settings.search : true });
    setProperties(this, { sort: settings ? settings.sort : true });
    setProperties(this, { toggle: settings ? settings.toggle : true });
    setProperties(this, { count: settings ? settings.count : true });
  },

  actions: {
    updateSetting(setting, e) { 
      console.log(setting, e.target.checked);
      set(this, setting, e.target.checked);
    },
    
    saveSettings() {
      let { newItem, details, status, search, sort, toggle, count } = getProperties(
        this,
        "newItem",
        "details",
        "status",
        "search",
        "sort",
        "toggle",
        "count"
      );
      localStorage.setItem('settings', JSON.stringify({
        newItem: newItem,
        details: details,
        status: status,
        search: search,
        sort: sort,
        toggle: toggle,
        count: count,
      }));
      console.log(details, status, search, sort, toggle, count, "data");
    },
  },
});
