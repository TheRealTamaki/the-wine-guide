import unicodedata, sys

def norm(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii','ignore').decode().lower()
    return s

target = sys.argv[1]
with open(target, 'r', encoding='utf-8') as f:
    content = norm(f.read())

basic = """red wine
red
dry red wine
dry reds
dry wine
cabernet sauvignon
tannin
grape
pinot noir
merlot
sugar
acidity
residual sugar
bordeaux
syrah
malbec
red blend
full-bodied
aroma
grape varieties
savory
tannic
plum
blackberry
sangiovese
fermentation
dryness
flavor profile
approachable""".strip().split('\n')

extended = """best dry red wines
sweet wine
white wine
dessert wine
dry red wines to try
top red wines
alcohol content
tannic wines
best red
wine drinkers
makes a wine dry
winemaker
fruit-forward
red wines today
dry wine
wine's residual sugar
dark fruit
tasting notes
grape sugar
wines taste
dry or sweet
chianti
little to no residual sugar
best food pairings
higher alcohol content
shiraz
high tannin
high acidity
red fruit
sugar per liter
different wines
world of wine
choosing a dry
reds like cabernet sauvignon
considered dry
popular white wine
wine with little
wine made
less than 10 grams
grams per liter
high alcohol content
cooking wine
wine with high
cooking with dry
find your perfect bottle
wine is dry
wines with higher
varietals
frequently asked questions
like sweet
alcohol and carbon dioxide
grams of sugar per liter
sweet tobacco
sensation in the mouth
grams of residual sugar per
residual sugar per liter
include cabernet sauvignon
low residual sugar
bring out the best
tannins and acidity
found in grape
winemaker allows the yeast
alcohol by volume
best way to learn
wine is always
aging in oak
whether a wine""".strip().split('\n')

entities = """Merlot
Cabernet Sauvignon
Phenolic content in wine
Syrah
Wine
Grape
Taste
Red wine
Sweetness of wine
Winemaking
Sauvignon blanc
Acids in wine
Alcoholic beverage
Aroma of wine
Pinot noir
Fermentation in winemaking
Sugar
Ripeness in viticulture
White wine
Dessert wine
Fruit
Bordeaux wine
Alcohol by volume
Umami
Wine tasting descriptors
Sauce
Strawberry
Bottle
Sweetness
Chocolate
Plum
Sangiovese
Malbec
Washington wine
Blackberry
Aging of wine
Meat
Grenache
Zinfandel
Cherry
Dry county
Oak (wine)
Yeast
Sugars in wine
Astringent
Pasta
Ethanol
Vintage
Food
Orange (fruit)
Berry
Mouthfeel
Vanilla
Raspberry
Fermentation
Raisin
United States
Black pepper
Meal
Leaf
Pear
Soil
Washington (state)
Oak
Litre
Glass
Mushroom
Brain
Aromaticity
Tobacco
Skin
Sandpaper
Mouth
Cabernet Franc
Rose
Italy
Smoke
Sonoma County wine
Carmenere
Durif
Chardonnay
Agiorgitiko
Beaujolais
Australian wine
Mourvedre
California wine
Gamay
France
Terroir
Harvest (wine)
Decanter
Nose
Climate
Fortified wine
Amarone
Flagship
Varietal
Yakima Valley AVA
Pinotage
Port wine""".strip().split('\n')

banned = {'world of wine'}

def check(terms, label):
    missing = []
    for t in terms:
        nt = norm(t.strip('"\u201c\u201d'))
        if nt in banned: continue
        if nt not in content:
            missing.append(t)
    print(f"{label}: {len(missing)}/{len(terms)} missing")
    for m in missing: print(f"  - {m}")
    return missing

check(basic, "BASIC")
check(extended, "EXTENDED")
check(entities, "ENTITY")
