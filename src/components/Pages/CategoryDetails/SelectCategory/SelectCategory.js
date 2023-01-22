import React from 'react';

const SelectCategory = () => {
    return (
        <div>
        <select  className="select select-primary w-full max-w-xs">
        <option disabled selected>Select your food category</option>
        <option>Chinese</option>
        <option>Drinks</option>
        <option>Rice</option>
        <option>Chicken</option>
      </select>
        </div>
    );
};

export default SelectCategory;