
var Chance = require('chance')
var chance = new Chance ()

describe('Cadastro', () => {
    
    it ('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado',() => {

        cy.visit ('https://form-agilizei.netlify.app')

        //Inputs de texto/ textarea / email -> type
        cy.get('input[name=firstName]').type(chance.first()) //mapeamento com inserção utilizando "Name"
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        //Inputs radio / checkboxes -> check
        cy.get('input[value=n]').check() //mapeamento com seleção de radiobutton utilizando "value" + a ação "check"

        cy.get('input[type=checkbox]').check('Dormir') //mapeamento com seleção de checkbox utilizando "type" + a ação "check"
        cy.get('input[type=checkbox]').check('Netflix') 

        //Inputs com comboboxes -> select
        cy.get('select#countries').select('Dinamarca',{force: true})//mapeamento de um combobox, passando o valor e forçando a não validação do elemento que está ocultando
        cy.get('select#years').select('2016',{force: true})
        cy.get('select#months').select('Junho',{force: true})
        cy.get('select#days').select('8',{force: true})

        //Inputs de texto/ textarea / email -> type
        cy.get('input#firstpassword').type('Alunos@2021')
        cy.get('input#secondpassword').type('Alunos@2021')

        //Mapeamento de Botões

        cy.contains('Finalizar cadastro').click()

        //Espero que a minha aplicação seja redirecionada para a tela de listagem (url)
        cy.url().should('contain', 'listagem')

    });
    

});