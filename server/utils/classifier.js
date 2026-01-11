const classifyWaste = (category, condition, batteryPresent) => {
  let hazardLevel = 'Low';
  let recyclingType = 'Resell';

  // Rule 1: Battery Logic
  if (batteryPresent) {
    hazardLevel = 'Medium';
  }

  // Rule 2: Category Specific Hazards
  if (category === 'Laptop' || category === 'Mobile') {
    if (condition === 'Scrap') hazardLevel = 'High'; // Heavy metals involved
  }

  // Rule 3: Recycling Path
  if (condition === 'Working') {
    recyclingType = 'Resell';
  } else if (condition === 'Repairable') {
    recyclingType = 'Refurbish';
  } else {
    recyclingType = 'Recycle';
  }

  return { hazardLevel, recyclingType };
};

module.exports = classifyWaste;