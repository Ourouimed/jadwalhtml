export const resolveElement = (input)=>{
  if (typeof input === "string") {
    const el = document.querySelector(input);
    if (!el) throw new Error(`Element not found: ${input}`);
    return el;
  }

  if (input instanceof Element) {
    return input;
  }

  throw new Error("Invalid container: expected selector or DOM element");
}