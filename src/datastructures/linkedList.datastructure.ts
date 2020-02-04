

class LinkedListNode<T>{

    data: T;
    next: null | LinkedListNode<T>;

    constructor( data: T, next = null ){
        this.data = data;
        this.next = next;
    }

}

export{
    LinkedListNode,
}