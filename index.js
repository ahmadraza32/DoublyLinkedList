class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = null
            this.tail = null
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        if(this.length === 1){
            this.head = null
            this.tail = null
        }
        else{
            let temp = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }

        this.length--
        return this
    }
    shift(){
        if(!this.head) return undefined
        if(this.length === 1){
            this.head = null
            this.tail = null
        }
        else{
            let temp = this.head
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--

        return this
    }
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    
    get(index){
        if(index < 0 || index >= this.length) return undefined
        let current = this.head

        if(index < this.length/2){
            for(let i=0; i<index; i++){
                current = current.next
            }
        }
        else{
            current = this.tail
            for(let i=this.length-1; i>index; i--){
                current = current.prev
            }
        }

        return current
    }

    set(index, value){
        let tempNode = this.get(index)
        if(tempNode){
            tempNode.value = value
            return true
        }
        return false
    }

    insert(index, value){
        if(index===0) return this.unshift(value)
        if(index===this.length) return this.push(value)

        let before = this.get(index - 1)
        let after = before.next
        const newNode = new Node(value)

        before.next = newNode
        after.prev = newNode
        newNode.next = after
        newNode.prev = before

        return newNode
    }

    remove(index){
        if(index === this.length) return this.pop()
        if(index === 0) return this.unshift()

        let temp = this.get(index)
        if(temp){
            temp.prev.next = temp.next
            temp.next.prev = temp.prev

            temp.next = null
            temp.prev = null
            this.length--
            return true
        }
        return false
    }
}

let ll = new LinkedList(5)
ll.push(3)
ll.push(6)
ll.push(2)
let rm = ll.remove(2)
rm

ll.unshift(1)
ll.shift()