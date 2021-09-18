import React from "react";
import Image from "next/image";
import Avatar from "react-avatar";

import { useAuth } from "../../context/auth";

import WhirlpoolLogo from "../../../public/whirlpool-logo.png";

import { Container, UserArea, UserImage, UserName } from "./styles";

export function Header() {
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
        <UserArea>
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
    </Container>
  );
}
