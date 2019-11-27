import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import {DateDiv, DateTitle, DateText} from './style.js';

const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, { locale });
}

const Calendar = () => {
  const FORMAT = 'MM/dd/yyyy';
  return (
    <DateDiv> 
      <div className='fl w-100 w-50-ns pa2 tc'>
      <DateTitle className='w-50 center'>Életre szóló, személyre szabott ajándék</DateTitle>
      <DateText className='w-40 center'>Itt 2 perc alatt megrendelheti hozzátartozója legkreatívabb ajándékát.  
      Your gift will be remembered long after the event.</DateText>
      </div>
      <div className='fl w-50 pl7 pt3'>
      <DateText>Válaszd ki a dátumot!</DateText>
      <DayPickerInput
        formatDate={formatDate}
        format={FORMAT}
        parseDate={parseDate}
        placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
      />
      </div>
    </DateDiv>
  );
}

export default Calendar;