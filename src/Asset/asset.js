
const changeDate = (date) => {
  let d = new Date(date);
  let dateString =
    d.getFullYear() + "-" +
    (d.getMonth() + 1) + "-" +
    d.getDate();

  return dateString
}

const asset = {
  changeDate
}

export default asset;