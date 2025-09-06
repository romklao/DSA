// https://www.geeksforgeeks.org/problems/node-at-a-given-index-in-linked-list/1

function GetNth(head, index) {
  // Code Here

  let curr = head;
  let count = 1;

  while (curr !== null && count < index) {
    curr = curr.next;
    count++;
  }
  if (curr === null) return -1;

  return curr.data;
}
