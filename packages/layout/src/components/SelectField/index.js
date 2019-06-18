import React from "react";
import Downshift from "downshift";
import styled, { css } from "styled-components";

import { Loader, LOADER_SIZE } from "../Loader";
import { useGetItems } from "./useGetItems";
import { Input } from "../Input";
import { Label } from "../Label";
import { Field } from "../Field";

const Message = styled.li`
  color: rgba(0, 0, 0, 0.87);
  line-height: 1em;
  font-size: 1rem;
  padding: 0.8em 1.1em;
`;

const ErrorMessage = styled(Message)`
  color: red;
`;

const Item = styled(Message)`
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      background: rgba(0, 0, 0, 0.03);
      color: rgba(0, 0, 0, 0.95);
    `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: rgba(0, 0, 0, 0.95);
      font-weight: bold;
    `}
`;

const BaseMenu = styled.ul`
  background-color: white;
  border-bottom-width: 1px;
  border-color: #96c8da;
  border-left-width: 1px;
  border-radius: 0 0 5px 5px;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 0;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  margin-top: 0;
  max-height: 20rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  transition: opacity 0.1s ease;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      border: none;
    `}
`;

// TODO: #17 new styled-components use forwardRef under the hood so this may be no longer needed
const Menu = React.forwardRef((props, ref) => (
  <BaseMenu innerRef={ref} {...props} />
));

const ControllerButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 45px;
`;

const SelectInput = styled(Input)`
  padding-right: 45px;
`;

const ArrowIcon = ({ isOpen }) => (
  <svg
    viewBox="0 0 20 20"
    preserveAspectRatio="none"
    width={16}
    fill="transparent"
    stroke="#979797"
    strokeWidth="1.1px"
    transform={isOpen ? "rotate(180)" : undefined}
  >
    <path d="M1,6 L10,15 L19,6" />
  </svg>
);

const XIcon = () => (
  <svg
    viewBox="0 0 20 20"
    preserveAspectRatio="none"
    width={12}
    fill="transparent"
    stroke="#979797"
    strokeWidth="1.1px"
  >
    <path d="M1,1 L19,19" />
    <path d="M19,1 L1,19" />
  </svg>
);

const Items = ({
  getItems,
  getItemProps,
  selectedItem,
  inputValue,
  highlightedIndex,
}) => {
  const { isLoading, error, items } = useGetItems({ getItems, inputValue });

  if (error) {
    return <ErrorMessage>An error occurred</ErrorMessage>;
  }

  if (isLoading) {
    return <Loader size={LOADER_SIZE.small} />;
  }

  if (items.length > 0) {
    return items.map((item, index) => (
      <Item
        key={item.id || index}
        {...getItemProps({
          item,
          index,
          isActive: highlightedIndex === index,
          isSelected: selectedItem === item,
        })}
      >
        {item.value}
      </Item>
    ));
  }

  return <Message>No items</Message>;
};

const SelectField = ({ onChange, getItems, label, placeholder }) => (
  <Downshift
    onChange={onChange}
    itemToString={item => (item ? item.value : "")}
  >
    {({
      getRootProps,
      getLabelProps,
      getInputProps,
      getToggleButtonProps,
      getMenuProps,
      getItemProps,
      isOpen,
      clearSelection,
      selectedItem,
      inputValue,
      highlightedIndex,
    }) => (
      <Field {...getRootProps()}>
        <Label {...getLabelProps()}>{label}</Label>
        <div style={{ position: "relative" }}>
          <SelectInput
            {...getInputProps({
              placeholder,
            })}
          />
          {selectedItem ? (
            <ControllerButton
              onClick={clearSelection}
              aria-label="clear selection"
            >
              <XIcon />
            </ControllerButton>
          ) : (
            <ControllerButton {...getToggleButtonProps()}>
              <ArrowIcon isOpen={isOpen} />
            </ControllerButton>
          )}
        </div>
        <Menu {...getMenuProps({ isOpen })}>
          {isOpen && (
            <Items
              getItems={getItems}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
              inputValue={inputValue}
              selectedItem={selectedItem}
            />
          )}
        </Menu>
      </Field>
    )}
  </Downshift>
);

export { SelectField };
