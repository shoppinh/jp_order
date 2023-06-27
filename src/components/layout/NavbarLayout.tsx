import React, { ReactElement } from "react";
import Container from "../Container";
import Navbar from "../navbar/Navbar";
import AppLayout from "./AppLayout";

const NavbarLayout: React.FC = ({
  children,
}: {
  children?: ReactElement[] | ReactElement | any;
}) => {
  return (
    <AppLayout navbar={<Navbar />}>
      <Container my="2rem">{children}</Container>
    </AppLayout>
  );
};

export default NavbarLayout;
