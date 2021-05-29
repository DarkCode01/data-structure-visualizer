// TODO: add reverse method

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  get_last() {
    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }

    return curr;
  }

  append(node) {
    if (this.head) {
      let last = this.get_last();
      last.next = node;
    } else {
      this.head = node;
    }
  }

  prepend(node) {
    if (this.head) {
      let prev = this.head;
      node.next = prev;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  pop() {
    let prev = this.head;
    let curr = this.head.next;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
  }

  // return nodes values on array
  get_nodes() {
    let temp = [];
    let curr = this.head;

    while (curr) {
      temp.push(curr.value);
      curr = curr.next;
    }

    return temp;
  }
}

export { LinkedList, Node };
