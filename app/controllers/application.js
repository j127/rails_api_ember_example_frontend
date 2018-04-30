import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleActive(monster) {
      monster.toggleProperty('active');
      console.log('toggled', monster);
    }
  }
});