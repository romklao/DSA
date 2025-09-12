// https://leetcode.com/problems/intersection-of-two-linked-lists/

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let a = headA,
    b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
