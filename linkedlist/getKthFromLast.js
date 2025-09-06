// https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/0

function getKthFromLast(head, k) {
  // code here
  let curr = head;
  let size = 0;

  while (curr !== null) {
    curr = curr.next;
    size++;
  }

  if (k > size) return -1;

  curr = head;
  let position = size - k + 1;
  let count = 1;

  while (curr !== null && count < position) {
    curr = curr.next;
    count++;
  }
  return curr ? curr.data : -1;
}
