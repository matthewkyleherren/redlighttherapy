export const MAIL_TO_LINK = 'mailto:members@sequel.co';
export const LINKS = {
  ALEX_LINKEDIN: 'https://www.linkedin.com/in/alex-macdonald-48331625/',
  SEQUEL_LINKEDIN: 'https://www.linkedin.com/company/sequel-yourlegacymade',
  SEQUEL_INSTAGRAM: 'https://instagram.com/sequeloriginals',
  SEQUEL_X: 'https://x.com/joinsequel',
  SEQUEL_TIKTOK: 'https://www.tiktok.com/@sequeloriginals',
  SEQUEL_YOUTUBE: 'https://www.youtube.com/@sequeloriginals',
  SEQUEL_APP_STORE: 'https://apps.apple.com/app/sequel/id1615742710',
  SEQUEL_PLAY_STORE: 'https://play.google.com/store/apps/details?id=co.sequel.app',
};

export const SPORTS = [
  'Football (Soccer)',
  'American football',
  'Basketball',
  'Baseball',
  'Ice hockey',
  'Rugby union',
  'Rugby league',
  'Golf',
  'Cricket',
  'Tennis',
  'Athletics',
  'Gymnastics',
  'Swimming',
  'Motorsport',
  'Boxing',
  'Cycling',
  'Surfing',
  'Skateboarding',
  'Snow sports',
  'Other',
];

export const NUM_OF_INVESTMENTS = ['Less than 5', '5-10', '10-25', 'More than 25'];

export const VALUE_OF_INVESTMENTS = ['Less than $100k', '$100-$250k', '$250k-1m', '$1m-5m', 'More than $5m'];

export const INTEREST_IN_SEQUEL = [
  ['community', 'Community & connecting'],
  ['learning', 'Learn more about investing in startups'],
  ['difference', 'Make a difference in the world'],
  ['deal-flow', 'Access the best deal flow'],
  ['legacy', 'Provide a legacy for my family'],
  ['other', 'Other'],
];

export const INTEREST_IN_INVESTING = [
  ['consumer-tech', 'Consumer tech'],
  ['fintech', 'Fintech'],
  ['climate-tech', 'Climate tech'],
  ['deep-tech', 'Deep tech'],
  ['underrepresented-founders', 'Underrepresented founders'],
  ['education', 'Education'],
  ['ai', 'AI'],
  ['health', 'Health & wellness'],
];

export const LOCATIONS = [
  ['north-america', 'North America'],
  ['europe', 'Europe'],
  ['africa', 'Africa'],
  ['asia', 'Asia'],
  ['south-america', 'South America'],
  ['oceania', 'Oceania'],
];

export const STAGES = [
  ['preseed', 'Pre-seed'],
  ['seed', 'Seed'],
  ['series-a', 'Series A'],
  ['series-b', 'Series B'],
  ['series-c', 'Series C or higher'],
];

export const SECTORS = [
  ['healthcare', 'Healthcare'],
  ['climate-tech', 'Climate tech'],
  ['education', 'Education'],
  ['b2b', 'B2B'],
  ['b2c', 'B2C'],
  ['consumer', 'Consumer'],
  ['gaming', 'Gaming'],
  ['fintech', 'Fintech'],
  ['space-tech', 'Space tech'],
  ['entertainment', 'Entertainment'],
];

export const sessionKeys = {
  previousUrl: 'sql-previous-url',
  register: 'sql-register',
  join: 'sql-join',
  referralId: 'sql-referral-id',
  countryOfResidence: 'sql-country-of-residence',
  phoneNumber: 'sql-phone-number',
  pitchDeck: 'sql-pitch-deck',
  startupSubmit: 'sql-startup-submit',
  referralCode: 'sql-referral',
  angel: 'sql-angel',
  countryCode: 'sql-country-code',
  complimentaryMembership: 'sql-complimentary-membership',
  membershipType: 'sql-membership-type',
  chargeOnSession: 'sql-charge-on-session',
  successfulPayment: 'sql-successful-payment',
} as const;

export const MEMBERSHIP_RATES = {
  us: {
    lite: { annual: 3000, initiation: 500, symbol: '$' },
    pro: { annual: 10000, initiation: 1000, symbol: '$' },
  },
  gb: {
    lite: { annual: 2000, initiation: 500, symbol: '£' },
    pro: { annual: 7000, initiation: 500, symbol: '£' },
  },
};

export const LITE_MEMBERSHIP_STARTUP_CHECK_CAP_UK = 25000;
export const LITE_MEMBERSHIP_STARTUP_CHECK_CAP_US = 30000;

export const SEQUEL_APP_ID = '1615742710';
