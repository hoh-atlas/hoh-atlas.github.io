import resources from "./data/resources";
import { customizations } from "./data/customizations";
import chests from "./data/chests";
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

export const getItemData = (id) => {
    const foundResource = resources.find(elem => elem.id === id);
    if (foundResource) {
        return foundResource;
    }
    
    const foundCustomization = customizations.find(elem => elem.id === id);
    if (foundCustomization) {
        return foundCustomization;
    }

    const foundChest = chests.find(elem => elem.id === id);
    if (foundChest) {
        return foundChest;
    }
}

export const getItem = (id) => {
    const foundResource = resources.find(elem => elem.id === id);
    if (foundResource) {
        return <Icon resource={foundResource}/>
    }
    
    const foundCustomization = customizations.find(elem => elem.id === id);
    if (foundCustomization) {
        return <CustomizationPreview customization={foundCustomization}/>
    }
}

export const calculateDaysBetween = (startDate, endDate) => {
    const cleanStartDate = startDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const cleanEndDate = endDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
  
    const start = new Date(cleanStartDate);
    const end = new Date(cleanEndDate);
  
    const timeDifference = end - start;
  
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
};