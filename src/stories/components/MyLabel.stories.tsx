import { ComponentMeta, ComponentStory } from "@storybook/react";

import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel", // Este define el punto donde se agrupara en el menu lateral
  component: MyLabel, // El componente a usar/probar
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
); // Se construye nuestro componente, devolviendo una instancia nueva

export const Basic = Template.bind({}); // Se crea una copia de "Template" y la vuelve una historia
Basic.args = {
  //Se modifican los args que se pasaran a la nueva instancia
  size: "normal",
  allCaps: false, // true: capitaliza toda la palabra
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  fontColor: "#ef0202",
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: "h1",
  fontColor: "#eeeeee",
  backgroundColor: "#000000",
};

// CustomFontColor
// fontColor:
// size: h1
