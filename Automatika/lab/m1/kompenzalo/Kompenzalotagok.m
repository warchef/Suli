% Dr. Neszveda J�zsef DXCVH0


% PI kompenz�l� tag Gpi(s)=Kc*(1+1/s*Ti)
%
% �tviteli f�ggv�ny: A Matlabban konkr�t �rt�ket kell adni a v�ltoz�knak.
% TI=8; KC=1.2;
% GPI=KC*(tf(1,1)+tf(1,[TI 0])) % Futtat�s ut�n az eredm�ny
% Transfer function:
% 9.6 s + 1.2                                            8 s + 1
% -----------   % Sz�ml�l�t, nevez�t osztva Kc=1.2-vel -----------
%     8 s                                                 6.7 s
%
% PI kompenz�l� tag �tmeneti f�ggv�ny
% step(GPI)   % mentve, mint PIkonpenzaloStep
% A leolvasott �rt�kek az amerikai strukt�ra szerintiek!
% Kc=1.2; Ki=0.15[1/s] (Ennek a recipr�ka 6.7sec.)
% Ti = Kc/Ki = 1.2/0.15 = 8sec
%
% PI kompenz�l� tag Bode diagramja
% bode(GPI)   % mentve, mint PIkonpenzaloBode
% A leolvasott �rt�kek az eur�pai strukt�ra szerintiek!
% a=1.59dB; Ti=8sec.
% Kc=10^(1.59/20)     % Kc=1.2


% PDT1 komp�nz�l� tag: Gpdt1=Kc*(1+s*Td/(s*T+1))
% �tviteli f�ggv�ny: A Matlabban konkr�t �rt�ket kell adni a v�ltoz�knak.
% TD=1.8; T=0.2; KC=1.2; % (AD=TD/T=9) 
% GPDT=KC*(tf(1,1)+tf([TD 0],[T 1])) % Futtat�s ut�n az eredm�ny
% 2.4 s + 1.2       %        s*(TD+T)+1
% -----------       % = KC * -----------
%  0.2 s + 1        %          s*T+1
%
% % PDT kompenz�l� tag �tmeneti f�ggv�ny
% step(GPDT)   % mentve, mint PDTkonpenzaloStep
% 1. l�p�s: A kezdeti h(0) �s a v�g�rt�k h(final) meghat�roz�sa
% 2. l�p�s: Az a amplitud� meghat�roz�sa a t = T helyen
% 3. l�p�s: A T leolvas�sa az a amplitud�-n�l
% 4. l�p�s: TD meghat�roz�sa
% Megjegyz�s: Az �tmeneti f�ggv�ny kezdeti �rt�ke (t tart null�hoz)
% az �tviteli f�ggv�ny s tart v�gtelenhez �rt�k�vel azonos!
% Megjegyz�s: A Kc er�s�t�s azonos az eur�pai �s az amerikai strukt�r�ban
% A kisz�molt �rt�kek az eur�pai strukt�ra szerintiek.
%
% PDT kompenz�l� tag Bode diagramja
% Felt�tezve, hogy AD = TD/T nem ismert
% bode(GPDT)   % mentve, mint PDTkonpenzaloBodeAmp
% A leolvasott �rt�kek az eur�pai strukt�ra szerintiek!
% a(0)=1.59dB; wDT=0.5rad/sec; wT=5rad/sec
% KC=10^(1.59/20)  % KC=1.2
% T=1/wT = 0.2sec
% TD+T=1/wDT = 1/0.5 = 2sec;  TD = 1.8sec
%
% Felt�tezve, hogy AD = TD/T ismert, eset�nkben 9
% bode(GPDT)   % mentve, mint PDTkonpenzaloBodeFi
% A kisz�molt �rt�kek az eur�pai strukt�ra szerintiek!
% w(fimax)=1.56rad/sec, minthogy w(fimax)=sqrt(wT*wDT) �s AD=wT/wDT=TD/T
% wT=w(fimax)*sgrt(AD+1)=1.56*3.16=4.93rad/sec; T=1/wT =  0.2sec
% wDT=w(fimax)/sqrt(AD+1)=1.56/3.16=0.494rad/sec; TD+T=1/wDT=2sec; TD=1.8sec


