class ListNode extends AbstractNode {
    constructor(nodeKey, nodeValue, nodeNext) {
        super(nodeKey, nodeValue);
        this._next = nodeNext;
    }

    get key() {
        return this._keys[0];
    }

    get value(){
        return this._values[0];
    }

    set value(value){
        this._values[0]=value;
    }

    get next() {
        if (typeof this._next !== 'undefined') {
            return this._next;
        }
        return null;
    }

    set next(newNext) {
        this._next = newNext;
    }
}

class List {
    constructor() {
        this._root = null;
    }

    get root() {
        return this._root;
    }

    clearList() {
        this._root = null;
    }

    insertKey_begin(newKey, newValue) {
        let tmp = new ListNode(newKey, newValue, null);
        tmp.next = this._root;
        this._root = tmp;
    }

    insertKey_end(newKey,newValue) {
        if (this._root === null) {
            this._root = new ListNode(newKey, newValue, null);
        }
        else {
            let tmp = this._root;
            while (tmp.next != null) {
                tmp = tmp.next;
            }
            tmp.next = new ListNode(newKey, newValue, null);
        }
    }

    insertKey_afterKey(newKey, newValue, key) {
        let tmp = this.searchKey(key);
        if (tmp != null) {
            let newNode = new ListNode(newKey, newValue, tmp.next);
            tmp.next = newNode;
        }
    }

    searchKey(newKey) {
        if (this._root === null)
            return null;
        let tmp = this._root;
        while (tmp != null) {
            if (tmp.key === newKey)
                return tmp;
            tmp = tmp.next;
        }
        return null;
    }

    deleteKey(newKey) {
        if (this._root === null)
            return;
        if (this._root.key === newKey) {
            this._root = this._root.next;
        }
        else {
            let tmp = this._root;
            while (tmp.next != null) {
                if (tmp.next.key === newKey) {
                    tmp.next = tmp.next.next;
                    break;
                }
                tmp = tmp.next;
            }
        }
    }
}