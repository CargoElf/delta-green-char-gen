import "./CharacterSheet.scss";
import { useState } from "react";

import CharacterStatistic from "./CharacterStatistic";

function CharacterSheet() {
  const startingStatNumber = 3;
  const [ charName, setCharName ] = useState("");
  const [ charAge, setCharAge ] = useState(18);
  const [ charProfession, setCharProfession ] = useState("");
  const [ charStr, setCharStr ] = useState(startingStatNumber);
  const [ charCon, setCharCon ] = useState(startingStatNumber);
  const [ charDex, setCharDex ] = useState(startingStatNumber);
  const [ charInt, setCharInt ] = useState(startingStatNumber);
  const [ charPow, setCharPow ] = useState(startingStatNumber);
  const [ charCha, setCharCha ] = useState(startingStatNumber);

  const allCharStats = [
    charStr,
    charCon,
    charDex,
    charInt,
    charPow
  ];

  const [ isEditingName, setIsEditingName ] = useState(true);
  const [ isEditingAge, setIsEditingAge ] = useState(false);
  const [ isEditingProfession, setIsEditingProfession ] = useState(false);

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
                onChange={(e) => setCharName(e.target.value)}
                onFocus={() => setIsEditingName(true)}
                onBlur={() => setIsEditingName(false)}
              />
              {isEditingName && <span className="blinking-block">▉</span>}
            </span>
          }
        </span>
      </div>
    )
  }

  const ageDisplay = () => {
    return (
      <div>
        <span onClick={() => { if (!isEditingAge) setIsEditingAge(true) }}>
          AGE: {
            <span>
              <input
                size={charAge.toString().length || 1}
                defaultValue={charAge}
                onChange={(e) => setCharAge(e.target.value)}
                onFocus={() => setIsEditingAge(true)}
                onBlur={() => setIsEditingAge(false)}
              />
              {isEditingAge && <span className="blinking-block">▉</span>}
            </span>
          }
        </span>
      </div>
    )
  }

  const professionDisplay = () => {
    return (
      <div>
        <span onClick={() => { if (!isEditingProfession) setIsEditingProfession(true) }}>
          Profession: {
            <span>
              <input
                size={charProfession.length || 1}
                defaultValue={charProfession}
                onChange={(e) => setCharProfession(e.target.value)}
                onFocus={() => setIsEditingProfession(true)}
                onBlur={() => setIsEditingProfession(false)}
              />
              {isEditingProfession && <span className="blinking-block">▉</span>}
            </span>
          }
        </span>
      </div>
    )
  }
  const availablePoints = () => {
    const valuesSum = allCharStats.reduce(
      (total, value) => total + value, 0
    )

    return 72 - valuesSum;
  }

  const displayStats = () => {
    return (
      <div>
        <div>------------------------------------------------------------</div>
        <div>STATISTICS</div>
        <div>AVAILABLE POINTS: {availablePoints()}</div>
        <br />
        <CharacterStatistic
          number={charStr}
          statName="STR"
          availablePoints={availablePoints()}
          setStat={setCharStr}
        />
        <CharacterStatistic
          number={charCon}
          statName="CON"
          availablePoints={availablePoints()}
          setStat={setCharCon}
        />
        <CharacterStatistic
          number={charDex}
          statName="DEX"
          availablePoints={availablePoints()}
          setStat={setCharDex}
        />
        <CharacterStatistic
          number={charInt}
          statName="INT"
          availablePoints={availablePoints()}
          setStat={setCharInt}
        />
        <CharacterStatistic
          number={charPow}
          statName="POW"
          availablePoints={availablePoints()}
          setStat={setCharPow}
        />
        <CharacterStatistic
          number={charCha}
          statName="CHA"
          availablePoints={availablePoints()}
          setStat={setCharCha}
        />
        <div>------------------------------------------------------------</div>
      </div>
    )
  };

  const hitPoints = () => `HP : ${charCon + charStr}`;

  const willPower = () => `WP : ${charPow}`;

  const sanity = () => `SAN: ${charPow * 5}`;

  const bp = () => `BP : ${charPow}`;

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
          {String.raw`
 _____             _      _____              _         _
|  _  |___ ___ ___| |_   |_   ____ ___ _____|_|___ ___| |
|     | . | -_|   |  _|    | || -_|  _|     | |   | .'| |
|__|__|_  |___|_|_|_|      |_||___|_| |_|_|_|_|_|_|__,|_|
      |___|

`}
        </div>
      </div>
      {nameDisplay()}
      {ageDisplay()}
      {professionDisplay()}
      {displayStats()}
      {derivedAttrs()}
    </div>
  );
};

export default CharacterSheet;