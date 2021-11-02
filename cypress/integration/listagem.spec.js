

describe('Listagem', () => {
    
    it ('Quando não houver cadastros, então a listagem deve estar vazia', () => {
     cy.fixture('listagem-vazia').then (data => {

        window.localStorage.setItem('data', JSON.stringify(data))   
          
    })

    cy.visit ('https://form-agilizei.netlify.app/listagem.html')

    //Espero que a quantidade de linhas da tabela seja igual a 0, ou seja, nenhum elemento (vazio)

    cy.get('table tbody tr').should('have.length',0)
  }); 


    it ('Quando houver um ou mais cadastros, então a listagem deve exibir cada registro salvo', () => {
     cy.fixture('listagem-com-itens').then (data => {

        window.localStorage.setItem('data', JSON.stringify(data))

    })

    cy.visit ('https://form-agilizei.netlify.app/listagem.html')

    //Espero que a quantidade de linhas da tabela seja igual a 3, ou seja, dois elemento (linhas)

    cy.get('table tbody tr').should('have.length',3)
  });

});  

