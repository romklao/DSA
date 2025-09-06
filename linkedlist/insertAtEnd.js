//https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1

function insertAtEnd(head, x) {
  // code here
  let newNode = new Node(x);

  if (head === null) {
    return newNode;
  }

  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = newNode;
  return head;
}
