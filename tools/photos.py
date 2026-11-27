"""Download the chosen reward photos from Wikimedia Commons (1000 px wide) and record their credits."""
import json, urllib.request, urllib.parse, os, re, html
API='https://commons.wikimedia.org/w/api.php'
UA={'User-Agent':'christmas-momentum-sim/1.0 (https://github.com/awm11/christmas-momentum)'}
TITLES=[
 'File:Reindeer of Mongolia 01.jpg',
 'File:20070818-0001-strolling reindeer.jpg',
 'File:Reindeer with big antlers at Jokkmokk Market reindeer parade.jpg',
 'File:193 Herd of Reindeers running in Southern Iceland Photo by Giles Laurent.jpg',
 'File:Young reindeer on Salen, Hammerfest, Troms og Finnmark, Norway, 2022 August.jpg',
 'File:Reindeer pulling sleigh, Russia.jpg',
 'File:Extraordinary tame reindeer at Saltfjellet.jpg',
 'File:A frightened reindeer on snow - panoramio.jpg',
 'File:Reindeer Torkilstöten 2012.jpg',
 'File:Jeune renne blanc DSCF2992.jpg',
 'File:Poron vasa Ähtäri 3.jpg',
 'File:Reindeer Antlers Contrasted Against the Snow (24165335876).jpg',
]
def get(params):
    q=urllib.parse.urlencode({**params,'format':'json','formatversion':2})
    with urllib.request.urlopen(urllib.request.Request(API+'?'+q,headers=UA),timeout=60) as r: return json.load(r)
# full titles: look up by prefix search when the exact one isn't known
os.makedirs('img',exist_ok=True);credits=[]
for i,t in enumerate(TITLES,1):
    d=get({'action':'query','titles':t,'prop':'imageinfo','iiprop':'url|extmetadata','iiurlwidth':1000})
    p=d['query']['pages'][0]
    if 'imageinfo' not in p:
        s=get({'action':'query','list':'search','srsearch':t.replace('File:',''),'srnamespace':6,'srlimit':1})
        t=s['query']['search'][0]['title']
        p=get({'action':'query','titles':t,'prop':'imageinfo','iiprop':'url|extmetadata','iiurlwidth':1000})['query']['pages'][0]
    ii=p['imageinfo'][0];m=ii['extmetadata']
    with urllib.request.urlopen(urllib.request.Request(ii['thumburl'],headers=UA),timeout=60) as r: open(f'img/reindeer-{i:02d}.jpg','wb').write(r.read())
    credits.append({'file':f'img/reindeer-{i:02d}.jpg','title':p['title'],
      'artist':re.sub('<[^>]+>','',html.unescape(m.get('Artist',{}).get('value',''))).strip(),
      'license':m.get('LicenseShortName',{}).get('value',''),'licenseUrl':m.get('LicenseUrl',{}).get('value',''),'page':ii['descriptionurl']})
json.dump(credits,open('img/credits.json','w'),indent=1,ensure_ascii=False)
print(json.dumps(credits,indent=1,ensure_ascii=False))
