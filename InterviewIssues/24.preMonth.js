/**
 *
 * @param {当前时间} date
 * @param {需要往前推几个月} prevMonth
 * @param {是否显示原日期的 day，如果是false永远显示 1 号} notOne
 * @returns
 */

const preMonthDate = (date, prevMonth, notOne) => {
  const wrapDate = new Date(date);
  let year = wrapDate.getFullYear();
  let month = parseInt(wrapDate.getMonth() + 1) - prevMonth;
  let day = Math.abs(wrapDate.getDate());

  if (month <= 0) {
    // Math.abs 绝对值
    const absM = Math.abs(month);

    // 如果月份小于 prevMonth，年份需要更改
    year = parseInt(year) - Math.ceil(absM / 12 == 0 ? 1 : parseInt(absM) / 12);
    month = 12 - (absM % 12);
  }
  return `${year}-${month < 10 ? '0' + month : month}-${notOne ? day < 10 ? '0' + day : day : '01'}`;
}

console.log(preMonthDate('2021-12-02', 3, true))
