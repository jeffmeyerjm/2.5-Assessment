module.exports = {
    url: 'http://localhost:3000',
    elements: {
        
        evenOddHeadr : {
            selector: '//h4[@text()=“Evens and Odds”]',
            locateStrategy : 'xpath'
        },
        evenOddInput: 'input[name="evenOddInput"]',
        splitButton: 'button[name="evenOddButton"]',
        oddResult:  'span[name="oddResults"]',
        evenResult: 'span[name="evenResults"]',
        



        filterHeadr :{
            selector: '//h4[text()=“Filter Object”]',
            locateStrategy : 'xpath'
        },
        filterInput: 'input[name="objectFilterInput"]',
        filterResult: 'span[name="objectFilterResults"]',
        filterButton: 'button[name="objectFilterButton"]',


        

        filtrStringHeadr : {
            selector: '//h4[text()=“Filter String”]',
            locateStrategy : 'xpath'
        },
        filterStringInput : 'input[id="nameFilterInput"]',
        filterStringButton : 'button[id="nameFilterButton"]',
        filterStringResult : 'span[name="nameFilterResults"]',




        palindromeHeadr :{  
            selector: '//h4[text()=“Palindrome”]',
            locateStrategy : 'xpath'
        },
        palindromeInput :'input[name="palindromeInput"]',
        palindromeButton : 'button[name="palindromeButton"]',
        palindromeResult : 'span[name="palindromeResults"]',


        sumHeadr : {
            selector: '//h4[text()=“Sum”]',
            locateStrategy : 'xpath'
        },
        sumInput1 : 'input[name="sumInput1"]',
        sumInput2 : 'input[name="sumInput2"]',
        sumButton : 'button[name="sumButton"]',
        sumResult : 'span[name="sumResults"]',
    }
}
