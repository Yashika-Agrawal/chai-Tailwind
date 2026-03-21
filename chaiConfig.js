// chaiConfig.js
// 🧠 Property mapping (WHAT to apply)
export const chaiClasses = {
    // ===== Spacing =====
    p: "padding",
    pt: "paddingTop",
    pb: "paddingBottom",
    pl: "paddingLeft",
    pr: "paddingRight",
  
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
    border: "borderWidth",
    borderc: "borderColor", // cleaner naming
  
    // ===== Typography =====
    text: "color",
    fs: "fontSize",
    fw: "fontWeight",
    ta: "textAlign",
  
    // ===== Background =====
    bg: "backgroundColor",
  
    // ===== Layout =====
    display: "display",
    justify: "justifyContent",
    items: "alignItems",
  
    // ===== Effects =====
    shadow: "boxShadow",
  
    // ===== Misc =====
    overflow: "overflow",
    position: "position",
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom",

    // layout
    flex: "display",
    flexcol: "flexDirection",

    // spacing helpers
    gap: "gap",

    // alignment
    justify: "justifyContent",
    items: "alignItems",

    // margin auto (for centering)
    mx: "marginLeft", // partial hack
    my: "marginTop",

    // max width
    maxw: "maxWidth",

    flexwrap: "flexWrap",
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
  
  
  // 📦 Value system (PROPERTY-SCOPED)
  export const chaiValues = {
  
    // ===== Shadow =====
    shadow: {
      sm: "0 1px 2px rgba(0,0,0,0.05)",
      md: "0 4px 6px rgba(0,0,0,0.1)",
      lg: "0 10px 15px rgba(0,0,0,0.15)",
    },
  
    // ===== Font Size =====
    fs: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
    },
  
    // ===== Border Radius =====
    rounded: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      full: "9999px",
    },
  
    // ===== Border Width =====
    border: {
      thin: "1px",
      medium: "2px",
      thick: "4px",
    },
  
    // ===== Width / Height =====
    w: {
      full: "100%",
      half: "50%",
    },
  
    h: {
      screen: "100vh",
    },
  
    // ===== Display =====
    display: {
      block: "block",
      flex: "flex",
      none: "none",
    },
  
    // ===== Flex =====
    justify: {
      center: "center",
      between: "space-between",
    },
  
    items: {
      center: "center",
    },
  
    // ===== Typography =====
    fw: {
      light: 300,
      normal: 400,
      bold: 700,
    },
  
    ta: {
      left: "left",
      center: "center",
      right: "right",
    },
  
    // ===== Overflow =====
    overflow: {
      hidden: "hidden",
      scroll: "scroll",
      auto: "auto",
    },
  
    // ===== Position =====
    position: {
      absolute: "absolute",
      relative: "relative",
      fixed: "fixed",
    },
    maxw: {
        xl: "1100px",
      },
      
      mx: {
        auto: "auto",
      },
      
      gap: {
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
      
      flex: {
        flex: "flex",
      },
      flexwrap: {
        wrap: "wrap",
      },
      
      w: {
        full: "100%",
        half: "50%",
        third: "33.33%",
      },

    flexcol: {
      flexcol: "column" // This allows chai_flexcol (no dash) to work
    },
    
    flexrow: {
      flexrow: "row"
    }

    
  };