import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Text to display in the label
   */
  label: string;
  /**
   * Label size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Change label text to CAPS
   */
  allCaps: boolean;
  /**
   * Change label color
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Customize font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
