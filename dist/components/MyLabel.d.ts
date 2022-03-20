/// <reference types="react" />
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
    /**
     * Customize background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
