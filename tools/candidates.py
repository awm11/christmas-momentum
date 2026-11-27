"""Collect candidate reindeer photos from Wikimedia Commons (free licences only) with their credits."""
import json, urllib.request, urllib.parse, os, re, html
API='https://commons.wikimedia.org/w/api.php'
UA={'User-Agent':'christmas-momentum-sim/1.0 (https://github.com/awm11/christmas-momentum)'}
def get(params):
    q=urllib.parse.urlencode({**params,'format':'json','formatversion':2})
    with urllib.request.urlopen(urllib.request.Request(API+'?'+q,headers=UA),timeout=60) as r: return json.load(r)
searches=['reindeer incategory:"Featured_pictures_on_Wikimedia_Commons"','Rangifer incategory:"Featured_pictures_on_Wikimedia_Commons"',
          'reindeer incategory:"Quality_images"','Rangifer tarandus incategory:"Quality_images"','reindeer incategory:"Valued_images_sorted_by_promotion_date"',
          'funny reindeer','reindeer calf','reindeer snow','reindeer sleigh','reindeer face','reindeer antlers','caribou incategory:"Quality_images"']
seen={};out=[]
FREE=re.compile(r'^(CC0|Public domain|PD|CC BY(-SA)? [0-9.]+|CC BY(-SA)? [0-9.]+ [a-z]+|CC-BY(-SA)?-[0-9.]+)',re.I)
for s in searches:
    d=get({'action':'query','generator':'search','gsrsearch':'filetype:bitmap '+s,'gsrnamespace':6,'gsrlimit':40,
           'prop':'imageinfo','iiprop':'url|extmetadata|size','iiurlwidth':360})
    for p in (d.get('query') or {}).get('pages',[]):
        t=p['title']
        if t in seen or 'imageinfo' not in p: continue
        ii=p['imageinfo'][0];m=ii.get('extmetadata',{})
        lic=(m.get('LicenseShortName') or {}).get('value','')
        if not FREE.match(lic) or 'NC' in lic.upper() or 'ND' in lic.upper(): continue
        if ii.get('width',0)<1200: continue
        artist=re.sub('<[^>]+>','',html.unescape((m.get('Artist') or {}).get('value',''))).strip()
        seen[t]=1;out.append({'n':len(out)+1,'title':t,'license':lic,'artist':artist,'page':ii.get('descriptionurl'),'thumb':ii.get('thumburl'),'w':ii['width'],'h':ii['height'],'q':s})
os.makedirs('candidates',exist_ok=True)
for c in out:
    try:
        with urllib.request.urlopen(urllib.request.Request(c['thumb'],headers=UA),timeout=60) as r: open(f"candidates/{c['n']:03d}.jpg",'wb').write(r.read())
    except Exception as e: c['err']=str(e)
json.dump(out,open('candidates/list.json','w'),indent=1,ensure_ascii=False)
print(len(out),'candidates')
