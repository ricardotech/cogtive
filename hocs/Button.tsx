import React from "react";

export default function Button({
  color = "#3D69F4",
  onPress = () => {},
  underline = false,
  ml = "",
  mr = "",
  mt = 0,
  mb = 0,
  fontSize = "",
  label = "Talk to an Expert",
}: {
  color?: string;
  onPress?: any;
  underline?: boolean;
  ml?: string | number;
  mr?: string | number;
  mt?: string | number;
  mb?: string | number;
  label?: string;
  fontSize?: string | number;
}) {
  return (
    <div
      onClick={onPress}
      style={{
        cursor: "pointer",
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
        display: "flex",
        justifyContent: underline ? "flex-start" : "center",
        alignItems: "center",
        height: underline ? "auto" : 55,
        backgroundColor: underline ? "transparent" : "#3D69F4",
        width: 330,
        borderRadius: 10,
      }}
    >
      <a
        style={{
          cursor: "pointer",
          fontSize: fontSize ? fontSize : underline ? "1.4rem" : "1.2rem",
          color: color,
          fontFamily: "Roboto",
          textDecorationLine: underline ? "underline" : "none",
        }}
      >
        {label}
      </a>
    </div>
  );
}
