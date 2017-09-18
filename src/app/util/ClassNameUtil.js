const namespace = 'wind-taxi';

// Get classname width namespace.
export function setNameSpace(className) {
   return `${namespace}-${className}`;
}

// Set class array namespace.
export function getClassSet(classNames) {
   return classNames
      .filter((c) => { return !!c; })
      .map((c) => {
         return setNameSpace(c);
      })
      .reduce((c1, c2) => { return `${c1} ${c2}` })
      .trim();
}