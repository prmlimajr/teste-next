import React, { useState } from "react";
import Image from "next/image";
import Avatar from "react-avatar";
import { useAuth } from "../../context/auth";

import { Dropdown } from "../Dropdown";

import WhirlpoolLogo from "../../../public/whirlpool-logo.png";
import { Container, UserArea, UserImage, UserName } from "./styles";

export function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const { user } = useAuth();

  return (
    <Container>
      <Image
        src={WhirlpoolLogo}
        alt="Whirlpool logo"
        width="200px"
        height="70px"
      />

      {user && (
        <UserArea onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
          {user.image ? (
            <UserImage
              src={user.image}
              alt={user.name}
              width="40px"
              height="40px"
            />
          ) : (
            <Avatar name={user.name} size="40" round={true} />
          )}

          <UserName>{user.name}</UserName>
        </UserArea>
      )}

      {isDropdownVisible && (
        <Dropdown
          toggleDropdown={() => setIsDropdownVisible(!isDropdownVisible)}
        />
      )}
    </Container>
  );
}
