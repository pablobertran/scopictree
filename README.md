# scopictree
Scopic Software - Checkbox Tree - Developer test

Given this data structure in JSON format:
 
[{"name":"one","children":[{"name":"one-a"},{"name":"one-b","children":[{"name":"one-b-a"}]}]},{"name":"two","children":[{"name":"two-a","children":[{"name":"two-a-a"}]}]}]
 
Note: this is data structure, not the data itself. The program should be able to parse this kind of data structure.
 
Every node has a name and its children.
 
Implement a page that contains:
 
1. A text area to paste this data structure. There can be a button to activate the process (parse data -> show the UI as below) or it can change in real time. It's up to you.
 
2. A component that visualizes this data structure by listing all nodes in a tree-like way. Every node has one check box to its left that uses property "name" for label. Checkbox should follow the rules below:
    - When we check/uncheck any check box, all of its children nodes should be checked/unchecked.
    - If all children of a node is unchecked, this node should be unchecked too.
    - If any node is checked, its parent node should be checked too. That means we should maintain the consistency of check/uncheck state between a node and its children.
 
Note: you are not required to use a tree component (if it is too difficult) because Expand/Collapse is not the requirement. What is required here is the Selected (Checked) state of every node.
 
3. Optional: a text area that lists what nodes are being checked (comma-separated name list is ok) with the rules below:
    - If all children of a node are checked, don't list all its children, list that node only.
    - Otherwise, list leaf nodes.
