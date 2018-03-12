% Dr. Neszveda József DXCVH0

% A "%" jelet áltávolítva lefuttatható a parancs

% Jelátvivõ alaptagok
% A hat alaptag átviteli, átmeneti függvényeit, valamint a Bode és a
% Nyquist diagramját adjuk meg, a jellemzõ paraméterek leolvasási helyével.
% Megjegyzés: A Matlab csak konkrét számokkal tud dolgozni, ezért a
% példákban a paraméteknek értéket kell adni.


% P arányos tag  Gp(s)=k
% Átviteli függvény
% k=2.7;
% GP=tf(k,1)      % Az eredmény:
% Transfer function:
% 2.7

% Átmeneti függvény    (Unit step response)
% step(GP)    % mentve P_step néven

% Bode diagram
% bode(GP)    % mentve P_Bode néven

% Nyquist diagram   (Csak a pozitív w értékek vannak ábrázolva)
% Megjegyzés: A kiterjesztett Nyquist stabilitási kritérium vizsgálatához
% kell a fiktív negatív w tartomány.
% nyquist(GP)     % mentve P_Nyquist néven


% I integráló tag  Gi(s)=Ki/s=1/Ti*s
% KI=0.2;
% GI=tf(KI,[1 0])     % Az eredmény
% Transfer function:
% 0.2
% ---
%  s

% Átmeneti függvény
% step(GI)   % Mentve, mint I_step Az automatikusan felkínált idõtartomány 
% 0 - 25sec közé lett korlátozva!

% Bode diagram
% bode(GI)        % mentve I_Bode néven  Az automatikusan felkínált
% körfrekvencia tartományt 0.1 - 10 rad/sec -re kellett növelni.

% Nyquist diagram
% nyquist(GI)     % mentve I_Nyquist néven  Az automatikusan felkínált 
% komplex tartományt célszerû volt átméretezni, és megrajzoltatni az egység
% sugarú kört.


% D differenciáló tag  Gd(s)=Td*s
% TD=0.8;
% GD=tf([TD 0],1)     % Az eredmény
% Transfer function:
% 0.8 s

% Átmeneti függvény
% step(GD)        % Az eredmény
% ??? Error using ==> lti.step at 86
% Cannot simulate the time response of LTI models with more zeros than poles.
% (Nem futtatható olyan LTI modell, amelynek több zérusa van, mint pólusa.)
% A magyarázat nem pontos, mert például az impulse(GI) futtatható. A Matlab
% az értelmezési tartományban fellépõ végtelen értékkel nem tud mit kezdeni.

% Bode diagram
% bode(GD)        % mentve D_Bode néven

% Nyquist diagram
% nyquist(GD)     % mentve D_Nyquist néven  Az automatikusan felkínált 
% komplex tartományt célszerû volt átméretezni, és megrajzoltatni az egység
% sugarú kört.


% PT1 Egytárolós tag   Gpt1(s)=1/(s*T+1)
% T=20;
% GPT1=tf(1,[T 1])        % Az eredmény
% Transfer function:
%    1
% --------
% 20 s + 1

% Átmeneti függvény
% step(GPT1)      % mentve PT1_step néven
% Megjegyzés: Ha az egytárolós tagnak van Kp erõsítése, akkor Kp = hf

% Bode diagram
% bode(GPT1)      % mentve, mint PT1_Bode

% Nyquist diagram
% nyquist(GPT1)   % mentve PT1_Nyquist néven  Az automatikusan felkínált 
% komplex tartományt célszerû volt átméretezni.


% PT2 Két-tárolós tag  Gpt2(s)=1/(s*T^2+2*D*T*s+1)
% ! Két paramétertõl T és D függ. Legyen a csillapítás 0.8
% D8=0.8;
% T=12;
% GPT2_D8=tf(1,[T^2 2*D8*T 1])    % Az eredmény
% Transfer function:
%          1
% --------------------
% 144 s^2 + 19.2 s + 1
% Legyen a csillapítás D2=0.2
% D2=0.2
% GPT2_D2=tf(1,[T^2 2*D2*T 1])   
%          1
% -------------------
% 144 s^2 + 4.8 s + 1 

% Érdemes a két átmeneti függvényt együtt ábrázolni
% step(GPT2_D8,GPT2_D2)   % mentve, mint PT2_step
% Sem a D értéke, sem a T idõállandó nem határozható meg
% elfogadható pontossággal

% Érdemes a két Bode diagramot együtt ábrázolni
% bode(GPT2_D8,GPT2_D2)   % mentve, mint PT2_Bode
% T idõállandó meghatározható, de a D értéke csak kis D < 0.2 esetén 
% határozható meg közelítõ pontossággal

% Érdemes a két Nyquist diagramot együtt ábrázolni
% nyquist(GPT2_D8,GPT2_D2)   % mentve, mint PT2_Nyquist
% T idõállandó meghatározható, de a D értéke csak becsülhetõ.


% H holtidõs tag Gh(s)=exp(-tau*s) (Nem szokás kiírni, hogy PH, de nem 
% önmagában értelmezett) A holtidõs tag nem polinom tört, ezért a Matlab
% szintaktika: Jelátvivõ tag és jelezve a tau késleltetés. Például HPT1
% tau=0.5
% GHPT1=tf(k,[T 1],'inputdelay',tau)
% Transfer function:
%                 2.7
% exp(-0.5*s) * --------
%               12 s + 1

% Egyszeres erõsítésû arányos taggal
% GPH=tf(1,1,'inputdelay',tau)
% Transfer function:
% exp(-0.5*s) * (1)

% Azért, hogy a ritka mintavételi idõ ne torzítson, definiáljuk mi
% t=0:0.01:4;
% step(GPH,t)     % mentve, mint H_step

% Bode diagram
% bode(GPH)   % mentve, mint H_Bode

% Nyquist diagram
% nyquist(GPH)    % mentve, mint H_Nyquist
% Áttekinthetetlen, az egység sugarú körön fut körbe-körbe.
% nyquist(GPH,{0.01,2*pi/0.5})    % mentve H_Nyquist_pi néven
% 0 - 2*pi/tau [rad/sec] frekvencia sáv alatt ér vissza ugyanabba a pontba


