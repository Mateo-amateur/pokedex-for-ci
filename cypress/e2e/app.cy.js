/* global cy */
describe('Pokedex', () => {
  it('front', function () {
    cy.visit('http://localhost:8080')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})