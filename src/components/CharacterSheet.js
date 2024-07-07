import "./CharacterSheet.scss";
import { useState, useRef } from "react";

function CharacterSheet() {
  const [ charName, setCharName ] = useState("");
  const [ charAttrs, setCharAttrs ] = useState({
    str: 3,
    con: 3,
    dex: 3,
    int: 3,
    pow: 3,
    cha: 3
  });
  const [ isEditingName, setIsEditingName ] = useState(true);

  // TODO: move these to their own const file
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

  const updateName = (e) => {
    const nameText = e.target.value;
    setCharName(nameText)
  };

  const nameDisplay = () => {
    return (
      <div>
        <span onClick={() => { if (!isEditingName) setIsEditingName(true) }}>
          NAME: {
            <span>
              <input
                autoFocus
                type="text"
                size={charName.length || 1}
                defaultValue={charName}
                onChange={(e) => updateName(e)}
                onBlur={() => setIsEditingName(false)}
              />
              {isEditingName && <span className="blinking-block">▉</span>}
            </span>
          }
        </span>
      </div>
    )
  }

  const availablePoints = () => {
    const valuesSum = Object.values(charAttrs).reduce(
      (total, value) => total + value, 0
    )

    return 72 - valuesSum;
  }

  const changeStat = (attr, amount) => {
    const stats = charAttrs;
    stats[attr] = stats[attr] + amount;

    setCharAttrs(stats);
  }

  const statDisplayText = (attr) => {
    const val = charAttrs[attr];
    const descriptorIndex = Math.floor(val / 4);
    const descriptorText = allDescriptorTexts[attr][descriptorIndex];

    return `${attr.toUpperCase()}: ${val}  - +  ${descriptorText}`;
  };

  const displayStats = () => {
    const stats = Object.keys(charAttrs).map((attr) =>
      <div key={attr}>
        {statDisplayText(attr)}
      </div>
    );

    return (
      <div>
        <div>-------------------------------------------</div>
        <div>STATISTICS</div>
        <div>AVAILABLE POINTS: {availablePoints()}</div>
        <br />
        {stats}
        <div>-------------------------------------------</div>
      </div>
    )
  };

  const hitPoints = () => `HP : ${charAttrs.str + charAttrs.con}`;

  const willPower = () => `WP : ${charAttrs.pow}`;

  const sanity = () => `SAN: ${charAttrs.pow * 5}`;

  const bp = () => `BP : ${charAttrs.pow}`;

  const derivedAttrs = () => {
    const attrs = [
      hitPoints(),
      willPower(),
      sanity(),
      bp()
    ].map((attrString) => <div key={attrString.slice(0, 2)}>{attrString}</div>);

    return (
      <div>
        {attrs}
      </div>
    )
  };

  return (
    <div className="character-sheet">
      <div className="delta-green-display">
        <div>
          {String.raw` ____  _____ _   _____  _       ____ ____  _____ _____ _   _
|  _ \| ____| | |_   _|/ \     / ___|  _ \| ____| ____| \ | |
| | | |  _| | |   | | / _ \   | |  _| |_) |  _| |  _| |  \| |
| |_| | |___| |___| |/ ___ \  | |_| |  _ <| |___| |___| |\  |
|____/|_____|_____|_/_/   \_\  \____|_| \_\_____|_____|_| \_|`}
        </div>
        <div>
          {String.raw` ___               _     ___              _         _
| . |___ ___._ _ _| |_  |_ ____ _ _._ _ _<_._ _ ___| |
|   / . / ._| ' | | |    | / ._| '_| ' ' | | ' <_> | |
|_|_\_. \___|_|_| |_|    |_\___|_| |_|_|_|_|_|_<___|_|
    <___'`}
        </div>
      </div>
      {nameDisplay()}
      {displayStats()}
      {derivedAttrs()}
    </div>
  );
};

export default CharacterSheet;