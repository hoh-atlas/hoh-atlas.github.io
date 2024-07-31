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