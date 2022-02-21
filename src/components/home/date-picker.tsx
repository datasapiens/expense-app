import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const DatePick = ({
  date,
  setDate,
  dateFormat,
}: {
  date: any;
  setDate: any;
  dateFormat: string;
}) => {
  const handleDateChange = (
    dateObject: moment.Moment | null,
    dateString: string
  ): void => {
    console.info('date string:', dateString);
    console.info('date obj:', dateObject);
    setDate(dateObject);
  };

  return (
    <DatePicker
      defaultValue={date}
      onChange={handleDateChange}
      format={dateFormat}
    />
  );
};

export default DatePick;
