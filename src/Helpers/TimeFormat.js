export const secondsToMinutes = (secs) => {
  const minutes = Math.floor(secs/60)
  const seconds = secs % 60
  return str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
}

const str_pad_left = (string,pad,length) => {
    return (new Array(length+1).join(pad)+string).slice(-length);
}
