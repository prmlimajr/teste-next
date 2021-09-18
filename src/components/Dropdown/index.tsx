import React, { useEffect, useRef } from "react";
import { FiHeart, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/auth";

import { Container, List, Item, Span } from "./styles";

interface DropdownProps {
  toggleDropdown: () => void;
  isOpen: boolean;
}

export function Dropdown({ toggleDropdown, isOpen }: DropdownProps) {
  const { signOut } = useAuth();
  const node = useRef<HTMLDivElement>(null);

  const handleSignOut = () => {
    toggleDropdown();
    signOut();
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleDropdown();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Container ref={node} style={isOpen ? null : { display: "none" }}>
      <List>
        <Item>
          <FiHeart size={20} />
          <Span>Favoritos</Span>
        </Item>

        <Item onClick={handleSignOut}>
          <FiLogOut size={20} />
          <Span>Sair</Span>
        </Item>
      </List>
    </Container>
  );
}
