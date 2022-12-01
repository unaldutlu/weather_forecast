import React from "react";
import useTurkeyCities from "use-turkey-cities";

function Location() {
  const { cities, city, setCity} =
    useTurkeyCities();

  return (
    <div className="">
      <form
      className="flex justify-start items-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(city);
        }}
      >
        <select
          className='w-40 h-7 rounded-xl mx-4 outline-none font-bold px-2'
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        >
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button type='submit' className="bg-orange-500 text-white border-none  px-4 rounded-lg hover:bg-red-600 h-7">Submit</button>
      </form>
    </div>
  );
}

export default Location;
