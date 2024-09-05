/* initializing linked list and its basic operations
*/


//initializing the node with its next pointer value null.

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    };

}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("Empty List")
        }else{
            let cur = this.head;
            let listValues = ""
            while(cur){
                 listValues += `${cur.value}-> `
                cur = cur.next;
            }
            console.log(listValues)
        }
    }

}

const list = new LinkedList();


list.prepend(1)
list.prepend(11)
list.prepend(12)
list.prepend(13)
// console.log(list.print);
list.print();
