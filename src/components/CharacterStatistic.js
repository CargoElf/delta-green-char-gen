import "./CharacterStatistic.scss";

function CharacterStatistic(props) {
  const { number, statName, setStat } = props;
  const strDescriptors = [
    "Feeble",
    "Weak",
    "Average",
    "Muscular",
    "Huge"
  ];

  const conDescriptors = [
    "Bedridden",
    "Sickly",
    "Average",
    "Perfect health",
    "Indefatigable"
  ]

  const dexDescriptors = [
    "Barely Mobile",
    "Clumsy",
    "Average",
    "Nimble",
    "Acrobatic"
  ];

  const intDescriptors = [
    "Imbecilic",
    "Slow",
    "Average",
    "Perceptive",
    "Brilliant"
  ];

  const powDescriptors = [
    "Spineless",
    "Nervous",
    "Average",
    "Strong willed",
    "Indomitable"
  ];

  const chaDescriptors = [
    "Unbearable",
    "Awkward",
    "Average",
    "Charming",
    "Magnetic"
  ];

  const allDescriptorTexts = {
    STR: strDescriptors,
    CON: conDescriptors,
    DEX: dexDescriptors,
    INT: intDescriptors,
    POW: powDescriptors,
    CHA: chaDescriptors
  };

  const incrementStat = () => {
    const newNumber = number + 1;
    setStat(newNumber);
  };

  const decrementStat = () => {
    const newNumber = number - 1;
    if (newNumber < 3) return;

    setStat(newNumber);
  };

  const descriptorText = () => {
    let descriptorIndex = 4;

    if (number < 17)  descriptorIndex = 3;
    if (number < 13)  descriptorIndex = 2;
    if (number < 9)   descriptorIndex = 1;
    if (number < 5)   descriptorIndex = 0;

    return allDescriptorTexts[statName][descriptorIndex];
  }

  return (
    <div className="stat-row">
      <div className="number">
        {statName}: {number}
      </div>
      <div className="buttons">
        <button onClick={() => decrementStat()}>-</button> <button onClick={() => incrementStat()} value="+">+</button>
      </div>
      <div className="percentile">
        {number * 5}%
      </div>
      <div className="descriptor">
        {descriptorText()}
      </div>
    </div>
  );
};

export default CharacterStatistic;