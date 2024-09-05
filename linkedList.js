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
//O(1)
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


    //o(n);
    append(value){
        const node = new Node(value);
         if(this.isEmpty()){
            this.head = node;
         }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
         }

        this.size++
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            return;
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i =0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }

    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return null;
        }
        let removedNode;
        if(index ===0){
            removedNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i =0; i<index-1;i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;

    }

    // removeValue(value){
    //     if(this.isEmpty){
    //         return null;
    //     }
    //     if(this.head.value === value){
    //         this.head = this.head.next;
    //         this.size--;
    //         return value;
    //     }else{
    //         let prev = this.head;
    //         while(prev.next && prev.next.value !== value){
    //             prev = prev.next;
    //         }
    //         if(prev.next){
    //             let removeValue = prev.next;
    //             prev.next = removeValue.next;
    //             this.size--;
    //             return value;
    //         }
    //         return null;
    //     }
       
    // }


    removeValue(value) {
        if (this.isEmpty()) {
          return null;
        }
        if (this.head.value === value) {
          this.head = this.head.next;
          this.size--;
          return value;
        } else {
          let prev = this.head;
          while (prev.next && prev.next.value !== value) {
            prev = prev.next;
          }
          if (prev.next) {
            let removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return value;
          }
          return null;
        }
      }

      search(value){
        if (this.isEmpty()) {
            return -1;
          }

        let cur = this.head;
        let i =0;
        while(cur){
            if(cur.value === value){
                return i;
            }
            cur = cur.next;
            i++;
        }
        return -1;
      }

      reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
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


list.append(1)
list.append(11)
list.append(12)
list.prepend(13)
// console.log(list.print);

list.insert(30,3);
list.print();

// list.removeFrom(1);
// list.print();

// list.removeValue(11)
// list.print();

// console.log(list.search(12));

list.reverse();
list.print();
