import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        let org = this.modelFor('org')
        return $.get(`https://api.github.com/repos/${org.login}/${params.repoid}`).then(
          res => {
              res.oldId = res.id;
              res.id = res.name;
              return res;
          }
        );
    }
});
