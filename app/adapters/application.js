import DS from "ember-data";
import ApiData from "../config/hosts";

export default DS.JSONAPIAdapter.extend({
  host: ApiData.API_URL,
  init() {
    this._super(...arguments);
  },
});
