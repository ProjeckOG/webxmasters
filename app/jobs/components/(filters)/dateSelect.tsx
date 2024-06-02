import React, { FC } from 'react';

interface DateSelectProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const DateSelect: FC<DateSelectProps> = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="">
      <label htmlFor="date-select" className="mr-2">Sort By:</label>
      <select
        id="date-select"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="p-2 border rounded bg-primary-foreground"
      >
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default DateSelect;
