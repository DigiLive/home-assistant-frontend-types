/**
 * Document-order comparator that works across shadow boundaries. Suitable as
 * the `Array.prototype.sort` callback for collections of nodes that may live
 * in different shadow trees.
 */
export declare const compareNodeOrder: (a: Node, b: Node) => number;
