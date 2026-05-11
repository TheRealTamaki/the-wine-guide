import unicodedata, sys
def norm(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii','ignore').decode().lower()
    return s
target = sys.argv[1]
with open(target, 'r', encoding='utf-8') as f:
    content = norm(f.read())
basic = "red wine\nred\npinot noir\nlight red\nfruit\ngrape\nacidity\ntannin\nvariety\ngamay\naroma\nbeaujolais\nstrawberry\njuicy".strip().split('\n')
extended = "light red wines\nlight-bodied reds\nlight-bodied\nlight-bodied red wine\nfruity\nblend\nwines like\ngrenache\ncherry\nnebbiolo\ncooler\ncooler climate\nbodied\nwhite wine\npalate\nbold\nacidic\ncabernet\nelegant\nboldest\nlight bodied\nbest red\nspice\nbalance\nstructure\ncheese\nsonoma\nvineyard\ndry wines\nwines tend\nvarietal\ntannic\nburgundy\nviolet\nsavory\nrouge\nslightly chilled\nfruit and floral aromas\nwinemakers\nspectrum\nripe\nenthusiast\nbolder\n12.5\nbarbaresco\nbarolo\nvibrant\nearthy\nlike pinot noir\npairing\nfull-bodied\nsyrah\nburst\ncrisp\nsicilian\nperfume\nfruit forward\ncocoa\ngrape varieties\nsilky\nterroir\nclarity\nsonoma coast\ntuna\nfatty\nversatile\nwinemaking\nnuanced\nvelvety".strip().split('\n')
entities = "Phenolic content in wine\nPinot noir\nWine\nAcids in wine\nGamay\nAroma of wine\nRed wine\nNebbiolo\nGrape\nFruit\nWine tasting descriptors\nWinemaking\nOak (wine)\nTerroir\nBeaujolais\nBarolo\nBarbaresco\nFrance\nWhite wine\nBurgundy wine\nAlcoholic beverage\nTaste\nTuna\nSweetness of wine\nVarietal\nStrawberry\nSpice\nFood\nCocoa bean\nSommelier\nCalifornia\nItaly\nGlass\nCheese\nWine fault\nYeast in winemaking\nPiedmont wine\nLoire Valley (wine)\nFermentation in winemaking\nTemperature\nAldo Conterno\nSanta Barbara County wine\nChardonnay\nSancerre (wine)\nChateauneuf-du-Pape AOC\nRose".strip().split('\n')
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
