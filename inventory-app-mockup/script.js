// ============================================================
// DATA
// ============================================================

const USERS = ['Najmi', 'Jayminn', 'Garik', 'Claude', 'Manager'];

const LOCATIONS = [
  { id: 'wif', name: 'Walk-In Freezer', type: 'freezer' },
  { id: 'wir', name: 'Walk-In Fridge', type: 'fridge' },
  { id: 'kf',  name: 'Kitchen Freezer', type: 'freezer' },
  { id: 'df',  name: 'Deli Fridge', type: 'fridge' },
  { id: 'lb',  name: "Chef's Base Fridge (Lowboy)", type: 'fridge' },
  { id: 'ds',  name: 'Dry Storage', type: 'dry' },
  { id: 'kds', name: 'Kitchen Dry Storage', type: 'dry' },
];

// item: { id, name, category, unit, par, locations: {locId: qty}, actionType, lastUpdatedBy, lastUpdatedAt }
let ITEMS = [
  // Faux Meats
  { id: 'i1',  name: 'Impossible Beef Bulk',            category: 'Faux Meats',         unit: '5lb blocks', par: 10, locations: { wir: 2 },              actionType: 'Prep',    lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:14:00' },
  { id: 'i2',  name: 'Impossible Nuggets',              category: 'Faux Meats',         unit: 'boxes',      par: 4,  locations: { wif: 0, kf: 6 },        actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i3',  name: 'Impossible Meatballs',            category: 'Faux Meats',         unit: 'boxes',      par: 4,  locations: { wif: 3, kf: 9 },        actionType: 'Prep',    lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i4',  name: 'Impossible Chicken Patties',      category: 'Faux Meats',         unit: 'boxes',      par: 4,  locations: { wif: 2, kf: 8, lb: 6 }, actionType: 'Monitor', lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i5',  name: 'Beyond Beef Steak Tips',          category: 'Faux Meats',         unit: 'boxes',      par: 8,  locations: { wif: 10, kf: 8 },       actionType: 'Monitor', lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i6',  name: 'Impossible Sausage Patties',      category: 'Faux Meats',         unit: 'boxes',      par: 5,  locations: { wif: 1, kf: 10, lb: 7 },actionType: 'Prep',    lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i7',  name: 'Vegan Bacon',                     category: 'Faux Meats',         unit: 'boxes',      par: 3,  locations: { wif: 0, kf: 10 },       actionType: 'Prep',    lastUpdatedBy: 'Jayminn',  lastUpdatedAt: '2026-06-01T16:30:00' },
  { id: 'i8',  name: 'Vegan Pepperoni',                 category: 'Faux Meats',         unit: 'boxes',      par: 9,  locations: { wif: 1, kf: 4 },        actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i9',  name: 'Veggie Patties',                  category: 'Faux Meats',         unit: 'boxes',      par: 9,  locations: { wif: 3, kf: 1, lb: 6 }, actionType: 'Prep',    lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i10', name: 'Vegan Battered Fish',             category: 'Faux Meats',         unit: 'bags',       par: 5,  locations: { wif: 9, kf: 6 },        actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  // Faux Cheeses
  { id: 'i11', name: 'Vevan Cheddar Slices',            category: 'Faux Cheeses',       unit: 'packs',      par: 12, locations: { wir: 2 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i12', name: 'Vevan Pepperjack Slices',         category: 'Faux Cheeses',       unit: 'packs',      par: 7,  locations: { wir: 5 },               actionType: 'Prep',    lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i13', name: 'Gouda Slices',                    category: 'Faux Cheeses',       unit: 'packs',      par: 6,  locations: { wir: 1 },               actionType: 'Prep',    lastUpdatedBy: 'Garik',    lastUpdatedAt: '2026-06-01T15:00:00' },
  { id: 'i14', name: 'Vevan Mozz Shreds',               category: 'Faux Cheeses',       unit: 'bags',       par: 10, locations: { wif: 5, kf: 5, df: 1 }, actionType: 'Prep',    lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i15', name: 'Vevan Cheddar Shreds',            category: 'Faux Cheeses',       unit: 'bags',       par: 10, locations: { wif: 2, kf: 4, df: 3 }, actionType: 'Prep',    lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i16', name: 'Follow Your Heart Parmesan',      category: 'Faux Cheeses',       unit: 'bottles',    par: 3,  locations: { wir: 0 },               actionType: 'Prep',    lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  // Vegetables & Herbs
  { id: 'i17', name: 'Peas',                            category: 'Vegetables & Herbs', unit: 'bags',       par: 11, locations: { wir: 5 },               actionType: 'Prep',    lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i18', name: 'Kale',                            category: 'Vegetables & Herbs', unit: 'bags',       par: 3,  locations: { wir: 0, df: 1 },        actionType: 'Monitor', lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i19', name: 'Leek',                            category: 'Vegetables & Herbs', unit: 'units',      par: 7,  locations: { wir: 18 },              actionType: 'Monitor', lastUpdatedBy: 'Jayminn',  lastUpdatedAt: '2026-06-01T16:30:00' },
  { id: 'i20', name: 'Mushroom',                        category: 'Vegetables & Herbs', unit: 'boxes',      par: 8,  locations: { wir: 1 },               actionType: 'Monitor', lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i21', name: 'Onion',                           category: 'Vegetables & Herbs', unit: 'units',      par: 3,  locations: { wir: 0 },               actionType: 'Prep',    lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i22', name: 'Tomato',                          category: 'Vegetables & Herbs', unit: 'units',      par: 5,  locations: { wir: 8, df: 24 },       actionType: 'Prep',    lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i23', name: 'Cucumber',                        category: 'Vegetables & Herbs', unit: 'units',      par: 8,  locations: { wir: 18, df: 8 },       actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i24', name: 'Romaine',                         category: 'Vegetables & Herbs', unit: 'units',      par: 10, locations: { wir: 24, df: 12 },      actionType: 'Monitor', lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i25', name: 'Red Onion',                       category: 'Vegetables & Herbs', unit: 'units',      par: 12, locations: { wir: 0 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i26', name: 'Lemon',                           category: 'Vegetables & Herbs', unit: 'units',      par: 8,  locations: { wir: 36, df: 36 },      actionType: 'Buy',     lastUpdatedBy: 'Garik',    lastUpdatedAt: '2026-06-01T15:00:00' },
  { id: 'i27', name: 'Green Onion',                     category: 'Vegetables & Herbs', unit: 'units',      par: 7,  locations: { wir: 0, df: 24 },       actionType: 'Monitor', lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i28', name: 'Garlic',                          category: 'Vegetables & Herbs', unit: 'bags',       par: 8,  locations: { wir: 3, df: 2 },        actionType: 'Monitor', lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i29', name: 'Jalapeno',                        category: 'Vegetables & Herbs', unit: 'units',      par: 6,  locations: { df: 8 },                actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i30', name: 'Spinach',                         category: 'Vegetables & Herbs', unit: 'bags',       par: 4,  locations: { df: 3 },                actionType: 'Buy',     lastUpdatedBy: 'Jayminn',  lastUpdatedAt: '2026-06-01T16:30:00' },
  // Carbs
  { id: 'i31', name: 'Shoestring Fries',               category: 'Carbs',              unit: 'boxes',      par: 10, locations: { wif: 8, kf: 4 },        actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i32', name: 'Waffle Fries',                   category: 'Carbs',              unit: 'boxes',      par: 8,  locations: { wif: 10, kf: 6 },       actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i33', name: 'Sweet Potato Fries',             category: 'Carbs',              unit: 'boxes',      par: 12, locations: { wif: 6, kf: 2 },        actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i34', name: 'Potato Wedges',                  category: 'Carbs',              unit: 'boxes',      par: 9,  locations: { wif: 7, kf: 1 },        actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i35', name: 'Brioche Buns',                   category: 'Carbs',              unit: 'packs',      par: 5,  locations: { kds: 2 },               actionType: 'Monitor', lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i36', name: 'Texas Toast',                    category: 'Carbs',              unit: 'bags',       par: 4,  locations: { wif: 0 },               actionType: 'Monitor', lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i37', name: 'Tortilla Land Tortillas',        category: 'Carbs',              unit: 'packs',      par: 6,  locations: { wir: 2 },               actionType: 'Monitor', lastUpdatedBy: 'Garik',    lastUpdatedAt: '2026-06-01T15:00:00' },
  { id: 'i38', name: 'Rice',                           category: 'Carbs',              unit: 'bags',       par: 12, locations: { kds: 3 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i39', name: 'Russet Potato',                  category: 'Carbs',              unit: 'boxes',      par: 3,  locations: { ds: 0 },                actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i40', name: 'Elbow Pasta',                    category: 'Carbs',              unit: 'boxes',      par: 4,  locations: { ds: 6 },                actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  // Sweets
  { id: 'i41', name: 'Oreos',                          category: 'Sweets',             unit: 'packs',      par: 4,  locations: { kds: 6 },               actionType: 'Buy',     lastUpdatedBy: 'Garik',    lastUpdatedAt: '2026-06-01T15:00:00' },
  { id: 'i42', name: 'Mint Oreos',                     category: 'Sweets',             unit: 'packs',      par: 3,  locations: { kds: 2 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i43', name: 'Chocolate Syrup',                category: 'Sweets',             unit: 'bottles',    par: 4,  locations: { kds: 5 },               actionType: 'Buy',     lastUpdatedBy: 'Jayminn',  lastUpdatedAt: '2026-06-01T16:30:00' },
  { id: 'i44', name: 'Maple Syrup',                    category: 'Sweets',             unit: 'bottles',    par: 10, locations: { kds: 4 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i45', name: 'Powdered Sugar',                 category: 'Sweets',             unit: 'bags',       par: 3,  locations: { kds: 4 },               actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i46', name: 'CountryCrock Plant Cream',       category: 'Sweets',             unit: 'units',      par: 10, locations: { wir: 4, df: 4 },        actionType: 'Prep',    lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  // Condiments & Sauces
  { id: 'i47', name: 'Sriracha',                       category: 'Condiments & Sauces',unit: 'bottles',    par: 9,  locations: { kds: 4 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i48', name: 'Vegenaise Vegan Mayo',           category: 'Condiments & Sauces',unit: 'gallons',    par: 6,  locations: { wir: 2, df: 1 },        actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i49', name: 'Ketchup Packets',                category: 'Condiments & Sauces',unit: 'boxes',      par: 5,  locations: { ds: 8 },                actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i50', name: 'BBQ Sauce',                      category: 'Condiments & Sauces',unit: 'bottles',    par: 6,  locations: { kds: 7 },               actionType: 'Buy',     lastUpdatedBy: 'Garik',    lastUpdatedAt: '2026-06-01T15:00:00' },
  { id: 'i51', name: 'Vegan Ranch',                    category: 'Condiments & Sauces',unit: 'gallons',    par: 4,  locations: { wir: 2 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i52', name: 'Sweet Chili Sauce',              category: 'Condiments & Sauces',unit: 'bottles',    par: 4,  locations: { kds: 3 },               actionType: 'Buy',     lastUpdatedBy: 'Jayminn',  lastUpdatedAt: '2026-06-01T16:30:00' },
  { id: 'i53', name: 'Chili Crisp',                    category: 'Condiments & Sauces',unit: 'jars',       par: 5,  locations: { kds: 3, ds: 2 },        actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  // Seasonings
  { id: 'i54', name: 'Seasoning Salt',                 category: 'Seasonings',         unit: 'containers', par: 3,  locations: { kds: 4 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i55', name: 'MSG',                            category: 'Seasonings',         unit: 'containers', par: 2,  locations: { kds: 2 },               actionType: 'Buy',     lastUpdatedBy: 'Garik',    lastUpdatedAt: '2026-06-01T15:00:00' },
  { id: 'i56', name: 'Garlic Powder',                  category: 'Seasonings',         unit: 'containers', par: 3,  locations: { kds: 5 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i57', name: 'Cajun',                          category: 'Seasonings',         unit: 'containers', par: 2,  locations: { kds: 3 },               actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i58', name: 'Paprika',                        category: 'Seasonings',         unit: 'containers', par: 2,  locations: { kds: 2 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  // Ingredients
  { id: 'i59', name: 'Oat Milk',                       category: 'Ingredients',        unit: 'containers', par: 6,  locations: { wir: 4 },               actionType: 'Buy',     lastUpdatedBy: 'Jayminn',  lastUpdatedAt: '2026-06-01T16:30:00' },
  { id: 'i60', name: 'Butter',                         category: 'Ingredients',        unit: 'containers', par: 4,  locations: { wir: 3 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i61', name: 'Whole Raw Cashews',              category: 'Ingredients',        unit: 'bags',       par: 3,  locations: { kds: 2 },               actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i62', name: 'All Purpose Flour',              category: 'Ingredients',        unit: 'bags',       par: 4,  locations: { kds: 5 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i63', name: 'Vegan Egg',                      category: 'Ingredients',        unit: 'units',      par: 6,  locations: { df: 3 },                actionType: 'Buy',     lastUpdatedBy: 'Garik',    lastUpdatedAt: '2026-06-01T15:00:00' },
  // Drinks
  { id: 'i64', name: 'Coke',                           category: 'Drinks',             unit: 'cans',       par: 24, locations: { wir: 12, df: 24 },      actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i65', name: 'Diet Coke',                      category: 'Drinks',             unit: 'cans',       par: 12, locations: { wir: 6, df: 12 },       actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i66', name: 'Sprite',                         category: 'Drinks',             unit: 'cans',       par: 12, locations: { wir: 0, df: 8 },        actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i67', name: 'Fanta Orange',                   category: 'Drinks',             unit: 'cans',       par: 12, locations: { wir: 4, df: 12 },       actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i68', name: 'Bottled Water',                  category: 'Drinks',             unit: 'bottles',    par: 24, locations: { wir: 10, df: 18 },      actionType: 'Buy',     lastUpdatedBy: 'Jayminn',  lastUpdatedAt: '2026-06-01T16:30:00' },
  { id: 'i69', name: 'Apple Juice',                    category: 'Drinks',             unit: 'bottles',    par: 12, locations: { wir: 6, df: 6 },        actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  // Other
  { id: 'i70', name: 'Canola Fryer Oil',               category: 'Other',              unit: 'units',      par: 4,  locations: { ds: 3 },                actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
  { id: 'i71', name: 'Brioche Sandwich Wrappers',      category: 'Other',              unit: 'packs',      par: 5,  locations: { kds: 4 },               actionType: 'Buy',     lastUpdatedBy: 'Claude',  lastUpdatedAt: '2026-06-01T17:55:00' },
  { id: 'i72', name: 'Fries Bags',                     category: 'Other',              unit: 'packs',      par: 4,  locations: { kds: 3 },               actionType: 'Buy',     lastUpdatedBy: 'Najmi',   lastUpdatedAt: '2026-06-01T18:21:00' },
];

// Prep items
let PREP_ITEMS = [
  { id: 'p1',  name: 'Lasagna',            unit: 'servings',     qty: 7,  prepDate: '2026-05-30', prepTime: '11:00 PM', shelfHrs: 96,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Claude' },
  { id: 'p2',  name: 'Irish Stew',         unit: 'oz',           qty: 64, prepDate: '2026-05-31', prepTime: '09:00 AM', shelfHrs: 24,  status: 'Use Soon', location: 'Deli Fridge',               prepBy: 'Garik' },
  { id: 'p3',  name: 'Mac and Cheese',     unit: 'green-tops',   qty: 0,  prepDate: '2026-05-31', prepTime: '03:00 AM', shelfHrs: 72,  status: 'Needs Prep',location: 'Walk-In Fridge, Deli Fridge', prepBy: 'Claude' },
  { id: 'p4',  name: 'Chili Crisp Aioli',  unit: 'bottles+jars', qty: 4,  prepDate: '2026-06-01', prepTime: '07:00 AM', shelfHrs: 24,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Najmi' },
  { id: 'p5',  name: 'Sriracha Aioli',     unit: 'bottles+jars', qty: 7,  prepDate: '2026-06-01', prepTime: '12:00 PM', shelfHrs: 48,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Najmi' },
  { id: 'p6',  name: 'Herb Aioli',         unit: 'bottles+jars', qty: 4,  prepDate: '2026-05-29', prepTime: '01:00 PM', shelfHrs: 96,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Claude' },
  { id: 'p7',  name: 'Aioli',              unit: 'bottles+jars', qty: 7,  prepDate: '2026-06-01', prepTime: '03:00 AM', shelfHrs: 96,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Jayminn' },
  { id: 'p8',  name: 'Peri Peri Aioli',    unit: 'bottles+jars', qty: 6,  prepDate: '2026-05-31', prepTime: '03:00 PM', shelfHrs: 72,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Garik' },
  { id: 'p9',  name: 'Tartar Sauce',       unit: 'bottles+jars', qty: 2,  prepDate: '2026-06-01', prepTime: '08:00 AM', shelfHrs: 24,  status: 'Use Soon', location: 'Deli Fridge',               prepBy: 'Najmi' },
  { id: 'p10', name: 'Burger Sauce',       unit: 'bottles+jars', qty: 4,  prepDate: '2026-05-30', prepTime: '03:00 PM', shelfHrs: 96,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Claude' },
  { id: 'p11', name: 'Cashew Queso',       unit: 'bottles+jars', qty: 7,  prepDate: '2026-06-01', prepTime: '10:00 AM', shelfHrs: 48,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Najmi' },
  { id: 'p12', name: 'Curry',              unit: 'tubs',          qty: 8,  prepDate: '2026-05-31', prepTime: '03:00 PM', shelfHrs: 96,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Garik' },
  { id: 'p13', name: 'Mushy Peas',         unit: 'tubs',          qty: 6,  prepDate: '2026-05-31', prepTime: '01:00 PM', shelfHrs: 96,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Claude' },
  { id: 'p14', name: 'Formed Meat Patties',unit: 'pans',          qty: 7,  prepDate: '2026-06-01', prepTime: '07:00 AM', shelfHrs: 72,  status: 'Fresh',    location: "Deli Fridge, Chef's Base",  prepBy: 'Najmi' },
  { id: 'p15', name: 'Red Wine Mushrooms', unit: 'pans',          qty: 3,  prepDate: '2026-05-30', prepTime: '03:00 PM', shelfHrs: 24,  status: 'Expired',  location: "Deli Fridge, Chef's Base",  prepBy: 'Jayminn' },
  { id: 'p16', name: 'Caramelized Onions', unit: 'pans',          qty: 4,  prepDate: '2026-06-01', prepTime: '03:00 AM', shelfHrs: 48,  status: 'Fresh',    location: "Deli Fridge, Chef's Base",  prepBy: 'Claude' },
  { id: 'p17', name: 'Grilled Leek',       unit: 'pans',          qty: 1,  prepDate: '2026-05-31', prepTime: '01:00 PM', shelfHrs: 96,  status: 'Fresh',    location: "Deli Fridge, Chef's Base",  prepBy: 'Garik' },
  { id: 'p18', name: 'Mashed Potato',      unit: 'green-tops',   qty: 2,  prepDate: '2026-05-31', prepTime: '01:00 PM', shelfHrs: 48,  status: 'Use Soon', location: 'Walk-In Fridge, Deli Fridge', prepBy: 'Najmi' },
  { id: 'p19', name: 'Sloppy Joe',         unit: 'tubs',          qty: 8,  prepDate: '2026-06-01', prepTime: '03:00 AM', shelfHrs: 24,  status: 'Use Soon', location: 'Deli Fridge',               prepBy: 'Claude' },
  { id: 'p20', name: 'Burger Cheese Sauce',unit: 'tubs+cups',     qty: 1,  prepDate: '2026-06-01', prepTime: '12:00 PM', shelfHrs: 48,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Najmi' },
  { id: 'p21', name: 'Gravy',              unit: 'tubs',          qty: 7,  prepDate: '2026-06-01', prepTime: '12:00 PM', shelfHrs: 48,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Jayminn' },
  { id: 'p22', name: 'Pickled Cabbage',    unit: 'green-tops',   qty: 6,  prepDate: '2026-06-01', prepTime: '03:00 AM', shelfHrs: 72,  status: 'Fresh',    location: 'Walk-In Fridge, Deli Fridge', prepBy: 'Garik' },
  { id: 'p23', name: 'Rice',               unit: 'tubs',          qty: 7,  prepDate: '2026-06-01', prepTime: '03:00 PM', shelfHrs: 48,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Najmi' },
  { id: 'p24', name: 'Pickles',            unit: 'green-tops',   qty: 3,  prepDate: '2026-06-01', prepTime: '07:00 AM', shelfHrs: 96,  status: 'Fresh',    location: 'Walk-In Fridge, Deli Fridge', prepBy: 'Claude' },
  { id: 'p25', name: 'Kimchi',             unit: 'green-tops',   qty: 1,  prepDate: '2026-06-01', prepTime: '03:00 AM', shelfHrs: 48,  status: 'Fresh',    location: 'Walk-In Fridge, Deli Fridge', prepBy: 'Najmi' },
  { id: 'p26', name: 'Whipped Cream',      unit: 'ramekins',     qty: 5,  prepDate: '2026-06-01', prepTime: '02:00 PM', shelfHrs: 24,  status: 'Fresh',    location: 'Deli Fridge',               prepBy: 'Garik' },
  { id: 'p27', name: 'Oreo Batter',        unit: 'tubs',          qty: 4,  prepDate: '2026-06-01', prepTime: '11:00 PM', shelfHrs: 24,  status: 'Fresh',    location: "Deli Fridge, Chef's Base",  prepBy: 'Claude' },
];

// Recent updates feed
let UPDATES = [
  { id: 'u1',  itemName: 'Impossible Nuggets',     location: 'Kitchen Freezer',       oldQty: 4,  newQty: 6,  unit: 'boxes',   updatedBy: 'Najmi',   updatedAt: '2026-06-01T18:34:00' },
  { id: 'u2',  itemName: 'Vegenaise Vegan Mayo',   location: 'Walk-In Fridge',        oldQty: 1,  newQty: 2,  unit: 'gallons', updatedBy: 'Claude',  updatedAt: '2026-06-01T18:14:00' },
  { id: 'u3',  itemName: 'Sriracha',               location: 'Kitchen Dry Storage',   oldQty: 6,  newQty: 4,  unit: 'bottles', updatedBy: 'Najmi',   updatedAt: '2026-06-01T18:10:00' },
  { id: 'u4',  itemName: 'Shoestring Fries',       location: 'Walk-In Freezer',       oldQty: 10, newQty: 8,  unit: 'boxes',   updatedBy: 'Jayminn',  updatedAt: '2026-06-01T17:00:00' },
  { id: 'u5',  itemName: 'Formed Meat Patties',    location: "Chef's Base Fridge",    oldQty: 5,  newQty: 7,  unit: 'pans',    updatedBy: 'Claude',  updatedAt: '2026-06-01T16:45:00' },
  { id: 'u6',  itemName: 'Cashew Queso',           location: 'Deli Fridge',           oldQty: 4,  newQty: 7,  unit: 'bottles+jars', updatedBy: 'Najmi',  updatedAt: '2026-06-01T15:30:00' },
];

const CATEGORIES = [
  'All', 'Faux Meats', 'Faux Cheeses', 'Vegetables & Herbs', 'Carbs',
  'Sweets', 'Condiments & Sauces', 'Seasonings', 'Ingredients', 'Drinks', 'Other', 'Prepped Items'
];

// ============================================================
// STATE
// ============================================================
let currentTab = 'home';
let currentLocationId = null;
let selectedCategory = 'All';
let searchQuery = '';
let alertFilter = 'all';
let prepFilter = 'all';
let updatesFilter = { location: 'all', user: 'all' };
let selectedItemId = null;
let idCounter = 100;

// ============================================================
// HELPERS
// ============================================================
function totalQty(item) {
  return Object.values(item.locations).reduce((a, b) => a + b, 0);
}

function getStatus(item) {
  const total = totalQty(item);
  if (total === 0) return 'out';
  if (total < item.par * 0.5) return 'critical';
  if (total < item.par) return 'low';
  return 'ok';
}

function statusLabel(item) {
  const s = getStatus(item);
  if (s === 'out') return { label: 'OUT', cls: 'status-out' };
  if (s === 'critical') return { label: 'Critical', cls: 'status-critical' };
  if (s === 'low') return { label: 'Low', cls: 'status-low' };
  return { label: 'OK', cls: 'status-ok' };
}

function locName(id) {
  const l = LOCATIONS.find(x => x.id === id);
  return l ? l.name : id;
}

function locTypeIcon(type) {
  if (type === 'freezer') return '🧊';
  if (type === 'fridge') return '❄️';
  return '📦';
}

function formatDateTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const isToday = d.toDateString() === now.toDateString();
  const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return isToday ? `Today, ${timeStr}` : `${d.toLocaleDateString([], { month: 'short', day: 'numeric' })}, ${timeStr}`;
}

function prepStatusCls(status) {
  if (status === 'Expired') return 'prep-expired';
  if (status === 'Use Soon' || status === 'Use Today') return 'prep-soon';
  if (status === 'Needs Prep') return 'prep-needs';
  return 'prep-fresh';
}

function newId(prefix) {
  return prefix + (++idCounter);
}

function pushUpdate(itemName, location, oldQty, newQty, unit) {
  UPDATES.unshift({
    id: newId('u'),
    itemName, location, oldQty, newQty, unit,
    updatedBy: 'Najmi',
    updatedAt: new Date().toISOString()
  });
}

// ============================================================
// NAVIGATION
// ============================================================
function navigate(tab) {
  currentTab = tab;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  renderMain();
}

// ============================================================
// RENDER MAIN
// ============================================================
function renderMain() {
  const main = document.getElementById('main-content');
  if (currentTab === 'home')    main.innerHTML = renderHome();
  if (currentTab === 'count')   main.innerHTML = renderCount();
  if (currentTab === 'items')   main.innerHTML = renderItems();
  if (currentTab === 'alerts')  main.innerHTML = renderAlerts();
  if (currentTab === 'updates') main.innerHTML = renderUpdates();
  bindEvents();
}

// ============================================================
// HOME
// ============================================================
function renderHome() {
  const lowItems = ITEMS.filter(i => ['low','critical','out'].includes(getStatus(i)));
  const outItems = ITEMS.filter(i => getStatus(i) === 'out');
  const buyItems = ITEMS.filter(i => ['low','critical','out'].includes(getStatus(i)) && i.actionType === 'Buy');
  const expiringSoon = PREP_ITEMS.filter(p => p.status === 'Use Soon' || p.status === 'Use Today' || p.status === 'Expired');

  return `
  <div class="home-screen">
    <div class="home-header">
      <div>
        <div class="home-greeting">Good afternoon 👋</div>
        <div class="home-title">Val's Vegan Inventory</div>
        <div class="home-sub">Sunday, June 1, 2026</div>
      </div>
      <div class="home-avatar">N</div>
    </div>

    <div class="stat-grid">
      <div class="stat-card stat-red" onclick="navigate('alerts')">
        <div class="stat-num">${lowItems.length}</div>
        <div class="stat-label">Low Stock Items</div>
      </div>
      <div class="stat-card stat-orange" onclick="navigate('alerts')">
        <div class="stat-num">${outItems.length}</div>
        <div class="stat-label">Out of Stock</div>
      </div>
      <div class="stat-card stat-blue" onclick="navigate('alerts')">
        <div class="stat-num">${buyItems.length}</div>
        <div class="stat-label">Need to Buy</div>
      </div>
      <div class="stat-card stat-purple" onclick="switchTab('prep')">
        <div class="stat-num">${expiringSoon.length}</div>
        <div class="stat-label">Prep Attention</div>
      </div>
    </div>

    <div class="section-title">Quick Actions</div>
    <div class="quick-actions">
      <button class="quick-btn" onclick="startLocationCount()">
        <span class="quick-icon">📍</span>
        <span>Start Count</span>
      </button>
      <button class="quick-btn" onclick="navigate('items')">
        <span class="quick-icon">🔍</span>
        <span>Find Item</span>
      </button>
      <button class="quick-btn" onclick="navigate('alerts')">
        <span class="quick-icon">⚠️</span>
        <span>Low Stock</span>
      </button>
      <button class="quick-btn" onclick="openAddItemModal()">
        <span class="quick-icon">➕</span>
        <span>Add Item</span>
      </button>
    </div>

    <div class="section-title">Recent Updates</div>
    <div class="updates-feed">
      ${UPDATES.slice(0,4).map(u => `
        <div class="update-card">
          <div class="update-meta">${formatDateTime(u.updatedAt)} · ${u.updatedBy}</div>
          <div class="update-desc"><strong>${u.itemName}</strong> in ${u.location}</div>
          <div class="update-change">${u.oldQty} → ${u.newQty} ${u.unit}</div>
        </div>
      `).join('')}
    </div>

    <div class="section-title" style="display:flex;align-items:center;justify-content:space-between">
      <span>Prep Alerts</span>
      <button class="text-btn" onclick="switchTab('prep')">View all</button>
    </div>
    ${expiringSoon.slice(0,3).map(p => `
      <div class="prep-mini-card ${prepStatusCls(p.status)}">
        <div class="prep-mini-info">
          <div class="prep-mini-name">${p.name}</div>
          <div class="prep-mini-loc">${p.location}</div>
        </div>
        <div class="prep-mini-status">${p.status}</div>
      </div>
    `).join('')}
  </div>`;
}

function switchTab(sub) {
  if (sub === 'prep') { currentTab = 'alerts'; alertFilter = 'prep'; }
  navigate(currentTab);
}

// ============================================================
// COUNT
// ============================================================
function renderCount() {
  if (!currentLocationId) return renderLocationPicker();
  return renderLocationCount();
}

function renderLocationPicker() {
  return `
  <div class="screen-header">
    <div class="screen-title">📍 Location Count</div>
    <div class="screen-sub">Select a location to begin counting</div>
  </div>
  <div class="location-list">
    ${LOCATIONS.map(loc => {
      const locItems = ITEMS.filter(i => Object.keys(i.locations).includes(loc.id));
      const lowCount = locItems.filter(i => ['low','critical','out'].includes(getStatus(i))).length;
      return `
      <div class="location-card" onclick="selectLocation('${loc.id}')">
        <div class="loc-icon">${locTypeIcon(loc.type)}</div>
        <div class="loc-info">
          <div class="loc-name">${loc.name}</div>
          <div class="loc-meta">${locItems.length} items${lowCount > 0 ? ` · <span class="warn-text">${lowCount} low</span>` : ''}</div>
        </div>
        <div class="loc-arrow">›</div>
      </div>`;
    }).join('')}
  </div>
  <div style="margin-top:16px;text-align:center">
    <button class="btn-secondary" onclick="openManageLocationsModal()">⚙️ Manage Locations</button>
  </div>`;
}

let countSearchQuery = '';

function selectLocation(id) {
  currentLocationId = id;
  countSearchQuery = '';
  renderMain();
}

function renderLocationCount() {
  const loc = LOCATIONS.find(l => l.id === currentLocationId);
  const allLocItems = ITEMS.filter(i => currentLocationId in i.locations);
  const locItems = allLocItems.filter(i =>
    countSearchQuery === '' || i.name.toLowerCase().includes(countSearchQuery.toLowerCase())
  );

  return `
  <div class="count-screen-wrap">
    <div class="count-top-bar">
      <button class="back-btn" onclick="currentLocationId=null;countSearchQuery='';renderMain()">‹</button>
      <div class="count-top-info">
        <div class="screen-title">${locTypeIcon(loc.type)} ${loc.name}</div>
        <div class="screen-sub">${allLocItems.length} items · tap to update</div>
      </div>
    </div>

    <div class="count-search-wrap">
      <input
        class="search-input"
        id="count-search"
        type="text"
        placeholder="🔍  Search items in this location..."
        value="${countSearchQuery}"
        oninput="filterCountItems(this.value)"
      >
    </div>

    <div class="count-results-bar" id="count-results-bar">
      ${locItems.length} of ${allLocItems.length} items
    </div>

    <div class="count-list" id="count-list">
      ${renderCountCards(locItems)}
    </div>

    <div class="sticky-footer">
      <button class="btn-primary full-width" onclick="finishCount('${currentLocationId}')">✓ Save Count</button>
    </div>
  </div>`;
}

function renderCountCards(locItems) {
  if (locItems.length === 0) {
    return `<div class="empty-state">No items match your search</div>`;
  }
  return locItems.map(item => {
    const qty = item.locations[currentLocationId];
    const st = statusLabel(item);
    const sliderMax = Math.max(item.par * 2, qty + 10, 20);
    return `
    <div class="count-card" id="count-card-${item.id}">
      <div class="count-item-header">
        <div>
          <div class="count-item-name">${item.name}</div>
          <div class="count-item-meta">${item.category} · ${item.unit}</div>
        </div>
        <span class="status-badge ${st.cls}" id="badge-${item.id}">${st.label}</span>
      </div>

      <div class="count-controls">
        <button class="qty-btn minus" onclick="adjustQty('${item.id}','${currentLocationId}',-1)">−</button>
        <input
          class="qty-type-input"
          id="qty-${item.id}-${currentLocationId}"
          type="number"
          min="0"
          value="${qty}"
          onchange="commitTypedQty('${item.id}','${currentLocationId}',this)"
          oninput="syncSlider('${item.id}','${currentLocationId}',this.value,${sliderMax})"
        >
        <button class="qty-btn plus" onclick="adjustQty('${item.id}','${currentLocationId}',1)">+</button>
      </div>

      <div class="slider-wrap">
        <span class="slider-label">0</span>
        <input
          class="qty-slider"
          id="slider-${item.id}-${currentLocationId}"
          type="range"
          min="0"
          max="${sliderMax}"
          value="${qty}"
          oninput="syncFromSlider('${item.id}','${currentLocationId}',this.value)"
          onchange="commitSliderQty('${item.id}','${currentLocationId}',this.value)"
        >
        <span class="slider-label">${sliderMax}</span>
      </div>

      <div class="quick-chips">
        <button class="chip" onclick="setQty('${item.id}','${currentLocationId}',0)">0</button>
        <button class="chip" onclick="setQty('${item.id}','${currentLocationId}',Math.ceil(${item.par}*0.25))">Low</button>
        <button class="chip" onclick="setQty('${item.id}','${currentLocationId}',Math.ceil(${item.par}*0.5))">Half</button>
        <button class="chip" onclick="setQty('${item.id}','${currentLocationId}',${item.par})">Full</button>
      </div>

      <div class="count-updated" id="updated-${item.id}">Last updated: ${formatDateTime(item.lastUpdatedAt)} by ${item.lastUpdatedBy}</div>
    </div>`;
  }).join('');
}

function filterCountItems(query) {
  countSearchQuery = query;
  const allLocItems = ITEMS.filter(i => currentLocationId in i.locations);
  const filtered = allLocItems.filter(i =>
    query === '' || i.name.toLowerCase().includes(query.toLowerCase())
  );
  const list = document.getElementById('count-list');
  const bar = document.getElementById('count-results-bar');
  if (list) list.innerHTML = renderCountCards(filtered);
  if (bar) bar.textContent = `${filtered.length} of ${allLocItems.length} items`;
}

// Sync the number input → slider (while typing)
function syncSlider(itemId, locId, val, sliderMax) {
  const slider = document.getElementById(`slider-${itemId}-${locId}`);
  if (slider) slider.value = Math.min(Math.max(0, parseInt(val) || 0), sliderMax);
}

// Sync the slider → number input (while dragging, live preview only)
function syncFromSlider(itemId, locId, val) {
  const input = document.getElementById(`qty-${itemId}-${locId}`);
  if (input) input.value = val;
}

// Commit when slider drag ends
function commitSliderQty(itemId, locId, val) {
  const newQty = Math.max(0, parseInt(val) || 0);
  const item = ITEMS.find(i => i.id === itemId);
  const oldQty = item.locations[locId] || 0;
  item.locations[locId] = newQty;
  const input = document.getElementById(`qty-${itemId}-${locId}`);
  if (input) input.value = newQty;
  if (oldQty !== newQty) pushUpdate(item.name, locName(locId), oldQty, newQty, item.unit);
  item.lastUpdatedBy = 'Najmi';
  item.lastUpdatedAt = new Date().toISOString();
  refreshCountCardMeta(item);
}

// Commit when typed input loses focus or Enter pressed
function commitTypedQty(itemId, locId, inputEl) {
  const newQty = Math.max(0, parseInt(inputEl.value) || 0);
  inputEl.value = newQty;
  const item = ITEMS.find(i => i.id === itemId);
  const oldQty = item.locations[locId] || 0;
  item.locations[locId] = newQty;
  const sliderMax = Math.max(item.par * 2, newQty + 10, 20);
  const slider = document.getElementById(`slider-${itemId}-${locId}`);
  if (slider) { slider.max = sliderMax; slider.value = newQty; }
  if (oldQty !== newQty) pushUpdate(item.name, locName(locId), oldQty, newQty, item.unit);
  item.lastUpdatedBy = 'Najmi';
  item.lastUpdatedAt = new Date().toISOString();
  refreshCountCardMeta(item);
}

function adjustQty(itemId, locId, delta) {
  const item = ITEMS.find(i => i.id === itemId);
  const oldQty = item.locations[locId] || 0;
  const newQty = Math.max(0, oldQty + delta);
  item.locations[locId] = newQty;
  const input = document.getElementById(`qty-${itemId}-${locId}`);
  if (input) input.value = newQty;
  const sliderMax = Math.max(item.par * 2, newQty + 10, 20);
  const slider = document.getElementById(`slider-${itemId}-${locId}`);
  if (slider) { slider.max = sliderMax; slider.value = newQty; }
  if (oldQty !== newQty) pushUpdate(item.name, locName(locId), oldQty, newQty, item.unit);
  item.lastUpdatedBy = 'Najmi';
  item.lastUpdatedAt = new Date().toISOString();
  refreshCountCardMeta(item);
}

function setQty(itemId, locId, newQty) {
  const item = ITEMS.find(i => i.id === itemId);
  const oldQty = item.locations[locId] || 0;
  newQty = Math.max(0, Math.round(newQty));
  item.locations[locId] = newQty;
  const input = document.getElementById(`qty-${itemId}-${locId}`);
  if (input) input.value = newQty;
  const sliderMax = Math.max(item.par * 2, newQty + 10, 20);
  const slider = document.getElementById(`slider-${itemId}-${locId}`);
  if (slider) { slider.max = sliderMax; slider.value = newQty; }
  if (oldQty !== newQty) pushUpdate(item.name, locName(locId), oldQty, newQty, item.unit);
  item.lastUpdatedBy = 'Najmi';
  item.lastUpdatedAt = new Date().toISOString();
  refreshCountCardMeta(item);
}

function refreshCountCardMeta(item) {
  const st = statusLabel(item);
  const badge = document.getElementById(`badge-${item.id}`);
  if (badge) { badge.className = `status-badge ${st.cls}`; badge.textContent = st.label; }
  const updated = document.getElementById(`updated-${item.id}`);
  if (updated) updated.textContent = `Last updated: ${formatDateTime(item.lastUpdatedAt)} by ${item.lastUpdatedBy}`;
}

// kept for backwards compat (used by modal)
function updateCountCardStatus(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  refreshCountCardMeta(item);
}

function finishCount(locId) {
  currentLocationId = null;
  countSearchQuery = '';
  showToast('Count saved for ' + locName(locId));
  renderMain();
}

// ============================================================
// ITEMS
// ============================================================
function renderItems() {
  const filtered = ITEMS.filter(i => {
    const matchCat = selectedCategory === 'All' || i.category === selectedCategory;
    const matchQ = searchQuery === '' || i.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  });

  return `
  <div class="screen-header">
    <div class="screen-title">📋 Item Directory</div>
  </div>
  <div class="search-wrap">
    <input class="search-input" id="item-search" type="text" placeholder="🔍  Search items..." value="${searchQuery}" oninput="onSearch(this.value)">
  </div>
  <div class="cat-scroll">
    ${CATEGORIES.filter(c => c !== 'Prepped Items').map(c => `
      <button class="cat-chip ${selectedCategory === c ? 'cat-active' : ''}" onclick="selectCat('${c}')">${c}</button>
    `).join('')}
  </div>
  <div class="item-count-bar">${filtered.length} item${filtered.length !== 1 ? 's' : ''}</div>
  <div class="items-list">
    ${filtered.map(item => {
      const total = totalQty(item);
      const st = statusLabel(item);
      const locs = Object.keys(item.locations).filter(l => item.locations[l] > 0).map(l => locName(l)).join(', ');
      return `
      <div class="item-card" onclick="openItemDetail('${item.id}')">
        <div class="item-card-top">
          <div class="item-card-name">${item.name}</div>
          <span class="status-badge ${st.cls}">${st.label}</span>
        </div>
        <div class="item-card-meta">${item.category} · ${item.unit}</div>
        <div class="item-card-row">
          <span class="item-total">Total: <strong>${total} ${item.unit}</strong></span>
          <span class="item-par">Par: ${item.par}</span>
        </div>
        ${locs ? `<div class="item-locations">📍 ${locs}</div>` : '<div class="item-locations no-loc">No location assigned</div>'}
      </div>`;
    }).join('')}
  </div>`;
}

function onSearch(val) {
  searchQuery = val;
  const filtered = ITEMS.filter(i => {
    const matchCat = selectedCategory === 'All' || i.category === selectedCategory;
    const matchQ = val === '' || i.name.toLowerCase().includes(val.toLowerCase());
    return matchCat && matchQ;
  });
  const list = document.querySelector('.items-list');
  const bar = document.querySelector('.item-count-bar');
  if (bar) bar.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;
  if (list) {
    list.innerHTML = filtered.map(item => {
      const total = totalQty(item);
      const st = statusLabel(item);
      const locs = Object.keys(item.locations).filter(l => item.locations[l] > 0).map(l => locName(l)).join(', ');
      return `
      <div class="item-card" onclick="openItemDetail('${item.id}')">
        <div class="item-card-top">
          <div class="item-card-name">${item.name}</div>
          <span class="status-badge ${st.cls}">${st.label}</span>
        </div>
        <div class="item-card-meta">${item.category} · ${item.unit}</div>
        <div class="item-card-row">
          <span class="item-total">Total: <strong>${total} ${item.unit}</strong></span>
          <span class="item-par">Par: ${item.par}</span>
        </div>
        ${locs ? `<div class="item-locations">📍 ${locs}</div>` : '<div class="item-locations no-loc">No location assigned</div>'}
      </div>`;
    }).join('');
    list.querySelectorAll('.item-card').forEach(card => {
      card.addEventListener('click', function() {
        const id = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        openItemDetail(id);
      });
    });
  }
}

function selectCat(cat) {
  selectedCategory = cat;
  renderMain();
}

// ============================================================
// ITEM DETAIL
// ============================================================
function openItemDetail(itemId) {
  selectedItemId = itemId;
  const item = ITEMS.find(i => i.id === itemId);
  if (!item) return;
  const total = totalQty(item);
  const needed = Math.max(0, item.par - total);
  const st = statusLabel(item);

  const modal = document.getElementById('modal-overlay');
  modal.innerHTML = `
  <div class="modal-sheet" id="item-detail-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <span class="status-badge ${st.cls}">${st.label}</span>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="item-detail-name">${item.name}</div>
    <div class="item-detail-meta">${item.category} · ${item.unit}</div>

    <div class="detail-stats">
      <div class="detail-stat">
        <div class="detail-stat-val">${total}</div>
        <div class="detail-stat-lbl">On Hand</div>
      </div>
      <div class="detail-stat">
        <div class="detail-stat-val">${item.par}</div>
        <div class="detail-stat-lbl">Ideal Par</div>
      </div>
      <div class="detail-stat ${needed > 0 ? 'stat-need' : ''}">
        <div class="detail-stat-val">${needed}</div>
        <div class="detail-stat-lbl">Need to ${item.actionType}</div>
      </div>
    </div>

    <div class="detail-section-label">Locations</div>
    ${Object.entries(item.locations).map(([locId, qty]) => {
      const loc = LOCATIONS.find(l => l.id === locId);
      return `
      <div class="detail-loc-row">
        <span>${locTypeIcon(loc ? loc.type : 'dry')} ${locName(locId)}</span>
        <span class="detail-loc-qty">${qty} ${item.unit}</span>
      </div>`;
    }).join('')}

    <div class="detail-updated">Last updated: ${formatDateTime(item.lastUpdatedAt)} by ${item.lastUpdatedBy}</div>

    <div class="detail-actions">
      <button class="btn-primary" onclick="openUpdateQtyModal('${item.id}')">📝 Update Qty</button>
      <button class="btn-secondary" onclick="openEditItemModal('${item.id}')">✏️ Edit</button>
      <button class="btn-danger" onclick="confirmDelete('${item.id}')">🗑 Delete</button>
    </div>
  </div>`;
  modal.classList.add('active');
}

// ============================================================
// ALERTS
// ============================================================
function renderAlerts() {
  return `
  <div class="screen-header">
    <div class="screen-title">⚠️ Stock Alerts</div>
  </div>
  <div class="seg-control">
    <button class="seg-btn ${alertFilter === 'all' ? 'seg-active' : ''}" onclick="setAlertFilter('all')">All Low Stock</button>
    <button class="seg-btn ${alertFilter === 'buy' ? 'seg-active' : ''}" onclick="setAlertFilter('buy')">Buy List</button>
    <button class="seg-btn ${alertFilter === 'prep' ? 'seg-active' : ''}" onclick="setAlertFilter('prep')">Prep List</button>
  </div>
  ${alertFilter === 'prep' ? renderPrepList() : renderLowStockList()}`;
}

function setAlertFilter(f) {
  alertFilter = f;
  const main = document.getElementById('main-content');
  main.innerHTML = renderAlerts();
  bindEvents();
}

function renderLowStockList() {
  let items = ITEMS.filter(i => ['low','critical','out'].includes(getStatus(i)));
  if (alertFilter === 'buy') items = items.filter(i => i.actionType === 'Buy');
  if (alertFilter === 'prep') items = [];

  if (items.length === 0) return `<div class="empty-state">✅ No items matching this filter</div>`;

  return `<div class="alert-list">
    ${items.map(item => {
      const total = totalQty(item);
      const needed = Math.max(0, item.par - total);
      const st = statusLabel(item);
      const locs = Object.keys(item.locations).map(l => locName(l)).join(', ');
      return `
      <div class="alert-card" onclick="openItemDetail('${item.id}')">
        <div class="alert-card-top">
          <div class="alert-item-name">${item.name}</div>
          <span class="status-badge ${st.cls}">${st.label}</span>
        </div>
        <div class="alert-item-meta">${item.category}</div>
        <div class="alert-grid">
          <div><div class="ag-label">On Hand</div><div class="ag-val">${total} ${item.unit}</div></div>
          <div><div class="ag-label">Par</div><div class="ag-val">${item.par} ${item.unit}</div></div>
          <div><div class="ag-label">Needed</div><div class="ag-val need-val">${needed} ${item.unit}</div></div>
          <div><div class="ag-label">Action</div><div class="ag-val action-${item.actionType.toLowerCase()}">${item.actionType}</div></div>
        </div>
        <div class="alert-locs">📍 ${locs}</div>
      </div>`;
    }).join('')}
  </div>`;
}

function renderPrepList() {
  let items = PREP_ITEMS;
  if (prepFilter !== 'all') items = items.filter(p => p.status.toLowerCase().includes(prepFilter));

  return `
  <div class="prep-filter-row">
    <button class="chip ${prepFilter === 'all' ? 'chip-active' : ''}" onclick="setPrepFilter('all')">All</button>
    <button class="chip ${prepFilter === 'fresh' ? 'chip-active' : ''}" onclick="setPrepFilter('fresh')">Fresh</button>
    <button class="chip ${prepFilter === 'soon' ? 'chip-active' : ''}" onclick="setPrepFilter('soon')">Use Soon</button>
    <button class="chip ${prepFilter === 'expired' ? 'chip-active' : ''}" onclick="setPrepFilter('expired')">Expired</button>
    <button class="chip ${prepFilter === 'needs' ? 'chip-active' : ''}" onclick="setPrepFilter('needs')">Needs Prep</button>
  </div>
  <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
    <button class="btn-primary small-btn" onclick="openAddPrepModal()">+ New Prep Batch</button>
  </div>
  <div class="prep-list">
    ${items.map(p => `
      <div class="prep-card ${prepStatusCls(p.status)}">
        <div class="prep-card-top">
          <div class="prep-name">${p.name}</div>
          <span class="prep-status-badge">${p.status}</span>
        </div>
        <div class="prep-details-grid">
          <div><span class="pd-label">Qty</span><span class="pd-val">${p.qty} ${p.unit}</span></div>
          <div><span class="pd-label">Prepped</span><span class="pd-val">${p.prepDate} ${p.prepTime}</span></div>
          <div><span class="pd-label">Shelf Life</span><span class="pd-val">${p.shelfHrs}h</span></div>
          <div><span class="pd-label">By</span><span class="pd-val">${p.prepBy}</span></div>
        </div>
        <div class="prep-loc">📍 ${p.location}</div>
      </div>
    `).join('')}
  </div>`;
}

function setPrepFilter(f) {
  prepFilter = f;
  const main = document.getElementById('main-content');
  main.innerHTML = renderAlerts();
  bindEvents();
}

// ============================================================
// UPDATES
// ============================================================
function renderUpdates() {
  const allLocs = ['all', ...new Set(UPDATES.map(u => u.location))];
  const allUsers = ['all', ...new Set(UPDATES.map(u => u.updatedBy))];
  let updates = UPDATES;
  if (updatesFilter.location !== 'all') updates = updates.filter(u => u.location === updatesFilter.location);
  if (updatesFilter.user !== 'all') updates = updates.filter(u => u.updatedBy === updatesFilter.user);

  return `
  <div class="screen-header">
    <div class="screen-title">🕐 Recent Updates</div>
    <div class="screen-sub">${updates.length} update${updates.length !== 1 ? 's' : ''}</div>
  </div>
  <div class="filter-row">
    <select class="filter-select" onchange="setUpdatesFilter('location', this.value)">
      ${allLocs.map(l => `<option value="${l}" ${updatesFilter.location === l ? 'selected' : ''}>${l === 'all' ? 'All Locations' : l}</option>`).join('')}
    </select>
    <select class="filter-select" onchange="setUpdatesFilter('user', this.value)">
      ${allUsers.map(u => `<option value="${u}" ${updatesFilter.user === u ? 'selected' : ''}>${u === 'all' ? 'All Staff' : u}</option>`).join('')}
    </select>
  </div>
  <div class="updates-feed full-feed">
    ${updates.length === 0 ? '<div class="empty-state">No updates matching filters</div>' :
      updates.map(u => `
      <div class="update-card">
        <div class="update-meta">${formatDateTime(u.updatedAt)} · ${u.updatedBy}</div>
        <div class="update-desc"><strong>${u.itemName}</strong> in ${u.location}</div>
        <div class="update-change">${u.oldQty} ${u.unit} → ${u.newQty} ${u.unit}</div>
      </div>`).join('')
    }
  </div>`;
}

function setUpdatesFilter(key, val) {
  updatesFilter[key] = val;
  const main = document.getElementById('main-content');
  main.innerHTML = renderUpdates();
  bindEvents();
}

// ============================================================
// MODALS
// ============================================================
function closeModal() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.remove('active');
  modal.innerHTML = '';
}

function openAddItemModal() {
  const modal = document.getElementById('modal-overlay');
  modal.innerHTML = `
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <div class="modal-title">Add New Item</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <form id="add-item-form" class="modal-form">
      <label>Item Name *</label>
      <input type="text" id="new-item-name" placeholder="e.g. Impossible Beef Bulk" required>
      <label>Category *</label>
      <select id="new-item-cat">
        ${CATEGORIES.filter(c => c !== 'All' && c !== 'Prepped Items').map(c => `<option>${c}</option>`).join('')}
      </select>
      <label>Unit *</label>
      <input type="text" id="new-item-unit" placeholder="e.g. boxes, bags, gallons">
      <label>Ideal Par (minimum total)</label>
      <input type="number" id="new-item-par" placeholder="e.g. 5" min="0">
      <label>Location(s)</label>
      <div class="checkbox-group">
        ${LOCATIONS.map(l => `
          <label class="check-label">
            <input type="checkbox" name="new-item-loc" value="${l.id}"> ${l.name}
          </label>`).join('')}
      </div>
      <label>Item Type</label>
      <select id="new-item-type">
        <option value="Buy">Bought</option>
        <option value="Prep">Prepped</option>
        <option value="Monitor">Monitor</option>
      </select>
    </form>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="submitAddItem()">Add Item</button>
    </div>
  </div>`;
  modal.classList.add('active');
}

function submitAddItem() {
  const name = document.getElementById('new-item-name').value.trim();
  if (!name) { showToast('Item name is required'); return; }
  const cat = document.getElementById('new-item-cat').value;
  const unit = document.getElementById('new-item-unit').value.trim() || 'units';
  const par = parseInt(document.getElementById('new-item-par').value) || 0;
  const type = document.getElementById('new-item-type').value;
  const checkedLocs = [...document.querySelectorAll('input[name="new-item-loc"]:checked')].map(c => c.value);
  const locations = {};
  checkedLocs.forEach(l => { locations[l] = 0; });
  ITEMS.push({
    id: newId('i'), name, category: cat, unit, par, locations,
    actionType: type, lastUpdatedBy: 'Najmi', lastUpdatedAt: new Date().toISOString()
  });
  closeModal();
  showToast(`"${name}" added`);
  navigate('items');
}

function openEditItemModal(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  if (!item) return;
  const modal = document.getElementById('modal-overlay');
  modal.innerHTML = `
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <div class="modal-title">Edit Item</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <form class="modal-form">
      <label>Item Name</label>
      <input type="text" id="edit-item-name" value="${item.name}">
      <label>Category</label>
      <select id="edit-item-cat">
        ${CATEGORIES.filter(c => c !== 'All' && c !== 'Prepped Items').map(c => `<option ${c === item.category ? 'selected' : ''}>${c}</option>`).join('')}
      </select>
      <label>Unit</label>
      <input type="text" id="edit-item-unit" value="${item.unit}">
      <label>Ideal Par</label>
      <input type="number" id="edit-item-par" value="${item.par}" min="0">
      <label>Action Type</label>
      <select id="edit-item-type">
        <option value="Buy" ${item.actionType === 'Buy' ? 'selected' : ''}>Buy</option>
        <option value="Prep" ${item.actionType === 'Prep' ? 'selected' : ''}>Prep</option>
        <option value="Monitor" ${item.actionType === 'Monitor' ? 'selected' : ''}>Monitor</option>
      </select>
    </form>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="openItemDetail('${itemId}')">Cancel</button>
      <button class="btn-primary" onclick="submitEditItem('${itemId}')">Save Changes</button>
    </div>
  </div>`;
  modal.classList.add('active');
}

function submitEditItem(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  if (!item) return;
  item.name = document.getElementById('edit-item-name').value.trim() || item.name;
  item.category = document.getElementById('edit-item-cat').value;
  item.unit = document.getElementById('edit-item-unit').value.trim() || item.unit;
  item.par = parseInt(document.getElementById('edit-item-par').value) || item.par;
  item.actionType = document.getElementById('edit-item-type').value;
  item.lastUpdatedAt = new Date().toISOString();
  item.lastUpdatedBy = 'Najmi';
  closeModal();
  showToast('Item updated');
  navigate('items');
}

function confirmDelete(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  const modal = document.getElementById('modal-overlay');
  modal.innerHTML = `
  <div class="modal-sheet modal-small">
    <div class="modal-handle"></div>
    <div class="delete-icon">🗑️</div>
    <div class="delete-title">Delete this item?</div>
    <div class="delete-msg">This will remove <strong>${item.name}</strong> from all assigned locations.</div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="openItemDetail('${itemId}')">Cancel</button>
      <button class="btn-danger" onclick="deleteItem('${itemId}')">Delete</button>
    </div>
  </div>`;
  modal.classList.add('active');
}

function deleteItem(itemId) {
  ITEMS = ITEMS.filter(i => i.id !== itemId);
  closeModal();
  showToast('Item deleted');
  navigate('items');
}

function openUpdateQtyModal(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  if (!item) return;
  const modal = document.getElementById('modal-overlay');
  modal.innerHTML = `
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <div class="modal-title">Update Quantity</div>
      <button class="modal-close" onclick="openItemDetail('${itemId}')">✕</button>
    </div>
    <div class="modal-subtitle">${item.name}</div>
    <form class="modal-form">
      ${Object.entries(item.locations).map(([locId, qty]) => `
        <label>${locName(locId)}</label>
        <div class="inline-qty">
          <button type="button" class="qty-btn minus" onclick="modalAdjust('${itemId}','${locId}',-1)">−</button>
          <input type="number" id="modal-qty-${itemId}-${locId}" value="${qty}" min="0" class="qty-input">
          <button type="button" class="qty-btn plus" onclick="modalAdjust('${itemId}','${locId}',1)">+</button>
        </div>
      `).join('')}
    </form>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="openItemDetail('${itemId}')">Cancel</button>
      <button class="btn-primary" onclick="saveQtyUpdates('${itemId}')">Save</button>
    </div>
  </div>`;
  modal.classList.add('active');
}

function modalAdjust(itemId, locId, delta) {
  const el = document.getElementById(`modal-qty-${itemId}-${locId}`);
  if (el) el.value = Math.max(0, parseInt(el.value || 0) + delta);
}

function saveQtyUpdates(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  Object.keys(item.locations).forEach(locId => {
    const el = document.getElementById(`modal-qty-${itemId}-${locId}`);
    if (el) {
      const oldQty = item.locations[locId];
      const newQty = Math.max(0, parseInt(el.value) || 0);
      if (oldQty !== newQty) {
        pushUpdate(item.name, locName(locId), oldQty, newQty, item.unit);
        item.locations[locId] = newQty;
      }
    }
  });
  item.lastUpdatedBy = 'Najmi';
  item.lastUpdatedAt = new Date().toISOString();
  closeModal();
  showToast('Quantities updated');
  openItemDetail(itemId);
}

function openManageLocationsModal() {
  const modal = document.getElementById('modal-overlay');
  modal.innerHTML = `
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <div class="modal-title">Manage Locations</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="loc-manage-list">
      ${LOCATIONS.map(loc => {
        const count = ITEMS.filter(i => loc.id in i.locations).length;
        return `
        <div class="loc-manage-row">
          <div>
            <div class="loc-manage-name">${locTypeIcon(loc.type)} ${loc.name}</div>
            <div class="loc-manage-meta">${loc.type} · ${count} items</div>
          </div>
          <button class="btn-danger small-btn" onclick="confirmDeleteLocation('${loc.id}')">Remove</button>
        </div>`;
      }).join('')}
    </div>
    <div class="section-divider"></div>
    <div class="modal-subtitle">Add New Location</div>
    <form class="modal-form">
      <label>Location Name</label>
      <input type="text" id="new-loc-name" placeholder="e.g. Prep Station">
      <label>Storage Type</label>
      <select id="new-loc-type">
        <option value="freezer">Freezer</option>
        <option value="fridge">Fridge</option>
        <option value="dry">Dry Storage</option>
        <option value="other">Other / Prep Station</option>
      </select>
    </form>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Close</button>
      <button class="btn-primary" onclick="submitAddLocation()">Add Location</button>
    </div>
  </div>`;
  modal.classList.add('active');
}

function confirmDeleteLocation(locId) {
  const loc = LOCATIONS.find(l => l.id === locId);
  const modal = document.getElementById('modal-overlay');
  modal.innerHTML = `
  <div class="modal-sheet modal-small">
    <div class="modal-handle"></div>
    <div class="delete-icon">⚠️</div>
    <div class="delete-title">Remove this location?</div>
    <div class="delete-msg">Removing <strong>${loc.name}</strong> will unassign it from all items.</div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="openManageLocationsModal()">Cancel</button>
      <button class="btn-danger" onclick="deleteLocation('${locId}')">Remove</button>
    </div>
  </div>`;
  modal.classList.add('active');
}

function deleteLocation(locId) {
  const idx = LOCATIONS.findIndex(l => l.id === locId);
  if (idx > -1) LOCATIONS.splice(idx, 1);
  ITEMS.forEach(item => { delete item.locations[locId]; });
  closeModal();
  showToast('Location removed');
  renderMain();
}

function submitAddLocation() {
  const name = document.getElementById('new-loc-name').value.trim();
  if (!name) { showToast('Location name required'); return; }
  const type = document.getElementById('new-loc-type').value;
  const id = 'loc_' + name.toLowerCase().replace(/\s+/g, '_');
  LOCATIONS.push({ id, name, type });
  closeModal();
  showToast(`"${name}" added`);
  renderMain();
}

function openAddPrepModal() {
  const modal = document.getElementById('modal-overlay');
  modal.innerHTML = `
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <div class="modal-title">New Prep Batch</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <form class="modal-form">
      <label>Item Name *</label>
      <input type="text" id="prep-name" placeholder="e.g. Cashew Queso">
      <label>Unit</label>
      <input type="text" id="prep-unit" placeholder="e.g. tubs, bottles+jars">
      <label>Quantity</label>
      <input type="number" id="prep-qty" placeholder="e.g. 4" min="0">
      <label>Prep Date</label>
      <input type="date" id="prep-date" value="2026-06-01">
      <label>Prep Time</label>
      <input type="time" id="prep-time">
      <label>Shelf Life (hours)</label>
      <input type="number" id="prep-shelf" placeholder="e.g. 48" min="1">
      <label>Storage Location</label>
      <input type="text" id="prep-loc" placeholder="e.g. Deli Fridge">
      <label>Prepared By</label>
      <select id="prep-by">
        ${USERS.map(u => `<option>${u}</option>`).join('')}
      </select>
    </form>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="submitAddPrep()">Add Batch</button>
    </div>
  </div>`;
  modal.classList.add('active');
}

function submitAddPrep() {
  const name = document.getElementById('prep-name').value.trim();
  if (!name) { showToast('Item name required'); return; }
  PREP_ITEMS.unshift({
    id: newId('p'),
    name,
    unit: document.getElementById('prep-unit').value.trim() || 'units',
    qty: parseInt(document.getElementById('prep-qty').value) || 0,
    prepDate: document.getElementById('prep-date').value,
    prepTime: document.getElementById('prep-time').value || '12:00',
    shelfHrs: parseInt(document.getElementById('prep-shelf').value) || 48,
    status: 'Fresh',
    location: document.getElementById('prep-loc').value.trim() || 'Deli Fridge',
    prepBy: document.getElementById('prep-by').value,
  });
  closeModal();
  showToast(`Prep batch "${name}" added`);
  alertFilter = 'prep';
  navigate('alerts');
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ============================================================
// BIND EVENTS (for dynamically rendered content)
// ============================================================
function bindEvents() {
  // Close modal on overlay click
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.onclick = function(e) {
      if (e.target === overlay) closeModal();
    };
  }
}

function startLocationCount() {
  currentLocationId = null;
  navigate('count');
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.tab));
  });
  navigate('home');
});
