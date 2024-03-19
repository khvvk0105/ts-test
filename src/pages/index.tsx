import SideMenu from "@/components/SideMenu";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<String>("");
  let sideMenus = [
    {
      id: 0,
      title: "string",
      buttonText: "string1",
      contents: [
        {
          name: "string",
          price: 1,
          isVerified: false,
        },
      ],
    },
    {
      id: 1,
      title: "string",
      buttonText: "string2",
      contents: [
        {
          name: "string",
          price: 2,
          isVerified: false,
        },
      ],
    },
    {
      id: 2,
      title: "string",
      buttonText: "string3",
      contents: [
        {
          name: "string",
          price: 3,
          isVerified: false,
        },
      ],
    },
  ];
  return (
    <div>
      <div>
        {" "}
        {sideMenus.map((menu) => {
          return <SideMenu menu={menu} />;
        })}
      </div>
    </div>
  );
}
