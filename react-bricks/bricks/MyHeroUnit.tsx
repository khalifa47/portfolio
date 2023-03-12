import React from "react";
import { types } from "react-bricks/frontend";

//=============================
// Local Types
//=============================
type Padding = "big" | "small";

interface HeroUnitProps {
  padding: Padding;
  title: string;
  text: string;
}

//=============================
// Component to be rendered
//=============================
const MyHeroUnit: types.Brick<HeroUnitProps> = ({ padding }) => {
  return (
    <div
      className={`max-w-xl mx-auto px-6 ${
        padding === "big" ? "py-20" : "py-12"
      }`}
    >
      <iframe src="../../public/resume.pdf" width="100%" height="600px" />
    </div>
  );
};

//=============================
// Brick Schema
//=============================
MyHeroUnit.schema = {
  name: "my-hero-unit",
  label: "Custom Hero Unit",
  getDefaultProps: () => ({
    padding: "big",
    title: "This is a custom Hero Unit",
    text: "We are a high-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [
    {
      name: "padding",
      label: "Padding",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: "big", label: "Big Padding" },
          { value: "small", label: "Small Padding" },
        ],
      },
    },
  ],
};

export default MyHeroUnit;
