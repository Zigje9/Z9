interface InnerFunction {
  _throttling: () => void;
}

const throttle = (handler: () => void, time: number): InnerFunction => {
  let check = true;
  return {
    _throttling() {
      if (check) {
        handler();
        check = false;
        setTimeout(() => {
          check = true;
        }, time);
      }
    },
  };
};

export default throttle;
