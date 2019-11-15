import React, { useState } from 'react';

import styled from 'styled-components'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const List = styled.ul`
    margin: auto;
    width: calc(100% - 20px);
    padding-left: 0;
`;

const Header = styled.li`
    padding: 5px;
    color: #888;
    font-weight: bold;
    list-style-type: none;
`;

const Item = styled.li`
  display: block;
  border-top: 1px solid #888;
  list-style-type: none;
  padding: 5px 0;
  &:hover {
      background: #EEE;
  }  
`;

const SortableItem = SortableElement(Item);

const SortableList = SortableContainer(props => {
    return (
        <List>
            <Header>Name</Header>
            {
                props.items.map((item, index) => (
                    <SortableItem key={`item-${index}`} index={index}>{item}</SortableItem>
                ))
            }
        </List>
    );
});

export default function () {
    const [items, setItems] = useState(["First Item", "Second Item", "Third Item"]);

    return <SortableList items={items} onSortEnd={
        ({oldIndex, newIndex}) => {
            const removed = items.slice(0, oldIndex)
                .concat(items.slice(oldIndex+1));

            setItems(
                removed.slice(0,newIndex)
                    .concat([items[oldIndex]])
                    .concat(removed.slice(newIndex))
            );
        }
    }/>
};