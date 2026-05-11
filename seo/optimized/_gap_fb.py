import unicodedata, sys
def norm(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii','ignore').decode().lower()
    return s
target = sys.argv[1]
with open(target, 'r', encoding='utf-8') as f:
    content = norm(f.read())
basic = "red wine\nred\nfull-bodied red wine\nfull bodied red\nfull bodied red wine\nfull-bodied reds\ntannin\nbodied reds\ncabernet sauvignon\ngrape\nzinfandel\nmalbec\nsyrah\nmerlot\nfull-bodied wines\ncherry\nmedium-bodied\npetite sirah\nblackberry\nbordeaux\npalate\nwhite wine\nnapa valley\nfruit flavors\nmouthfeel\npairing\nlicorice\nfranc\nshiraz\ntannat\nwines tend\nlight-bodied\nblack cherry\nviolet".strip().split('\n')
extended = "wine style\nred blend\nfull body\nbest full-bodied red\nalcohol content\ndry red wine\nwinemakers\nmalolactic\nblack fruit\ncabernet franc\nhigh tannin\nwine grapes\nblueberry\nred berries\ntannic\noak barrels\nwines like cabernet sauvignon\namarone\nhigher alcohol\nviscosity\nstew\nblack currants\nhigh alcohol\nvarietal\ncheese\nmalolactic fermentation\nwinemaking\nresidual sugar\naromas and flavors\nfuller-bodied\nmocha\ncassis\ngrape variety\nhigher tannin\nsonoma\nfood pairings\nbold flavors\nmerlot and cabernet\ndark fruit flavors\nvalpolicella\nalcohol level\nripe fruit\nfruit-forward\nmake wines\nmouth-coating density\nhard cheeses\nmeat dishes\ntannin-rich\naged in oak\ngrape skins\nveneto region\nmadiran".strip().split('\n')
entities = "Cabernet Sauvignon\nSauvignon blanc\nPhenolic content in wine\nWine\nRed wine\nCabernet Franc\nBordeaux wine\nAroma of wine\nGrape\nSpice\nMalbec\nWinemaking\nFruit\nWine tasting descriptors\nZinfandel\nAlcoholic beverage\nGlass\nVarietal\nVanilla\nPlum\nBlackcurrant\nCheese\nCalifornia\nDessert\nRibes\nCinnamon\nLamb and mutton\nBeer\nChocolate\nLiquorice\nBlueberry\nPalate\nUmami\nBottle\nCaffe mocha\nSeed\nBlackberry\nMushroom\nItaly\nArgentina\nArgentine wine\nAcids in wine\nFermentation in winemaking\nViscosity\nMalolactic fermentation\nAustralia\nAcid\nSweetness of wine\nChardonnay\nSkin\nTannat\nAmarone\nSugars in wine\nBordeaux wine regions\nTuscan wine\nPort wine\nValpolicella\nWine tasting\nItalian wine\nDecanter".strip().split('\n')
banned = {'world of wine', 'find your perfect bottle'}
def check(terms, label):
    missing = []
    for t in terms:
        nt = norm(t.strip('"\u201c\u201d'))
        if nt in banned: continue
        if nt not in content: missing.append(t)
    print(f"{label}: {len(missing)}/{len(terms)} missing")
    for m in missing: print(f"  - {m}")
check(basic, "BASIC")
check(extended, "EXTENDED")
check(entities, "ENTITY")
