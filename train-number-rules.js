(function () {
  const alwaysEightCarSuffixes = [
    '30T', '31T', '34T', '35T', '37T', '42T', '43T', '45T',
    '54T', '55T', '70T', '71T', '78T', '79T', '80T', '81T',
    '86T', '87T', '01K', '03K', '15K', '42K', 'G'
  ];

  const weekdayEightCarSuffixes = [
    '36T', '38T', '39T', '44T', '82T', '00K', '04K', '06K',
    '07K', '09K', '12K', '13K', '16K', '22K', '23K', '24K',
    '26K', '27K', '31K', '40K', '43K'
  ];

  const weekendOrHolidayEightCarSuffixes = [
    '40T', '41T', '46T', '52T', '53T', '62T', '63T', '64T', '08K'
  ];

  function createSuffixRegex(suffixes) {
    return new RegExp(`(?:${suffixes.join('|')})$`);
  }

  const eightCarTrainNumberRules = {
    always: createSuffixRegex(alwaysEightCarSuffixes),
    weekday: createSuffixRegex(weekdayEightCarSuffixes),
    weekendOrHoliday: createSuffixRegex(weekendOrHolidayEightCarSuffixes)
  };

  window.isEightCarTrain = function (trainNumber, isWeekendOrHoliday) {
    const number = trainNumber || '';

    return eightCarTrainNumberRules.always.test(number)
      || (eightCarTrainNumberRules.weekday.test(number) && !isWeekendOrHoliday)
      || (eightCarTrainNumberRules.weekendOrHoliday.test(number) && isWeekendOrHoliday);
  };
})();
