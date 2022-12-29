//Made by Fluffy Bumblebee
onEvent('tags.items', event => {
	//Silicon
	event.add('c:silicon_ingots', 'ae2:silicon')
	//Manganese
	event.add('c:manganese_dusts', 'mythicmetals:manganese_dust')
	event.add('techreborn:dusts', 'mythicmetals:manganese_dust')
	event.remove('c:manganese_dusts', 'modern_industrialization:manganese_dust')
	event.remove('c:manganese_ingots', 'modern_industrialization:manganese_ingot')
	event.remove('c:manganese_nuggets', 'modern_industrialization:manganese_nugget')
	event.remove('c:manganese_dusts', 'techreborn:manganese_dust')
	event.remove('c:manganese_small_dusts', 'techreborn:manganese_small_dust')
	event.add('c:manganese_small_dusts', 'modern_industrialization:manganese_tiny_dust')
	//Iridium = modern_industrialization (Tags)
	event.add('minecraft:beacon_payment_items','modern_industrialization:iridium_ingot')
	event.add('techreborn:ingots', 'modern_industrialization:iridium_ingot')
	event.remove('c:iridium_plates', 'techreborn:iridium_plate')
	//zinc = create
	event.add('minecraft:beacon_payment_items', 'create:zinc_ingot')
	event.remove('c:zinc_ingots', 'techreborn:zinc_ingot')
	event.add('c:dusts/zinc', 'techreborn:zinc_dust')
	event.remove('c:dusts/zinc', 'createplus:zinc_dust')
	event.remove('c:zinc_dusts', 'createplus:zinc_dust')
	event.remove('c:zinc_nuggets', 'techreborn:zinc_nugget')
	event.add('c:plates/zinc', 'techreborn:zinc_plate')
	//tin = modern_industrialization
   	event.remove('c:tin_dusts', 'indrev:tin_dust')
	event.remove('c:tin_ingots', 'indrev:tin_ingot')
	event.remove('c:tin_ingots', 'techreborn:tin_ingot')
	event.remove('c:tin_nuggets', 'mythicmetals:tin_nugget')
	event.remove('c:tin_nuggets', 'indrev:tin_nugget')
	event.remove('c:tin_nuggets', 'techreborn:tin_nugget')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:tin_ingot')
	event.remove('c:raw_tin_ores', 'modern_industrialization:raw_tin')
	event.remove('c:raw_tin_ores', 'indrev:raw_tin')
	event.add('c:tin_blocks', 'indrev:tin_block')
	event.add('c:tin_blocks', 'mythicmetals:tin_block')
	event.remove('c:tin_plates', 'indrev:tin_plate')
	event.remove('c:tin_plates', 'techreborn:tin_plate')
	//Steel = modern_industrialization
	event.remove('c:steel_ingots', 'techreborn:steel_ingot')
	event.remove('c:steel_ingots', 'enriched:steel_ingot')
	event.remove('c:steel_ingots', 'indrev:steel_ingot')
	event.add('sandwichable:metal_items', 'modern_industrialization:steel_ingot')
	event.remove('sandwichable:metal_items', 'amethyst_imbuement:steel_ingot')
	event.remove('c:steel_ingots', 'amethyst_imbuement:steel_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:steel_ingot')
	event.add('c:steel_blocks', 'enriched:steel_block')
	event.remove('c:steel_nuggets', 'techreborn:steel_nugget')
	event.remove('c:steel_nuggets', 'indrev:steel_nugget')
	event.remove('c:steel_nuggets', 'mythicmetals:steel_nugget')
	event.remove('c:steel_dusts', 'indrev:steel_dust')
	event.remove('c:steel_dusts', 'techreborn:steel_dust')
	event.remove('c:steel_small_dusts', 'techreborn:steel_small_dust')
	event.add('c:steel_small_dusts', 'modern_industrialization:steel_tiny_dust')
	event.remove('c:steel_plates', 'indrev:steel_plate')
	event.remove('c:steel_plates', 'techreborn:steel_plate')
	event.remove('c:steel_ingots', 'ad_astra:steel_ingot')
	//Silver Tags
	event.remove('c:raw_silver_ores', 'modern_industrialization:raw_silver')
	event.remove('c:raw_silver_ores', 'indrev:raw_silver')
	event.add('c:raw_silver_blocks', 'indrev:raw_silver_block')
	event.add('c:raw_silver_blocks', 'mythicmetals:raw_silver_block')
	event.remove('c:silver_ingots', 'indrev:silver_ingot')
	event.remove('c:silver_ingots', 'techreborn:silver_ingot')
	event.remove('c:silver_nuggets', 'techreborn:silver_nugget')
	event.remove('c:silver_nuggets', 'mythicmetals:silver_nugget')
	event.remove('c:silver_nuggets', 'indrev:silver_nugget')
	event.remove('c:silver_plates', 'techreborn:silver_plate')
	event.remove('c:silver_plates', 'indrev:silver_plate')
	event.remove('c:silver_dusts', 'indrev:silver_dust')
	//Bronze tags
	event.remove('c:bronze_ingots', 'techreborn:bronze_ingot')
	event.remove('c:bronze_ingots', 'indrev:bronze_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:bronze_ingot')
	event.remove('c:bronze_nuggets', 'mythicmetals:bronze_nugget')
	event.remove('c:bronze_nuggets', 'indrev:bronze_nugget')
	event.remove('c:bronze_nuggets', 'techreborn:bronze_nugget')
	event.remove('c:bronze_dusts', 'indrev:bronze_dust')
	event.remove('c:bronze_dusts', 'techreborn:bronze_dust')
	event.remove('c:bronze_plates', 'indrev:bronze_plate')
	event.remove('c:bronze_plates', 'techreborn:bronze_plate')
	//Brass = Create
	event.remove('c:brass_ingots', 'techreborn:brass_ingot')
	event.add('minecraft:beacon_payment_items', 'create:brass_ingot')
	event.remove('c:brass_dusts', 'techreborn:brass_dust')
	event.remove('c:brass_plates', 'create:brass_sheet')
	event.remove('c:brass_nuggets', 'techreborn:brass_nugget')
	event.remove('c:brass_plates', 'techreborn:brass_plate')
	//invar = modern_industrialization ^_^
	event.remove('c:invar_ingots', 'techreborn:invar_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:invar_ingot')
	event.remove('c:invar_dusts', 'techreborn:invar_dust')
	event.remove('c:invar_nuggets', 'techreborn:invar_nugget')
	event.remove('c:invar_small_dusts', 'techreborn:invar_small_dust')
	event.remove('c:invar_plates', 'techreborn:invar_plate')
	event.add('c:invar_small_dusts', 'modern_industrialization:invar_tiny_dust')
	//titanium = modern_industrialization
	event.remove('c:titanium_ingots', 'techreborn:titanium_ingot')
	event.remove('c:titanium_dusts', 'techreborn:titanium_dust')
	event.remove('c:titanium_small_dusts', 'techreborn:titanium_small_dust')
	event.remove('c:titanium_nuggets', 'techreborn:titanium_nugget')
	event.remove('c:titanium_plates', 'techreborn:titanium_plate')
	event.add('c:titanium_small_dusts', 'modern_industrialization:titanium_tiny_dust')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:titanium_ingot')
	//Electrum = modern_industrialization
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:electrum_ingot')
	event.add('minecraft:piglin_loved', 'modern_industrialization:electrum_ingot')
	event.add('minecraft:ingored_by_piglin_babies', 'modern_industrialization:electrum_ingot')
	event.remove('c:electrum_ingots', 'techreborn:electrum_ingot')
	event.remove('c:electrum_ingots', 'indrev:electrum_ingot')
	event.remove('c:electrum_dusts', 'techreborn:electrum_dust')
	event.remove('c:electrum_dusts', 'indrev:electrum_dust')
	event.remove('c:electrum_nuggets', 'techreborn:electrum_nugget')
	event.remove('c:electrum_nuggets', 'indrev:electrum_nugget')
	event.remove('c:electrum_plates', 'techreborn:electrum_plate')
	event.remove('c:electrum_plates', 'indrev:electrum_plate')
	event.remove('c:electrum_small_dusts', 'techreborn:electrum_small_dust')
	event.add('c:electrum_small_dusts', 'modern_industrialization:electrum_tiny_dust')
	event.add('minecraft:piglin_loved', 'indrev:electrum_block')
	event.add('minecraft:piglin_loved', 'modern_industrialization:electrum_block')
	event.add('minecraft:piglin_loved', 'modern_industrialization:electrum_plate')
	//Tungsten = modern_industrialization
	event.remove('c:tungsten_ingots', 'techreborn:tungsten_ingot')
	event.remove('c:tungsten_ingots', 'indrev:tungsten_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:tungsten_ingot')
	event.remove('c:raw_tungsten_ores', 'indrev:raw_tungsten')
	event.remove('c:raw_tungsten_ores', 'techreborn:raw_tungsten')
	event.add('c:tungsten_blocks', 'indrev:tungsten_block')
	event.add('c:raw_tungsten_blocks', 'indrev:raw_tungsten_block')
	event.remove('c:tungsten_small_dusts', 'techreborn:tungsten_small_dust')
	event.add('c:tungsten_small_dusts', 'modern_industrialization:tungsten_tiny_dust')
	event.remove('c:tungsten_dusts', 'indrev:tungsten_dust')
	event.remove('c:tungsten_nuggets', 'techreborn:tungsten_nugget')
	event.remove('c:tungsten_nuggets', 'indrev:tungsten_nugget')
	event.remove('c:tungsten_plates', 'techreborn:tungsten_plate')
	event.remove('c:tungsten_plates', 'indrev:tungsten_plate')
	//Lead = techreborn for RAW, modern_industrialization for else
	event.remove('c:raw_lead_ores', 'indrev:raw_lead')
	event.remove('c:raw_lead_ores', 'modern_industrialization:raw_lead')
	event.add('c:raw_lead_blocks', 'indrev:raw_lead_block')
	event.remove('c:lead_ingots', 'techreborn:lead_ingot')
	event.remove('c:lead_ingots', 'indrev:lead_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:lead_ingot')
	event.remove('c:lead_dusts', 'indrev:lead_dust')
	event.remove('c:lead_nuggets', 'indrev:lead_nugget')
	event.remove('c:lead_nuggets', 'techreborn:lead_nugget')
	event.remove('c:lead_plates', 'indrev:lead_plate')
	event.remove('c:lead_plates', 'techreborn:lead_plate')
	// Nickel = modern_industrialization
	event.remove('c:nickel_ingots', 'techreborn:nickel_ingot')
	event.remove('c:nickel_dusts', 'techreborn:nickel_dust')
	event.remove('c:nickel_nuggets', 'techreborn:nickel_nugget')
	event.remove('c:nickel_small_dusts', 'techreborn:nickel_small_dust')
	event.remove('c:nickel_plates', 'techreborn:nickel_plate')
	event.add('c:nickel_small_dusts', 'modern_industrialization:nickel_tiny_dust')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:nickel_ingot')
	//Platinum = modern_industrialization
	event.add('c:raw_platinum_blocks', 'mythicmetals:raw_platinum_block')
	event.remove('c:platinum_ingots', 'techreborn:platinum_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:platinum_ingot')
	event.remove('c:platinum_plates', 'techreborn:platinum_plate')
	event.remove('c:platinum_nuggets', 'techreborn:platinum_nugget')
	event.remove('c:platinum_nuggets', 'mythicmetals:platinum_nugget')
	event.remove('c:platinum_dusts', 'techreborn:platinum_dust')
	//Chromium = modern_industrialization
	event.remove('c:chromium_ingots', 'techreborn:chrome_ingot')
	event.remove('c:chromium_dusts', 'techreborn:chrome_dust')
	event.remove('c:chromium_nuggets', 'techreborn:chrome_nugget')
	event.remove('c:chromium_plates', 'techreborn:chrome_plate')
	event.remove('c:chromium_small_dusts', 'techreborn:chrome_small_dust')
	event.add('c:chromium_small_dusts', 'modern_industrialization:chromium_tiny_dust')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:chromium_ingot')
	//bauxite = modern_industrialization
	event.remove('c:bauxite_dusts', 'techreborn:bauxite_dust')
	event.remove('c:bauxite_small_dusts', 'techreborn:bauxite_small_dust')
	event.add('c:bauxite_small_dusts', 'modern_industrialization:bauxite_tiny_dust')
	//Aluminium = modern_industrialization
	event.remove('c:aluminum_ingots', 'techreborn:aluminum_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:aluminum_ingot')
	event.remove('c:aluminum_dusts', 'techreborn:aluminum_dust')
	event.remove('c:aluminum_plates', 'techreborn:aluminum_plate')
	event.remove('c:aluminum_nuggets', 'techreborn:aluminum_nugget')
	//Iron = modern_industrialization
	event.remove('c:iron_dusts', 'indrev:iron_dust')
	event.remove('c:iron_plates', 'indrev:iron_plate')
	event.remove('c:iron_plates', 'create:iron_sheet')
	event.remove('c:iron_plates', 'techreborn:iron_plate')
	event.remove('c:iron_plates', 'ad_astra:iron_plate')
	//Emerald  = techreborn
	event.remove('c:emerald_plates', 'modern_industrialization:emerald_plate')
	event.remove('c:emerald_dusts', 'modern_industrialization:emerald_dust')
	//diamond = modern_industrialization
	event.remove('c:diamond_dusts', 'indrev:diamond_dust')
	event.remove('c:diamond_dusts', 'techreborn:diamond_dust')
	event.remove('c:diamond_plates', 'techreborn:diamond_plate')
	//Coal = modern_industrialization
	event.remove('c:coal_dusts', 'indrev:coal_dust')
	event.remove('c:coal_dusts', 'techreborn:coal_dust')
	//gold = modern_industrialization
	event.remove('c:gold_dusts', 'indrev:gold_dust')
	event.remove('c:gold_plates', 'create:golden_sheet')
	event.remove('c:gold_plates', 'indrev:gold_plate')
	event.remove('c:gold_plates', 'techreborn:gold_plate')
	event.add('minecraft:piglin_loved', 'modern_industrialization:gold_plate')
	//Copper = modern_industrialization
	event.remove('c:copper_plates', 'indrev:copper_plate')
	event.remove('c:copper_plates', 'techreborn:copper_plate')
	event.remove('c:copper_dusts', 'indrev:copper_dust')
	event.remove('c:copper_nuggets', 'indrev:copper_nugget')
	event.remove('c:copper_nuggets', 'techreborn:copper_nugget')
	event.remove('c:copper_nuggets', 'oxidized:copper_nugget')
	event.remove('c:copper_nuggets', 'mythicmetals:copper_nugget')
	event.remove('c:copper_nuggets', 'create:copper_nugget')
	//Ender = techreborn
	event.remove('c:ender_pearl_dusts', 'ae2:ender_dust')
	event.add('c:ender_ores', 'betterend:ender_ore')
	event.add('c:ender_pearl_dusts', 'betterend:ender_dust')
	event.remove('c:ender_pearl_dusts', 'techreborn:ender_pearl_dust')
	//Sulfur = techreborn
	event.remove('c:sulfur_dusts', 'modern_industrialization:sulfur_dust')
	event.remove('c:sulfur_dusts', 'indrev:sulfur_dust')
	event.add('c:sulfur_blocks', 'cinderscapes:sulfur_block')
})