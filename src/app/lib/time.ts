export const convertTimeStampToDate = (ts: number) => {
  const date = new Date(ts);
  return date.getDate()+"/"+(date.getMonth()+1)
}

export const convertTimeStampToSimpleDate = (ts: number) => {
  const date = new Date(ts);
  let day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
  let month = (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
  return day+"."+month+"."+date.getFullYear()
}