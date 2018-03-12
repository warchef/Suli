% Neszveda DXCVH0

% Minta feladat M2
% 1. A szab�lyoz�si k�r elemei
%GC=tf(0.9,1)
%GA=tf(5.8,[1 5.8])
%GP=tf(0.2,[1 3.4 1.2 0.03])
%GT=tf(36.4,[1 36.4])

% Gyr(s) alapjel �tviteli f�ggv�ny
%Gyr=feedback(GC*GA*GP,GT) % Az erdm�ny:
%                      1.044 s + 38
%--------------------------------------------------------
%s^5 + 45.6 s^4 + 355.8 s^3 + 768.5 s^2 + 254.6 s + 44.34

% G0(s) hurok �tviteli f�ggv�ny
%G0=GC*GA*GP*GT  % Az eredm�ny:
%                           38
%--------------------------------------------------------
%s^5 + 45.6 s^4 + 355.8 s^3 + 768.5 s^2 + 254.6 s + 6.334

% GE(s) Ered� szakasz �tviteli f�ggv�nye
%GE=GA*GP*GT

% 2. Stabilit�s vizsg�lat Gyr alapj�n
%pole(Gyr)
%-36.4000          
%  -5.7857          
%  -3.0549          
%  -0.1797 + 0.1914i
%  -0.1797 - 0.1914i
% Az �sszes p�lus negat�v val�s r�sz�, teh�t stabil 

% 3. Stabilit�s vizsg�lat G0 alapj�n
% bode(G0)
% mentve m2minta3 n�ven

% 4. K er�s�t�s �rt�kek meghat�roz�sa
% bode(GE)  % mentve m2minta4 n�ven
%K105=10^(-1/20)=0.9
%K145=10^(10.3/20)=3.3

% 5 SIMULINK modell param�terez�se

% Szimul�ci� id�tartam
%pole(GE)
% A p�lusokb�l sz�m�that��k az id��lland�k
%T1=-1/-36.4000
%T2=-1/-5.8000
%T3=-1/-3.0038
%T4=-1/-0.3691
%T5=-1/-0.0271

%Tsim=5*(T1+T2+T3+T4+T5)=200sec
% Ts=Tsim/500=0.4sec.
% mentve mintamodell n�ven

% 6
% A K105=0.9 er�s�t�s �rt�kkel lefuttatva a szimul�ci�t
% A szk�pon l�that�, hogy kevesebb szimul�ci�s id� is el�g
% Tsim=100sec.,  Tsample=0.2sec.
% A "Workspace" ablakban megjelen� v�lt�z�kkal
% plot(tout,y)   % mentve, mint mintaM2K1
% a 2%-kos limitek a "Command Window"-ban kisz�m�tva 0.874  0.84

% A K145=3.3 er�s�t�s �rt�kkel lefuttatva a szimul�ci�t
% A szk�pon l�that�, hogy el�g a szimul�ci�s id�

% A "Workspace" ablakban a v�lt�z�k �rt�kei fel�lirodnak!
plot(tout,y)   % mentve, mint mintaM2K2
% a 2%-kos limitek a "Command Window"-ban kisz�m�tva 0.975  0.937

% A yh szab�lyoz�si hiba cs�kkent, az Mp% t�ll�v�s �s a szab�lyoz�si id�
% n�tt.







