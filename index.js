var main = function( iterable ){
    var sortedArray = new Array();
    let stringValue = typeof iterable;

    for ( let i = 0; i <= iterable.length-1; i++ ){
        if( Array.isArray( iterable ) == true ){
            sortedArray.push( iterable[i] );
        }else if( stringValue === "string" ){
            sortedArray.push( iterable.charAt(i) );
        }else{
            console.log( "Please input a string or an array!" );
        }
    }
    sortAndDisplaySortedArray(sortedArray);
};

var sortAndDisplaySortedArray = function( theArray ){
    let y = 1;
    for( let i = 0; i <= theArray.length-1 ; i++, y++ ){
       if(theArray[i] == theArray[y] ){
            theArray.splice( y, 1 );
        }
    }

    for( let n = 0; n <= theArray.length-1; n++ ){
        console.log( theArray[n] );
    }
}

//test w/t Array
//main([1, 1, 'd', 6, 9, 9, 10, 4, 5]);

//test w/t string
//main("aabGGTSFF");




