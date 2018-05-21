



module.exports = {
    
    beforeEach: browser => {
        browser.url('http://localhost:3000', 1000)      
    },   
    after: browser => {
        browser.end()  
    },
    
    
    'Split accending numbers 1 through 10 ' : browser=> {
    
        let evenOdd= browser.page.evenOdd()
        evenOdd
            .setValue('@evenOddInput' , '1,2,3,4,5,6,7,8,9,10') 
            .click('@splitButton')
            .expect.element('@evenResult').text.to.contain("Evens: [2,4,6,8,10]") 
        evenOdd    
            .expect.element('@oddResult').text.to.contain("Odds: [1,3,5,7,9]")
    
    },
    
    
    'Split decending numbers 1 through 10' : browser => {
        let evenOdd= browser.page.evenOdd()
        evenOdd.setValue('@evenOddInput' , '10,9,8,7,6,5,4,3,2,1') 
            .click('@splitButton')
            .expect.element('@evenResult').text.to.contain("Evens: [10,8,6,4,2]") 
        evenOdd
        .expect.element('@oddResult').text.to.contain("Odds: [9,7,5,3,1]")
        
    },

    
    'Filter Entry' : browser => {
        let evenOdd= browser.page.evenOdd()
        evenOdd.setValue('@filterInput' , 'hairColor')
        .click('@filterButton')
        .verify.containsText('@filterResult' , 'brown')

    },
     
    
    'Filter String Input' : browser => {
        let evenOdd= browser.page.evenOdd()
        evenOdd.setValue('@filterStringInput' , 'Mark')
        .click('@filterStringButton')
        .verify.containsText('@filterStringResult' , 'Mark')   
    
    },
    
    
    'Valid entry palindrome' : browser => {
        let evenOdd= browser.page.evenOdd()
        evenOdd.setValue('@palindromeInput' , 'racecar')
        .click('@palindromeButton')
        .expect.element('@palindromeResult').text.to.contain('Palindrome: true')
    },


    'Invalid entry Palindrome' : browser => {
        let evenOdd= browser.page.evenOdd()
        evenOdd.setValue('@palindromeInput' , 'fire')
        .click('@palindromeButton')
        .expect.element('@palindromeResult').text.to.contain ('Palindrome: false')
    },

    'Sum Entry' : browser => {
        let evenOdd= browser.page.evenOdd()
        evenOdd.setValue('@sumInput1' , '21')
        .setValue('@sumInput2' , '34')
        .click('@sumButton')
        .verify.containsText('@sumResult' , '55')

    }

}


 
