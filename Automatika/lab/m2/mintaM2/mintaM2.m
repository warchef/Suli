% Neszveda DXCVH0

% Minta feladat M2
% 1. A szabályozási kör elemei
%GC=tf(0.9,1)
%GA=tf(5.8,[1 5.8])
%GP=tf(0.2,[1 3.4 1.2 0.03])
%GT=tf(36.4,[1 36.4])

% Gyr(s) alapjel átviteli függvény
%Gyr=feedback(GC*GA*GP,GT) % Az erdmény:
%                      1.044 s + 38
%--------------------------------------------------------
%s^5 + 45.6 s^4 + 355.8 s^3 + 768.5 s^2 + 254.6 s + 44.34

% G0(s) hurok átviteli függvény
%G0=GC*GA*GP*GT  % Az eredmény:
%                           38
%--------------------------------------------------------
%s^5 + 45.6 s^4 + 355.8 s^3 + 768.5 s^2 + 254.6 s + 6.334

% GE(s) Eredõ szakasz átviteli függvénye
%GE=GA*GP*GT

% 2. Stabilitás vizsgálat Gyr alapján
%pole(Gyr)
%-36.4000          
%  -5.7857          
%  -3.0549          
%  -0.1797 + 0.1914i
%  -0.1797 - 0.1914i
% Az összes pólus negatív valós részû, tehát stabil 

% 3. Stabilitás vizsgálat G0 alapján
% bode(G0)
% mentve m2minta3 néven

% 4. K erõsítés értékek meghatározása
% bode(GE)  % mentve m2minta4 néven
%K105=10^(-1/20)=0.9
%K145=10^(10.3/20)=3.3

% 5 SIMULINK modell paraméterezése

% Szimuláció idõtartam
%pole(GE)
% A pólusokból számíthatóük az idõállandók
%T1=-1/-36.4000
%T2=-1/-5.8000
%T3=-1/-3.0038
%T4=-1/-0.3691
%T5=-1/-0.0271

%Tsim=5*(T1+T2+T3+T4+T5)=200sec
% Ts=Tsim/500=0.4sec.
% mentve mintamodell néven

% 6
% A K105=0.9 erõsítés értékkel lefuttatva a szimulációt
% A szkópon látható, hogy kevesebb szimulációs idõ is elég
% Tsim=100sec.,  Tsample=0.2sec.
% A "Workspace" ablakban megjelenõ váltózókkal
% plot(tout,y)   % mentve, mint mintaM2K1
% a 2%-kos limitek a "Command Window"-ban kiszámítva 0.874  0.84

% A K145=3.3 erõsítés értékkel lefuttatva a szimulációt
% A szkópon látható, hogy elég a szimulációs idõ

% A "Workspace" ablakban a váltózók értékei felülirodnak!
plot(tout,y)   % mentve, mint mintaM2K2
% a 2%-kos limitek a "Command Window"-ban kiszámítva 0.975  0.937

% A yh szabályozási hiba csökkent, az Mp% túllövés és a szabályozási idõ
% nött.







