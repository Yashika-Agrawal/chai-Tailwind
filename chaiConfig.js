// chaiConfig.js

// 🧠 Property mapping (WHAT to apply)
export const chaiClasses = {
    // ===== Spacing =====
    // Padding
    p: "padding",
    pt: "paddingTop",
    pb: "paddingBottom",
    pl: "paddingLeft",
    pr: "paddingRight",

    // Margin
    m: "margin",
    mt: "marginTop",
    mb: "marginBottom",
    ml: "marginLeft",
    mr: "marginRight",

    // Gap
    g: "gap",
    gx: "columnGap",
    gy: "rowGap",

    // ===== Size =====
    w: "width",
    h: "height",

    // ===== Border =====
    rounded: "borderRadius",

    // ===== Typography =====
    text: "color",
    fs: "fontSize",
    fw: "fontWeight",
    ta: "textAlign",

    // ===== Background =====
    bg: "backgroundColor",

    // ===== Layout =====
    display: "display",
    flex: "display",

    // Flex alignment
    justify: "justifyContent",
    items: "alignItems"
};



// 🎨 Color values
export const chaiColors = {
    red: "red",
    blue: "blue",
    green: "green",
    black: "black",
    white: "white",
    gray: "gray",
    yellow: "yellow"
};



// 📦 Keyword values (non-numeric, non-color)
export const chaiValues = {
    // display
    block: "block",
    inline: "inline",
    hidden: "none",
    flex: "flex",

    // flex alignment
    center: "center",
    between: "space-between",
    around: "space-around",
    start: "flex-start",
    end: "flex-end",

    // text align
    left: "left",
    right: "right",

    // font weight
    light: 300,
    normal: 400,
    bold: 700
};