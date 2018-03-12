% Dr. Neszveda J�zsef DXCVH0

% A "%" jelet �lt�vol�tva lefuttathat� a parancs

% Jel�tviv� alaptagok
% A hat alaptag �tviteli, �tmeneti f�ggv�nyeit, valamint a Bode �s a
% Nyquist diagramj�t adjuk meg, a jellemz� param�terek leolvas�si hely�vel.
% Megjegyz�s: A Matlab csak konkr�t sz�mokkal tud dolgozni, ez�rt a
% p�ld�kban a param�teknek �rt�ket kell adni.


% P ar�nyos tag  Gp(s)=k
% �tviteli f�ggv�ny
% k=2.7;
% GP=tf(k,1)      % Az eredm�ny:
% Transfer function:
% 2.7

% �tmeneti f�ggv�ny    (Unit step response)
% step(GP)    % mentve P_step n�ven

% Bode diagram
% bode(GP)    % mentve P_Bode n�ven

% Nyquist diagram   (Csak a pozit�v w �rt�kek vannak �br�zolva)
% Megjegyz�s: A kiterjesztett Nyquist stabilit�si krit�rium vizsg�lat�hoz
% kell a fikt�v negat�v w tartom�ny.
% nyquist(GP)     % mentve P_Nyquist n�ven


% I integr�l� tag  Gi(s)=Ki/s=1/Ti*s
% KI=0.2;
% GI=tf(KI,[1 0])     % Az eredm�ny
% Transfer function:
% 0.2
% ---
%  s

% �tmeneti f�ggv�ny
% step(GI)   % Mentve, mint I_step Az automatikusan felk�n�lt id�tartom�ny 
% 0 - 25sec k�z� lett korl�tozva!

% Bode diagram
% bode(GI)        % mentve I_Bode n�ven  Az automatikusan felk�n�lt
% k�rfrekvencia tartom�nyt 0.1 - 10 rad/sec -re kellett n�velni.

% Nyquist diagram
% nyquist(GI)     % mentve I_Nyquist n�ven  Az automatikusan felk�n�lt 
% komplex tartom�nyt c�lszer� volt �tm�retezni, �s megrajzoltatni az egys�g
% sugar� k�rt.


% D differenci�l� tag  Gd(s)=Td*s
% TD=0.8;
% GD=tf([TD 0],1)     % Az eredm�ny
% Transfer function:
% 0.8 s

% �tmeneti f�ggv�ny
% step(GD)        % Az eredm�ny
% ??? Error using ==> lti.step at 86
% Cannot simulate the time response of LTI models with more zeros than poles.
% (Nem futtathat� olyan LTI modell, amelynek t�bb z�rusa van, mint p�lusa.)
% A magyar�zat nem pontos, mert p�ld�ul az impulse(GI) futtathat�. A Matlab
% az �rtelmez�si tartom�nyban fell�p� v�gtelen �rt�kkel nem tud mit kezdeni.

% Bode diagram
% bode(GD)        % mentve D_Bode n�ven

% Nyquist diagram
% nyquist(GD)     % mentve D_Nyquist n�ven  Az automatikusan felk�n�lt 
% komplex tartom�nyt c�lszer� volt �tm�retezni, �s megrajzoltatni az egys�g
% sugar� k�rt.


% PT1 Egyt�rol�s tag   Gpt1(s)=1/(s*T+1)
% T=20;
% GPT1=tf(1,[T 1])        % Az eredm�ny
% Transfer function:
%    1
% --------
% 20 s + 1

% �tmeneti f�ggv�ny
% step(GPT1)      % mentve PT1_step n�ven
% Megjegyz�s: Ha az egyt�rol�s tagnak van Kp er�s�t�se, akkor Kp = hf

% Bode diagram
% bode(GPT1)      % mentve, mint PT1_Bode

% Nyquist diagram
% nyquist(GPT1)   % mentve PT1_Nyquist n�ven  Az automatikusan felk�n�lt 
% komplex tartom�nyt c�lszer� volt �tm�retezni.


% PT2 K�t-t�rol�s tag  Gpt2(s)=1/(s*T^2+2*D*T*s+1)
% ! K�t param�tert�l T �s D f�gg. Legyen a csillap�t�s 0.8
% D8=0.8;
% T=12;
% GPT2_D8=tf(1,[T^2 2*D8*T 1])    % Az eredm�ny
% Transfer function:
%          1
% --------------------
% 144 s^2 + 19.2 s + 1
% Legyen a csillap�t�s D2=0.2
% D2=0.2
% GPT2_D2=tf(1,[T^2 2*D2*T 1])   
%          1
% -------------------
% 144 s^2 + 4.8 s + 1 

% �rdemes a k�t �tmeneti f�ggv�nyt egy�tt �br�zolni
% step(GPT2_D8,GPT2_D2)   % mentve, mint PT2_step
% Sem a D �rt�ke, sem a T id��lland� nem hat�rozhat� meg
% elfogadhat� pontoss�ggal

% �rdemes a k�t Bode diagramot egy�tt �br�zolni
% bode(GPT2_D8,GPT2_D2)   % mentve, mint PT2_Bode
% T id��lland� meghat�rozhat�, de a D �rt�ke csak kis D < 0.2 eset�n 
% hat�rozhat� meg k�zel�t� pontoss�ggal

% �rdemes a k�t Nyquist diagramot egy�tt �br�zolni
% nyquist(GPT2_D8,GPT2_D2)   % mentve, mint PT2_Nyquist
% T id��lland� meghat�rozhat�, de a D �rt�ke csak becs�lhet�.


% H holtid�s tag Gh(s)=exp(-tau*s) (Nem szok�s ki�rni, hogy PH, de nem 
% �nmag�ban �rtelmezett) A holtid�s tag nem polinom t�rt, ez�rt a Matlab
% szintaktika: Jel�tviv� tag �s jelezve a tau k�sleltet�s. P�ld�ul HPT1
% tau=0.5
% GHPT1=tf(k,[T 1],'inputdelay',tau)
% Transfer function:
%                 2.7
% exp(-0.5*s) * --------
%               12 s + 1

% Egyszeres er�s�t�s� ar�nyos taggal
% GPH=tf(1,1,'inputdelay',tau)
% Transfer function:
% exp(-0.5*s) * (1)

% Az�rt, hogy a ritka mintav�teli id� ne torz�tson, defini�ljuk mi
% t=0:0.01:4;
% step(GPH,t)     % mentve, mint H_step

% Bode diagram
% bode(GPH)   % mentve, mint H_Bode

% Nyquist diagram
% nyquist(GPH)    % mentve, mint H_Nyquist
% �ttekinthetetlen, az egys�g sugar� k�r�n fut k�rbe-k�rbe.
% nyquist(GPH,{0.01,2*pi/0.5})    % mentve H_Nyquist_pi n�ven
% 0 - 2*pi/tau [rad/sec] frekvencia s�v alatt �r vissza ugyanabba a pontba


