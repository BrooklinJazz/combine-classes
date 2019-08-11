export const combineClasses = (
  ...classes: Array<string | [boolean, string] | undefined>
): string => {
  return classes.reduce((classNames: string, currentClassName) => {
    if (Array.isArray(currentClassName)) {
      return currentClassName[0]
        ? classNames + " " + currentClassName[1]
        : classNames;
    } else if (currentClassName) {
      return classNames + " " + currentClassName;
    } else {
      return classNames
    }
  }, "");
};

export default combineClasses;
