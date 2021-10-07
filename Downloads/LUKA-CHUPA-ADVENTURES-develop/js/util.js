
  export const getObjValues = obj => Object.values(obj);
  
  // format numbers to friendly format
  export const formatter = new Intl.NumberFormat("en");
  
  export const appendNodeWithClass = (
    elName,
    className,
    parentDiv,
    idName = "",
    text = ""
  ) => {
    const el = document.createElement(elName);
    el.id = idName;
    el.textContent = text;
    parentDiv.appendChild(el).classList.add(className);
    return el;
  };
  