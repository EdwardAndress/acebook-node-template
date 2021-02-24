describe('Timeline', function() {
  it('can submit posts and view them', function() {
    cy.visit('/posts');
    cy.contains('Make a new post!').click();

    cy.get('#new-post-form').find('[type="text"]').type('Hello, world!');
    cy.get('#new-post-form').submit();

    cy.get('.posts').should('contain', 'Hello, world!');
  });
});
