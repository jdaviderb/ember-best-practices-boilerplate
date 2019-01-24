import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  intl: service(),

  beforeModel() {
    this.intl.setLocale('en-us'); // you can use an array ['fr-fr', 'en-us']
  }
});