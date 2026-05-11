#!/usr/bin/env python3
"""Gap check for good-cheap-wine against NeuronWriter query e86f528dda3963c9."""
import re
import unicodedata
from pathlib import Path

basic = ["wine","cheap wine","affordable wine","red","sauvignon","taste","grape","cabernet sauvignon","chardonnay","pinot","merlot"]

extended = ["red wine","best affordable","white wine","blanc","pinot grigio","grocery stores","crisp","wine region","wine that's","won't break the bank","moscato","barefoot","bottle of wine","winery","riesling","good wine","quality wines","wines that taste","sauvignon blanc","sparkle","budget-friendly","summer wine","sip","cellar","fruity","chile","world of wine","bordeaux","rosé","beaujolais","tasting notes","dry wine","winemakers","syrah","great value","discover the best","wine industry","malbec","go-to","sweet red","argentina","without breaking the bank","price range","varietals","malbecs","price point","5.99","kendall jackson","vino","yellow tail","robert mondavi","tastebuds","buttery","high price","palate","wine without","tuscany","gamay","peppery","appellation","floral notes","grenache","ultimate guide","cork","screw cap"]

entities = ["Sauvignon blanc","Wine","Grape","Pinot noir","Cabernet Sauvignon","Merlot","Syrah","Malbec","Beaujolais","Email","Sweetness of wine","Winemaker","Portugal","France","Chile","United States","Spain","Glass","Pinot blanc","Grocery store","Burgundy wine","Argentine wine","Tuscan wine","Mosel (wine region)","Riesling","Sangiovese","International variety","Rosé","South Tyrol wine","Piedmont wine"]

# Voice-banned terms: skip these deliberately
VOICE_BANNED = {"world of wine", "wine journey", "wine is a journey", "discover the best", "ultimate guide"}

def normalize(s):
    return unicodedata.normalize('NFKD', s.lower()).encode('ascii', 'ignore').decode()

path = Path(r'C:\Users\Jade\Desktop\Claude B\Wineology\seo\optimized\good-cheap-wine-seo.mdx')
content = path.read_text(encoding='utf-8')
# Strip component imports and JSX attribute names and common frontmatter to only consider reader-facing text
c_norm = normalize(content)

def check(terms, label):
    missing = []
    voice_skipped = []
    for t in terms:
        tn = normalize(t)
        if t.lower() in VOICE_BANNED:
            voice_skipped.append(t)
            continue
        if tn not in c_norm:
            missing.append(t)
    print(f'\n=== {label} ({len(terms)} total) ===')
    print(f'Missing: {len(missing)}')
    for m in missing:
        print(f'  - {m}')
    if voice_skipped:
        print(f'Voice-skipped: {len(voice_skipped)}')
        for m in voice_skipped:
            print(f'  - {m}')
    return missing, voice_skipped

m1, s1 = check(basic, 'BASIC')
m2, s2 = check(extended, 'EXTENDED')
m3, s3 = check(entities, 'ENTITIES')

print(f'\n== TOTAL MISSING: {len(m1)+len(m2)+len(m3)} ==')
print(f'== Voice-skipped: {len(s1)+len(s2)+len(s3)} ==')
