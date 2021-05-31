import { Node } from "./node";

interface IStack<T> {
  size(): number;
  // push(data: T): Node<T>;
  // pop(): void;
  //
}

export class Stack<T> implements IStack<T> {
  private peek: Node<T> | null | undefined;
  capacity: number;
  _size: number;

  constructor(capacity: number) {
    this.peek = null;
    this.capacity = capacity;
    this._size = 0;
  }

  private createNode(value: string): Node<T> {
    return new Node(value);
  }

  private isEmpty(): boolean {
    return this._size <= 0;
  }

  public size(): number {
    return this._size;
  }

  public push(value: string) {
    const node = this.createNode(value);
    let temp: Node<T> | null = null;

    if (!this.peek) {
      this.peek = node;
    } else {
      temp = this.peek;
      node.next = temp;
      this.peek = node;
    }

    this._size = this._size + 1;
  }

  public pop() {
    let temp: Node<T> | null | undefined = null;
    let peek: Node<T> | null | undefined = null;

    if (!this.isEmpty()) {
      temp = this.peek;
      peek = temp?.next;
      this.peek = peek;
    } else {
      this.peek = null;
    }

    this._size = this._size - 1;
  }

  public getItems(): Array<string> {
    let current = this.peek;
    const items: Array<string> = [];

    while (current) {
      items.push(current.data);
      current = current.next;
    }

    return items;
  }
}
