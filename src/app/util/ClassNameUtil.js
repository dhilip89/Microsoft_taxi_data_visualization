const namespace = 'wind-taxi';

// Get classname width namespace.
export function setNameSpace(className) {
    return `${namespace}-${className}`;
}

// Set class array namespace.
export function getClassSet(classNames) {
    return classNames
        .filter((c) => {
            return !!c;
        })
        .map((c) => {
            return setNameSpace(c);
        })
        .join(" ")
        .trim();
}