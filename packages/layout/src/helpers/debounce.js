function debounce(func, wait, immediate) {
  let timeout;

  const executedFunction = function() {
    let context = this;
    let args = arguments;

    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };

  executedFunction.clear = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return executedFunction;
}

export { debounce };
