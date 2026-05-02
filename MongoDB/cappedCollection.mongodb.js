
/*

            Two ways to create capped collection

*/

// use ('test')

// db.createCollection('myCapped',{capped : true , size : 100 , max:3})


// db.runCommand( {convetToCapped : 'log2', size : 100})


// db.developers.find()

// db.createView( "AgedPerson" , 'developers' , [

//     {$group : {_id : "$role" ,  Age : {$max : "$age"}} }
// ])

// db.AgedPerson.find()

use ('secondDomain')