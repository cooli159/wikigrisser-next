export const HERO_COLUMN_HEADERS = {
  name: ["Name"],
  rarity: ["Rarity"],
  talentName: ["Talents", "Talent Name"],
  talentDescription: ["Talents", "Description"],
  protagonist: ["Factions", "index(Images!$A$2:$L$2, 1, 1)"],
  glory: ["Factions", "index(Images!$A$2:$L$2, 1, 2)"],
  origin: ["Factions", "index(Images!$A$2:$L$2, 1, 3)"],
  princess: ["Factions", "index(Images!$A$2:$L$2, 1, 4)"],
  empire: ["Factions", "index(Images!$A$2:$L$2, 1, 5)"],
  strategic: ["Factions", "index(Images!$A$2:$L$2, 1, 6)"],
  dark: ["Factions", "index(Images!$A$2:$L$2, 1, 7)"],
  meteor: ["Factions", "index(Images!$A$2:$L$2, 1, 8)"],
  legends: ["Factions", "index(Images!$A$2:$L$2, 1, 9)"],
  mythic: ["Factions", "index(Images!$A$2:$L$2, 1, 10)"],
  tensei: ["Factions", "index(Images!$A$2:$L$2, 1, 11)"],
  time: ["Factions", "index(Images!$A$2:$L$2, 1, 12)"],
  startingClassName: ["Starting Class", "Class\nName"],
  startingClassSkill1: ["Starting Class", "Skill 1\n(Level 1)"],
  startingClassSkill2: ["Starting Class", "Skill 2\n(Level 12)"],
  leftClassStartingPosition: ["Left Tier 2 Class", "Class\nName"],
  middleClassStartingPosition: ["Middle Tier 2 Class", "Class\nName"],
  rightClassStartingPosition: ["Right Tier 2 Class", "Class\nName"],
  soldierBonusHP: ["Max Soldier Bonuses (%)", "HP"],
  soldierBonusATK: ["Max Soldier Bonuses (%)", "ATK"],
  soldierBonusDEF: ["Max Soldier Bonuses (%)", "DEF"],
  soldierBonusMDEF: ["Max Soldier Bonuses (%)", "MDEF"],
  trainingGroundUnlocks: ["Training Ground Unlocks"],
  bond2ReqString: ["Bond Power Unlocks", "Bond 2\n(Intimacy Lv. 10)"],
  bond3ReqString: ["Bond Power Unlocks", "Bond 3\n(Intimacy Lv. 15)"],
  bond4ReqString: ["Bond Power Unlocks", "Bond 4\n(Intimacy Lv. 23)"],
  bond5ReqString: ["Bond Power Unlocks", "Bond 5\n(Intimacy Lv. 25)"],
  bond4ReqChar: ["Bond Power Unlocks", "Bond 4 Character"],
  bond5ReqChar: ["Bond Power Unlocks", "Bond 5 Character"],
  heartBondsLevel4String: [
    "Heart Bonds",
    "Level 4 Heart Bond Effect\n(Defensive)",
  ],
  heartBondsLevel7String: [
    "Heart Bonds",
    "Level 7 Heart Bond Effect\n(Offensive)",
  ],
  exclusiveEquipmentName: ["Exclusive Equipment", "Name"],
  exclusiveEquipmentType: ["Exclusive Equipment", "Item Type"],
  exclusiveEquipmentEffect: ["Exclusive Equipment", "Effect"],
  awakeningSkillName: ["Awakening Skill", "Name"],
  awakeningSkillType: ["Awakening Skill", "Type"],
  awakeningSkillCD: ["Awakening Skill", "CD"],
  awakeningSkillRange: ["Awakening Skill", "Range"],
  awakeningSkillSpan: ["Awakening Skill", "Span"],
  awakeningSkillEffect: ["Awakening Skill", "Effect"],
  skinCount: ["Skin Count"],
};

export const EQUIPMENT_COLUMN_HEADERS = {
  name: ["Name"],
  slot: ["Slot"],
  type: ["Type"],
  quality: ["Quality"],
  user1: ["User 1"],
  user2: ["User 2"],
  user3: ["User 3"],
  user4: ["User 4"],
  stat1: ["Level 50 Flat Stat 1"],
  stat2: ["Level 50 Flat Stat 2"],
  equipSkill: ["Equip Skill Lv50"],
};

export const SOLDIER_COLUMN_HEADERS = {
  name: "Name",
  tier: "Tier",
  type: "Type",
  range: "Range",
  move: "Move",
  effect: "Skills (→Training Max)",
  baseHp: "Base\nHP",
  baseAtk: "Base\nATK",
  baseDef: "Base\nDEF",
  baseMdef: "Base\nMDEF",
};

export const FINAL_COL_KEY = "FINAL_COLUMN";

export interface ColIdMap {
  [key: string]: string;
}

export type HERO_COLUMN_IDS = {
  [key in keyof typeof HERO_COLUMN_HEADERS]: string;
};

export type EQUIPMENT_COLUMN_IDS = {
  [key in keyof typeof EQUIPMENT_COLUMN_HEADERS]: string;
};

export type SOLDIER_COLUMN_IDS = {
  [key in keyof typeof SOLDIER_COLUMN_HEADERS]: string;
};
