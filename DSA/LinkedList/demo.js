class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }

    // check Empty

    isEmpty(){
        return this.size === 0 ;
    }

    // Add Node using prepend , append , insert ;

    prepend(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{

            node.next = this.head ;
            this.head = node ;
        }
        this.size++ ;
    }


    append(value){

        let node = new Node(value) ;

        if(this.isEmpty()){
            this.head = node ;
        }else{

            let curr = this.head ;

            while(curr.next){

                curr = curr.next ;
            }
            curr.next = node ;
        }
        this.size++ ;

    }

    


    insert(value , index){

        if(index < 0 || index > this.size) return ;

        if(index === 0){
            this.prepend(value)
        }else if(index === this.size){
            this.append(value);
        }else{

            let curr = this.head ;

            let node = new Node(value)

            for(let i=0 ;i< index-1 ; i++){
                curr = curr.next ;
            }

            node.next = curr.next
            curr.next = node 

            this.size++ ;
        }
    }

    // Print 

    display(){

        let curr = this.head ;

        let listValues = '' ;

        while(curr){
            listValues += `${curr.value} ` ;
            curr = curr.next ;
        }

        return listValues ;
    }

    // Remove Node

    removeByValue(value){

        if(this.head.value === value){
            this.head = this.head.next ;
            this.size-- ;
            return ;
        }
        let curr = this.head ;
        let prev = null ;

        while( curr && curr.value !== value){
            prev = curr ;
            curr = curr.next ;
        }

        if(curr){
            if(!curr.next){
                prev.next = null ;
            }else{
                prev.next = curr.next ;
            }
            this.size-- ;
        }

    }

    removeByIndex(index){

        if(index < 0 || index > this.size) return ;

        if(index === 0){
            this.head = this.head.next ;
            this.size-- ;
        }

        let curr = this.head ;

        let prev = null ;

        for(let i=0;i< index ; i++){
            prev = curr ;
            curr = curr.next ;
        }

        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }

        return curr.value ;
    }

    //  reverse 

    reverse(){

        let curr = this.head ;
        let prev = null ;

        while(curr){
            let next  =  curr.next ;
            curr.next = prev ;
            prev = curr ;
            curr = next ;
        }
        this.head = prev ;
    }

    // Middle Element 

    midElement(){
        let slow = this.head ;
        let fast = this.head ;

        while(fast!== null && fast.next !== null){

            slow = slow.next ;
            fast = fast.next.next ;
        }

        return slow.value ;
    }

    // duplicates 

    findDuplicates(){

        let set = new Set()
        let arr = []

        let curr = this.head ;



        while(curr){

            if(set.has(curr.value)){
                arr.push(curr.value)
            }else{
                set.add(curr.value)
            }

            curr = curr.next ;
        }

        for(let i=0;i< arr.length;i++){
            this.removeByValue(arr[i])
        }
    }

    removeDuplicates(){

        let set = new Set()
        let duplicates = new Set()
        

        let curr = this.head ;



        while(curr){

            if(set.has(curr.value)){
                duplicates.add(curr.value)
            }else{
                set.add(curr.value)
            }

            curr = curr.next ;
        }

       curr = this.head ;
       let prev = null ;

       while(curr){


        if(duplicates.has(curr.value)){

            if(prev === null){
                this.head = this.head.next ;
            }else{
                
                prev.next = curr.next ;
            }

            this.size-- ;

        }else{
            prev = curr ;
        }

        curr = curr.next ;
       }
    }

    // convert to Array

    toArray(){

        let curr = this.head ;

        let arr = []

        while(curr){

            arr.push(curr.value)
            curr = curr.next ;
        }
        return arr ;
    }


    evenValues(){

        let curr = this.head ;
        let arr = []

        while(curr){

            if(curr.value %2 === 0){
                arr.push(curr.value)
            }
            curr = curr.next ;
        }
        return arr ;
    }
}

let list = new LinkedList();

list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)


list.insert(5,0)
list.insert(55,6)
list.insert(25,3)

list.append(50)
list.append(50)
list.append(50)


list.removeByValue(25)
console.log('RemoveByIndex : ' , list.removeByIndex(2))

console.log('Display : ' ,list.display())
list.reverse()
console.log('Reverse : ', list.display())
console.log('MidElement : ', list.midElement()) ;
list.removeDuplicates()
console.log('Duplicates : ' ,list.display());

console.log('Array : ',list.toArray())
console.log('Even Values  : ',list.evenValues())



// functions

function arrToLinkedList(arr){

    let list = new LinkedList()

    for(let i=0;i<arr.length ; i++){
        list.append(arr[i])
    }

    return list.display()
}

let arr = [1,2,3,4,5]

console.log(arrToLinkedList(arr))