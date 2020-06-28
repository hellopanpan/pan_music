export const paserLrc = (lrc) => {
  if (!lrc) return {time: [], lrc: [], timer: []};
  let reg =/\[\d{2,4}:\d{2}\.\d+\]/g
  let arr1 = lrc.match(reg)
  lrc = lrc.replace(reg, 'kkk')
  let arr2 = lrc.split('kkk')
  arr2 = arr2.slice(1)
  let timer = []
  arr1.map((item,index) => {
    item = item.replace(/\[/,'').replace(/\]/,'')
    let arrtime = item.split(':')
    let time2 = (parseInt(arrtime[0]) * 60 + parseFloat(arrtime[1]))
    timer.push(time2)
    return 0
  })
  return {
    time: arr1,
    lrc: arr2,
    timer
  }
}