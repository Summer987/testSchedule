import moment from "moment";

export const getWeekDay = (date:Date) => {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[date.getDay()];
}

export const addedCurrentMonth = (currentDate:Date,currentMonth: number) => {
  const currentYear = currentDate.getFullYear()
  const currentMaxDate = moment(currentDate).daysInMonth()

  let mas = []
  for (let i = 1; i<=currentMaxDate; i++) {
    let newDate = new Date(currentYear,currentMonth,i)
    mas.push({
      day: getWeekDay(newDate),
      dayNumber: newDate.getDay(),
      date: String(newDate),
      active: false,
      timeBreak: [
        {
          from: newDate.setHours(14),
          to: newDate.setHours(15)
        }
      ],
      place: [
        {
          name: 'В Москве',
          time: [
            {
              from: newDate.setHours(9),
              to: newDate.setHours(18),
            }
          ]
        },
        {
          name: 'Студия на академической',
          time: [
            {
              from: newDate.setHours(9),
              to: newDate.setHours(18),
            }
          ]
        }
      ]
    })
  }

  return mas
}
