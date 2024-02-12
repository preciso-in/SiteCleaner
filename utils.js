function hideElements(selector) {
  changeStyle(selector, "display", "none");
}

function changeStyle(selector, property, value) {
  const elems = document.querySelectorAll(selector);

  elems.forEach((elem) => {
    if (elem.style) {
      elem.style[property] = value;
    }
  });
}

function doOnce(...fnArray) {
  fnArray.forEach((f) => {
    if (f instanceof Function) f();
  });
}

function repeat(...fn) {
  return basicRepeat(1000, ...fn);
}

function customRepeat(interval, ...fn) {
  return basicRepeat(interval, ...fn);
}

function basicRepeat(interval = 1000, ...fn) {
  let count = 1;
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  let intervalFn = setInterval(() => {
    const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(
      new Date()
    );
    if (Array.isArray(fn)) {
      fn.forEach((f) => f());
    } else {
      fn();
    }
    count++;
    if (count > 100000) {
      clearInterval(intervalFn);
    }
  }, interval);
}
