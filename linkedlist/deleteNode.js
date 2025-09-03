function deleteNode(head, x) {
  // code here
  if (head === null) return null;

  if (x === 1) return head.next;

  let curr = head;
  let count = 1;

  while (curr !== null && count < x - 1) {
    curr = curr.next;
    count++;
  }

  if (curr !== null && curr.next !== null) {
    curr.next = curr.next.next;
  }
  return head;
}
