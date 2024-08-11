import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from 'date-fns';

export const CustomTimeInput = React.forwardRef(({ value, onClick, onChange }, ref) => (
  <input
    value={value}
    onClick={onClick}
    onChange={onChange}
    ref={ref}
    placeholder="HH:MM"
    className="input-box mt-1 block w-full md:w-[270px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
  />
));

const DateTimePicker = ({ selectedDate, onChange, isTimeOnly, timeFormat, dateFormat, placeholderText, customInput }) => (
  <DatePicker
    selected={selectedDate}
    onChange={onChange}
    showTimeSelect={isTimeOnly}
    showTimeSelectOnly={isTimeOnly}
    timeIntervals={1}
    timeCaption="Time"
    dateFormat={dateFormat}
    placeholderText={placeholderText}
    className="input-box mt-1 block w-full md:w-[300px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
    customInput={customInput}
  />
);

export default DateTimePicker;
