export const combineClasses = (
  ...classes: Array<string | [boolean, string]>
): string => {
  return classes.reduce((classNames: string, currentClassName) => {
    if (Array.isArray(currentClassName)) {
      return currentClassName[0]
        ? classNames + " " + currentClassName[1]
        : classNames;
    } else {
      return classNames + " " + currentClassName;
    }
  }, "");
};

export default combineClasses;
