import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor("org"), "login");
    let repoId = Ember.get(this.modelFor("org.repo"), "name");
    return $.get(
      `https://api.github.com/repos/${orgId}/${repoId}/issues`
    ).then(res => {
      return res.map(issue => {
        issue.oldId = issue.id;
        issue.id = issue.login;
        return issue;
      });
    });
  }
});
