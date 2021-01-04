import { getGreeting , getAddTodoButton, getTodos} from '../support/app.po';

describe('nxdev-lalit', () => {


  beforeEach(() => cy.visit('/'));

  it('should  display todos', ()=>{
    getTodos().should(t=>expect(t.length).equal(2));

    getAddTodoButton().click();

    getTodos().should(t=>expect(t.length).equal(3));

  });



  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to nxdev-lalit!');
  });
});
