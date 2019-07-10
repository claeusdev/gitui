import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}`).then(org => {
      org.oldId = org.id;
      org.id = org.name;
      return org;
    });
  }
});
