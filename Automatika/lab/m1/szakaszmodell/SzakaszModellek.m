% Dr. Neszveda József DXCVH0

% Szakasz modellek az eredõ szakasz átmeneti függvénye alapján

% Önbeálló jellegû szakasz 
% (Van végértéke az értelmezési tartományon belül)

% Megjegyzés: Matlab egység ugrás bemenetet alkalmaz a step parancs esetén
% A valóságban U, Ym munkapontban nyugalomba levõ rendszert u ugrásszerû 
% bemenõjel változás hatására, a tranziensek lezajlása után U+u, Ym+ymf 
% munkapontban ismét nyugalomba lesz a rendszer
% A valóságban a szakasz erõsítése ymf/u, a Matlabban u=1.

% A mértt érték SelfTuning néven van mentve, és HPT1-es taggal közelítjük.

% 1. lépés meghatározzuk a végértéket. Ez az ábrán ymf = 1.25, ez a Kp
% 2. lépés Nagyjából felére csökkentjük az "x" koordináta, azaz az idõ
% tarományt. Manapság a mért adatok Excell vagy hasonló fájlban állnak
% rendelkezésre. Ügyeljünk arra, hogy a végérték vonala látszódjon.
% 3. lépés Megszerkesztjük az inflexiós pontot érintõ egyenest és a két
% segéd egyenest.
% 4. lépés Leolvassuk az idõ koordinátákat. Tu látszólagos holtidõ = t1, 
% Tu = 3.7sec, Tg látszólagos idõállandó = t2 -t1, ahol t2 = 22.2 sec, így
% Tg = 18.5sec.
% Az eredmény:
% GHPT1=tf(1.25,[18.5 1],'inputdelay',3.7)
%                  1.25
% exp(-3.7*s) * ----------
%               18.5 s + 1


% Integráló jellegû szakasz
% (A tranziens lezajlása után egyenletes meredekséggel nõ, vagy cvsökken)

% Megjegyzés: A fizikai definició, hogy a válaszjel az egyenletesen
% változó szakaszán annyi %-ot változik, amekkora a gerjesztõ bemeneti
% változás %-a. Egy egyenes szakasz meredeksége, bármely két pontjából
% kiszámítható.

% A mért modell IntegraloM néven van mentve, és IT1 taggal közelítjük
% 1 lépés. Olyan méretû tartományt választunk ki, ami kényelmesen
% szerkeszhetõ.
% 2. lépés. Az egyenes szakaszon meghatározzuk két pont koordinátáját.
% Célszerû kerek amplitudó értékeket választani.
% TI = (t2 - t1)/(a2 - a1) = (34.1 - 26.1)/(3.5 - 2.5) = 8sec.
% 3. lépés. Az egyenes szakasz meghosszabbításaként, a kezdõ ym érték idõ
% koordinátájának meghatározása. Az idõállandó T = t3 = 5.75sec.
% Az eredmény
% GIT1=tf(1,[8 0])*tf(1,[5.75 1])
%      1
% ------------
% 46 s^2 + 8 s



