// --- Directions
// Implement classes Node and Linked Lists
// Additionally see 'directions' document for visual description
/**
 * Creates a class instance to represent a node.
 * The node should have two properties, 'data' and 'next'.
 * Accept both of these as arguments to the 'Node' constructor,
 * then assign them to the instance as properties *'data' and 'next'.
 * If 'next' is not provided to the constructor, then default its value to be 'null'.
 */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Create a class to represent a linked list. When created,
 * a linked list should have *no* head node associated with it.
 * The LinkedList instance will have one property, 'head',
 * which is a reference to the first node of the linked list.
 * By default 'head' should be 'null'.
 */
class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property.
     * Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.
     * @param {*} data
     * @example
     * const list = new LinkedList();
     * list.insertFirst('Hi There');
     */
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    /**
     * Returns the number of nodes in the linked list.
     * @returns number
     * @example
     * const list = new LinkedList();
     * list.insertFirst('ac');
     * list.insertFirst('dc');
     * list.size(); // returns 2
     */
    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    /**
     * Returns the first node of the linked list.
     * @returns Node
     * @example
     * const list = new LinkedList();
       list.insertFirst('ac');
       list.insertFirst('dc');
       list.getFirst(); // returns Node instance with data 'ac'
     */
    getFirst() {
        return this.head;
    }

    /**
     *Returns the last node of the linked list
     * @returns Node
     * @example
     * const list = new LinkedList();
       list.insertFirst('ac');
       list.insertFirst('dc');
       list.getLast(); // returns node with data 'dc'
     */
    getLast() {
        if (!this.head) return null;

        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    /**
     * Empties the linked list of any nodes.
     * @example
     * const list = new LinkedList();
       list.insertFirst('ac');
       list.insertFirst('dc');
       list.clear();
       list.size(); // returns 0
     */
    clear() {
        this.head = null;
    }

    /**
     * Removes only the first node of the linked list.
     * The list's head should now be the second element.
     * const list = new LinkedList();
       list.insertFirst('ac');
       list.insertFirst('dc');
       list.removeFirst();
       list.getFirst(); // returns node with data 'ac'
     */
    removeFirst() {
        if (!this.head) return null;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
    }

    /**
     * Removes the last node of the chain
     * @example
     * const list = new LinkedList();
       list.insertFirst('ac');
       list.insertFirst('dc');
       list.removeLast();
       list.size(); // returns 1
       list.getLast(); // returns node with data of 'dc'
     */
    removeLast() {
        if (!this.head) return null;

        if (!this.head.next) {
            return this.clear();
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    /**
     * Inserts a new node with provided data at the end of the chain
     * @param {*} data
     * @example
     * const list = new LinkedList();
       list.insertFirst('ac');
       list.insertFirst('dc');
       list.insertLast('bc');
       list.getLast(); // returns node with data 'ac'
     */
    insertLast(data) {
        const node = this.getLast();
        if (!node) {
            this.insertFirst(data);
        } else {
            node.next = new Node(data);
        }
    }

    /**
     * Returns the node at the provided index
     * @param {*} index 
     * @returns Node
     * @example
     * const list = new List();
        list.insertFirst('ac');
        list.insertFirst('dc');
        list.insertFirst('bc');
        list.getAt(1); // returns node with data 'dc'
     */
    getAt(index) {
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }

        return null;
    }

    /**
     * Removes node at the provided index
     * @param {*} index 
     * @example
     * const list = new List();
       list.insertFirst('ac');
       list.insertFirst('dc');
       list.insertFirst('bc');
       list.removeAt(1);
       list.getAt(1); // returns node with data 'ac'
     */
    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            return this.removeFirst();
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) return;

        previous.next = previous.next.next;
    }

    /**
     * Create an insert a new node at provided index. 
     * If index is out of bounds, add the node to the end of the list.
     * @param {*} data 
     * @param {*} index 
     * @examples
     * const list = new List();
       list.insertFirst('ac');
       list.insertFirst('dc');
       list.insertFirst('bc');
       list.insertAt('Hi', 1)
       list.getAt(1); // returns node with data 'Hi' 
     */
    insertAt(data, index) {
        if (!this.head || index === 0) {
            return this.insertFirst(data);
        }

        const previous = this.getAt(index - 1) || this.getLast();
        previous.next = new Node(data, previous.next);
    }

    /**
     * Calls the provided function with every node of the chain
     * @param {*} fn
     * @example
     * const list = new List();
       list.insertLast(1);
       list.insertLast(2);
       list.forEach(node => node.data += 10;);
       list.getAt(0); // Returns node with data '11'
     */
    forEach(fn) {
        if (!this.head) return;

        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    /**
     * Linked list should be compatible as the subject of a 'for...of' loop
     * @example
     * const list = new List();
       list.insertLast(1);
       list.insertLast(2);
       
       for (let node of list) {
         node.data += 10;
       }
       
       node.getAt(1); // returns node with data 11
     */
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
