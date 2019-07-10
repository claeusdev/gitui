import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
export default Route.extend({
  favorites: service(),
  actions: {
    favoriteClicked(org) {
      this.get("favorites").favoriteItem(org);
    }
  },
  model() {
    return [
      { id: "emberjs" },
      { id: "ember-cli" },
      { id: "microsoft" },
      { id: "yahoo" },
      { id: "netflix" },
      { id: "facebook" }
    ];
  }
});
