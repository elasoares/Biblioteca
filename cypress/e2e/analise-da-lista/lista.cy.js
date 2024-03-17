/// <reference types='cypress'>

import { expect } from "chai";

describe('Visualizar lista de livros.', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:5173/');
    })

    it('Deve apresentar uma lista de livros após o carregamento.', () => {   
        cy.get('[data-cy="livrosCadastrados"]').should('have.length', 12);
    });


    it('Deve verificar o campo de pesquisa.', () => {
       
        const inputDePesquisa = 'Harry Potter';
      cy.get('[ data-cy="inputPesquisa"]').type(inputDePesquisa);  
      cy.get('[data-cy="botaoPesquisa"]').click();

   cy.get('[data-cy="livrosCadastrados"]')
   .then(($livrosCadastrados) =>{
   if($livrosCadastrados.length > 0){
    cy.wrap($livrosCadastrados).each(($livro)=>{
        expect($livro.text()).to.contain(inputDePesquisa);
    })
   }
   })

       

    });
});
