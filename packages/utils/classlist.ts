export function excludeOtherAndSetClasses(elem: HTMLElement, availableClass: Array<string>, ...setClass: Array<string>) {
  const pending = availableClass.filter((className) => {
    return !setClass.includes(className)
  })
  pending.forEach((className) => {
    elem.classList.remove(className)
  })
  setClass.forEach((className) => {
    elem.classList.add(className)
  })
}
