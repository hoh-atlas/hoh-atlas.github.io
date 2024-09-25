import resources from "./data/resources";
import customizations from "./data/customizations";
import Icon from "./Icon";
import CustomizationPreview from "./CustomizationPreview";

export const createPathFromParameters = (...parameters) => {
    const validParameters = parameters.filter(param => param !== undefined && param !== null && param !== "");
    const path = `/${validParameters.join('/')}`;
    return path;
}

export const leftJoinArrays = (left, right) => {
    const rightMap = right.reduce((map, oneRight) => {
        map[oneRight.id] = oneRight;
        return map;
    }, {});

    const joined = left.map(oneLeft => ({
        ...oneLeft,
        ...rightMap[oneLeft.id]
    }));

    return joined;
}

export const getItem = (id) => {
    const foundResource = resources.find(elem => elem.id === id);
    if (foundResource) {
        return <Icon resource={foundResource}/>
    }
    
    const foundCustomization = customizations.find(elem => elem.id === id);
    if (foundCustomization) {
        console.log(foundCustomization);
        return <CustomizationPreview customization={foundCustomization}/>
    }
}