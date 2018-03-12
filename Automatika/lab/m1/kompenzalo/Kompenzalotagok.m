% Dr. Neszveda József DXCVH0


% PI kompenzáló tag Gpi(s)=Kc*(1+1/s*Ti)
%
% Átviteli függvény: A Matlabban konkrét értéket kell adni a változóknak.
% TI=8; KC=1.2;
% GPI=KC*(tf(1,1)+tf(1,[TI 0])) % Futtatás után az eredmény
% Transfer function:
% 9.6 s + 1.2                                            8 s + 1
% -----------   % Számlálót, nevezõt osztva Kc=1.2-vel -----------
%     8 s                                                 6.7 s
%
% PI kompenzáló tag átmeneti függvény
% step(GPI)   % mentve, mint PIkonpenzaloStep
% A leolvasott értékek az amerikai struktúra szerintiek!
% Kc=1.2; Ki=0.15[1/s] (Ennek a recipróka 6.7sec.)
% Ti = Kc/Ki = 1.2/0.15 = 8sec
%
% PI kompenzáló tag Bode diagramja
% bode(GPI)   % mentve, mint PIkonpenzaloBode
% A leolvasott értékek az európai struktúra szerintiek!
% a=1.59dB; Ti=8sec.
% Kc=10^(1.59/20)     % Kc=1.2


% PDT1 kompénzáló tag: Gpdt1=Kc*(1+s*Td/(s*T+1))
% Átviteli függvény: A Matlabban konkrét értéket kell adni a változóknak.
% TD=1.8; T=0.2; KC=1.2; % (AD=TD/T=9) 
% GPDT=KC*(tf(1,1)+tf([TD 0],[T 1])) % Futtatás után az eredmény
% 2.4 s + 1.2       %        s*(TD+T)+1
% -----------       % = KC * -----------
%  0.2 s + 1        %          s*T+1
%
% % PDT kompenzáló tag átmeneti függvény
% step(GPDT)   % mentve, mint PDTkonpenzaloStep
% 1. lépés: A kezdeti h(0) és a végérték h(final) meghatározása
% 2. lépés: Az a amplitudó meghatározása a t = T helyen
% 3. lépés: A T leolvasása az a amplitudó-nál
% 4. lépés: TD meghatározása
% Megjegyzés: Az átmeneti függvény kezdeti értéke (t tart nullához)
% az átviteli függvény s tart végtelenhez értékével azonos!
% Megjegyzés: A Kc erõsítés azonos az európai és az amerikai struktúrában
% A kiszámolt értékek az európai struktúra szerintiek.
%
% PDT kompenzáló tag Bode diagramja
% Feltétezve, hogy AD = TD/T nem ismert
% bode(GPDT)   % mentve, mint PDTkonpenzaloBodeAmp
% A leolvasott értékek az európai struktúra szerintiek!
% a(0)=1.59dB; wDT=0.5rad/sec; wT=5rad/sec
% KC=10^(1.59/20)  % KC=1.2
% T=1/wT = 0.2sec
% TD+T=1/wDT = 1/0.5 = 2sec;  TD = 1.8sec
%
% Feltétezve, hogy AD = TD/T ismert, esetünkben 9
% bode(GPDT)   % mentve, mint PDTkonpenzaloBodeFi
% A kiszámolt értékek az európai struktúra szerintiek!
% w(fimax)=1.56rad/sec, minthogy w(fimax)=sqrt(wT*wDT) és AD=wT/wDT=TD/T
% wT=w(fimax)*sgrt(AD+1)=1.56*3.16=4.93rad/sec; T=1/wT =  0.2sec
% wDT=w(fimax)/sqrt(AD+1)=1.56/3.16=0.494rad/sec; TD+T=1/wDT=2sec; TD=1.8sec


