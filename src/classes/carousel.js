class Node {
  constructor(url) {
    this.url = url;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.current = null;
  }

  push(url) {
    const newNode = new Node(url);

    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = this.head.prev;
      this.head.prev.next = newNode;
      this.head.prev = newNode;
    }
    this.current = newNode;
  }

  pop() {
    if (!this.head) return;

    if (this.head.next === this.head) {
      this.head = null;
      this.current = null;
    } else {
      this.head.prev.next = this.head.next;
      this.head.next.prev = this.head.prev;
      this.head = this.head.next;
      this.current = this.head;
    }
  }
}

export default class Carousel {
  constructor() {
    this.images = new CircularDoublyLinkedList();
    this.currentImage = null;
  }

  // 이미지를 캐러셀에 추가하는 함수
  addImage(imageUrl) {
    this.images.push(imageUrl);
  }

  // 다음 이미지로 이동하는 함수
  nextImage() {
    if (!this.currentImage) {
      this.currentImage = this.images.head;
    } else {
      this.currentImage = this.currentImage.next;
    }

    return this.currentImage;
  }
  prevImage() {
    if (!this.currentImage) {
      this.currentImage = this.images.head;
    } else {
      this.currentImage = this.currentImage.prev;
    }

    return this.currentImage;
  }
}
