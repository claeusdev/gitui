import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor("org"), "login");
    let repoId = Ember.get(this.modelFor("org.repo"), "name");
    return $.get(
      `https://api.github.com/repos/${orgId}/${repoId}/contributors`
    ).then(res => {
      return res.map(contributor => {
        contributor.oldId = contributor.id;
        contributor.id = contributor.login;
        return contributor;
      });
    });
  }
});
