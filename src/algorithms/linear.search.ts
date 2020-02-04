

function linearSearch<T>( data: Array<T>, searchItem: T ){
    return data.filter( ( item: T ) => item === searchItem );
}


export{
    linearSearch,
}