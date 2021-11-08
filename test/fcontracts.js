const Fcontracts = artifacts.require('Fcontracts');
const truffleAssert = require('truffle-assertions');

contract('Fcontracts', (accounts) => {
  let instance;
  before('should setup the contract instance', async () => {
    instance = await Fcontracts.deployed();
  });
  it('should check the type of the event', async () => {
    const result = await instance.changeName('hello event');
    truffleAssert.eventEmitted(result, 'NameEvent');
  });

  it('should emit with correct paremeters', async () => {
    const result = await instance.changeName('hello event');
    console.log(result.logs[0].args);
    truffleAssert.eventEmitted(result, 'NameEvent', (event) => {
      return event.evPram == 'hello event';
    });
  });
  
});