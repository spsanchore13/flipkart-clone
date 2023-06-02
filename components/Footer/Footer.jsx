import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Copyright from "./Copyright";
import Help from "./Help";
import Office from "./Office";

const Footer = () => {
  const FooterMenu = [
    {
      menu: "About",
      submenu: [
        {
          name: "Contact Us",
          href: "#",
        },
        {
          name: "About Us",
          href: "#",
        },
        {
          name: "Careers",
          href: "#",
        },
        {
          name: "Flipkart Stories",
          href: "#",
        },
        {
          name: "Flipkart Wholesale",
          href: "#",
        },
        {
          name: "Corporate Information",
          href: "#",
        },
      ],
    },
    {
      menu: "Help",
      submenu: [
        {
          name: "Payments",
          href: "#",
        },
        {
          name: "Shipping",
          href: "#",
        },
        {
          name: "Cancellation & Returns",
          href: "#",
        },
        {
          name: "FAQ",
          href: "#",
        },
        {
          name: "Report Infringement",
          href: "#",
        },
      ],
    },
    {
      menu: "Consumer Policy",
      submenu: [
        {
          name: "Return Policy",
          href: "#",
        },
        {
          name: "Terms Of Use",
          href: "#",
        },
        {
          name: "Security",
          href: "#",
        },
        {
          name: "Privacy",
          href: "#",
        },
        {
          name: "Sitemap",
          href: "#",
        },
        {
          name: "Grievance Redressal",
          href: "#",
        },
        {
          name: "EPR Compliance",
          href: "#",
        },
      ],
    },
    {
      menu: "Social",
      submenu: [
        {
          name: "Facebook",
          href: "#",
        },
        {
          name: "Twitter",
          href: "#",
        },
        {
          name: "YouTube",
          href: "#",
        },
      ],
    },
  ];

  return (
    <Stack
      w="100%"
      backgroundColor="#172337"
      px={5}
      py={10}
      justify="space-between"
    >
      <Stack display="flex" flexDirection="row" justify="space-evenly">
        <Help menu={FooterMenu} />
        <Divider orientation="vertical" />
        <Office />
      </Stack>
      <Divider />
      <Copyright />
    </Stack>
  );
};

export default Footer;
