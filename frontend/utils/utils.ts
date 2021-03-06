import moment from "moment";

export const getWeekDay = (date:Date) => {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

  return days[date.getDay()]
}

export const getCutWeekDay = (date:Date) => {
  let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

  return days[date.getDay()]
}

export const addedCurrentMonth = (currentDate:Date,currentMonth: number) => {
  const currentYear = currentDate.getFullYear()
  const currentMaxDate = moment(currentDate).daysInMonth()

  let mas = []
  for (let i = 1; i<=currentMaxDate; i++) {
    let newDate = new Date(currentYear,currentMonth,i)
    mas.push({
      id: i,
      day: getWeekDay(newDate),
      cutDay: getCutWeekDay(newDate),
      dayNumber: newDate.getDay(),
      date: newDate.getTime(),
      dateNumber: newDate.getDate(),
      active: false,
      place: addedNewPlace(newDate)
    })
  }

  return mas
}

export const addedNewPlace = (newDate: Date) => {
  return [
    {
      name: 'В Москве',
      active: false,
      time: [
        {
          added: false,
          from: newDate.setHours(9),
          to: newDate.setHours(18),
        },
      ]
    },
    {
      name: 'Студия на академической',
      active: false,
      time: [
        {
          added: false,
          from: newDate.setHours(9),
          to: newDate.setHours(18),
        }]
    },
    {
      name: 'Перерыв',
      active: false,
      time:[
        {
          added: false,
          from: newDate.setHours(14),
          to: newDate.setHours(15)
        }]
    }
  ]
}

export const getMonday = ( date:Date ) => {
  let day = date.getDay() || 7
  if( day !== 1 )
    date.setHours(-24 * (day - 1))
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

export const getSunday = ( date:Date ) => {
  let day = date.getDay() || 7
  return day !== 7 ? moment(date).day(7).valueOf() : date.getTime()
}