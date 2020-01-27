

class LinkedListNode{
    data: any;
    next: null | LinkedListNode;

    constructor( data: any ){
        this.data = data;
        this.next = null;
    }

}

class LinkedList{

    head: null | LinkedListNode;
    tail: null | LinkedListNode;
    count: number;

    constructor(){

        this.head = null;
        this.tail = null;
        this.count = 0;

    }

    
}