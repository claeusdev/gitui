import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor('org'), 'login')
    return $.get(`https://api.github.com/orgs/${orgId}/repos`).then(res => {
      return res.map(repo => {
        repo.oldId = repo.id;
        repo.id = repo.name;
        return repo;
      })
    })
  },
  setupController(controller){
    this._super(...arguments)

    // Make resolved org available to repos template
    controller.set('org', this.modelFor('org'))
  }
});
