const main = ( iterable ) => {
    let stringValue = typeof iterable;

    if( Array.isArray( iterable ) == true ){
        arraySort( iterable );
    }else if( stringValue === "string" ){
        stringSort( iterable );
    }else{
        console.log( "Can not string nor array!" );
    }
};

var sortedArray = new Array();

const stringSort = ( myValue )=>{
    var character = "";
    var singleChar = '';
   
    for ( var i = 0; i <= myValue.length-1; i++ ){
        character = myValue.charAt(i);
        sortAndAddtoSortedArray( character );
    }
    displayArray( sortedArray );
};

const arraySort = ( myValue ) => {
    for ( var i = 0; i <= myValue.length-1; i++ ){
        let character = myValue[i];
        sortAndAddtoSortedArray( character );
    }
    displayArray( sortedArray );
};


const displayArray = function ( theArray ){
    let y = 1
    for( let i = 0; i <= theArray.length ; i++, y++ ){
        if( theArray[y+1] != undefined ){
            if( theArray[i] == theArray[y] ){
                theArray.splice( y, 1 );
            }
         }

    }

    for( let n = 0; n <= theArray.length; n++ ){
        console.log( theArray[n] );
        if( theArray[n+1] == undefined )break;
    }
       
    
}

const sortAndAddtoSortedArray = function(character){
    if ( typeof character != "number" ){
        if ( character == character.toUpperCase() ) {
            singleChar = character;
            sortedArray.push( singleChar );
        }else{
            singleChar = character;
            sortedArray.push( singleChar );
        }
    }else {

        singleChar = character;
        sortedArray.push( singleChar );
    }
};

//test w/t Array
main(['a', 'a', 'b', 'G', 'G', 'T', 'S', 'F']);

//test w/t string
main("aabGGTSF");

