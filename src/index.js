
import { chaiClasses, chaiColors, chaiValues } from "./chaiConfig.js";

const allElements=[document.body, ...document.body.querySelectorAll("*")]

export function initChai () {
    allElements.forEach((ele) => {
        const classListArray=[...ele.classList]
        const filterChaiArray=classListArray.filter((cls)=>{
            return cls.startsWith("chai_")
        })
        if (filterChaiArray.length === 0) return;
        filterChaiArray.forEach((chaiClass) => {
            let classes = chaiClass.slice(5);
            let property, scaleOrColor;
    
            if (classes.includes("-")) {
                const firstDashIndex = classes.indexOf("-");
                property = classes.slice(0, firstDashIndex);
                scaleOrColor = classes.slice(firstDashIndex + 1);
            } else {
                property = classes; //for chai_flex
                scaleOrColor = null;
            }
        
            let cssProperty = chaiClasses[property];
            if (!cssProperty) return;
        
            if (!scaleOrColor) {
                const valueGroup = chaiValues[property];
            
                if (valueGroup && valueGroup[property]) {
                    ele.style[cssProperty] = valueGroup[property];
                }
            
                return;
            }
            // ✅ Custom arbitrary value support
            if (scaleOrColor && scaleOrColor.startsWith("[") && scaleOrColor.endsWith("]")) {
                const customValue = scaleOrColor.slice(1, -1); // remove [ ]
    
                ele.style[cssProperty] = customValue;
                return;
            }
            // ✅ 2. Colors (keep as is)
            if (property === "text" || property === "bg" || property === "borderc") {
                const colorValue = chaiColors[scaleOrColor];
                if (!colorValue) return;
        
                ele.style[cssProperty] = colorValue;
                return;
            }
        
            // ✅ 3. NEW: Scoped values
            const valueGroup = chaiValues[property];
        
            if (valueGroup && scaleOrColor in valueGroup) {
                ele.style[cssProperty] = valueGroup[scaleOrColor];
                return;
            }
        
            // ✅ 4. Fallback → spacing numbers
            const scale = Number(scaleOrColor);
            if (!isNaN(scale)) {
                ele.style[cssProperty] = `${scale * 4}px`;
                return;
            }
        });
    });
}
initChai();

