import { chaiClasses, chaiColors, chaiValues } from "./chaiConfig.js";

const allElements=[...document.body.querySelectorAll("*")]

allElements.forEach((ele) => {
    const classListArray=[...ele.classList]
    const filterChaiArray=classListArray.filter((cls)=>{
        return cls.startsWith("chai_")
    })
    console.log(filterChaiArray, "filter")
    if (filterChaiArray.length === 0) return;
    filterChaiArray.forEach((chaiClass) => {
        // remove "chai_"
        let classes = chaiClass.slice(5);
        let [property, scaleOrColor] = classes.split("-");

        let cssProperty = chaiClasses[property];
        if (!cssProperty) return;

        //no value class present 
        if (!scaleOrColor) {
            const value = chaiValues[property];
            if (!value) return;
        
            ele.style[cssProperty] = value;
            return;
        }
        // Color classes
        if (property === "text" || property === "bg") {
            const colorValue = chaiColors[scaleOrColor];
            if (!colorValue) return;

            ele.style[cssProperty] = colorValue;
            return;
        }

        // Keyword values (center, bold, etc)
        if (scaleOrColor in chaiValues) {
            ele.style[cssProperty] = chaiValues[scaleOrColor];
            return;
        }

        // 4. Spacing (fallback)
        const scale = Number(scaleOrColor);
        if (isNaN(scale)) return;

        ele.style[cssProperty] = `${scale * 4}px`;
                
            });
});

