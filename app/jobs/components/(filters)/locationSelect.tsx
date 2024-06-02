import React, { FC } from 'react';

interface LocationSelectProps {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
}

const LocationSelect: FC<LocationSelectProps> = ({ selectedLocation, setSelectedLocation }) => {
  return (
    <div className="">
      <label htmlFor="location-select" className="mr-2">Location:</label>
      <select
        id="location-select"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="p-2 border rounded bg-primary-foreground"
      >
        <option value="">All</option>
        <option value="Remote">Remote</option>
        <option value="New York, NY">New York, NY</option>
        <option value="San Francisco, CA">San Francisco, CA</option>
        <option value="Los Angeles, CA">Los Angeles, CA</option>
        <option value="Chicago, IL">Chicago, IL</option>
      </select>
    </div>
  );
};

export default LocationSelect;
