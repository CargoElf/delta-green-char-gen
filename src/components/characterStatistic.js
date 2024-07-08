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
    str: strDescriptors,
    con: conDescriptors,
    dex: dexDescriptors,
    int: intDescriptors,
    pow: powDescriptors,
    cha: chaDescriptors
  };

	return number;
};

export default CharacterStatistic;