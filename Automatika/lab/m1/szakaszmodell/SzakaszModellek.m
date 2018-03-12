% Dr. Neszveda J�zsef DXCVH0

% Szakasz modellek az ered� szakasz �tmeneti f�ggv�nye alapj�n

% �nbe�ll� jelleg� szakasz 
% (Van v�g�rt�ke az �rtelmez�si tartom�nyon bel�l)

% Megjegyz�s: Matlab egys�g ugr�s bemenetet alkalmaz a step parancs eset�n
% A val�s�gban U, Ym munkapontban nyugalomba lev� rendszert u ugr�sszer� 
% bemen�jel v�ltoz�s hat�s�ra, a tranziensek lezajl�sa ut�n U+u, Ym+ymf 
% munkapontban ism�t nyugalomba lesz a rendszer
% A val�s�gban a szakasz er�s�t�se ymf/u, a Matlabban u=1.

% A m�rtt �rt�k SelfTuning n�ven van mentve, �s HPT1-es taggal k�zel�tj�k.

% 1. l�p�s meghat�rozzuk a v�g�rt�ket. Ez az �br�n ymf = 1.25, ez a Kp
% 2. l�p�s Nagyj�b�l fel�re cs�kkentj�k az "x" koordin�ta, azaz az id�
% tarom�nyt. Manaps�g a m�rt adatok Excell vagy hasonl� f�jlban �llnak
% rendelkez�sre. �gyelj�nk arra, hogy a v�g�rt�k vonala l�tsz�djon.
% 3. l�p�s Megszerkesztj�k az inflexi�s pontot �rint� egyenest �s a k�t
% seg�d egyenest.
% 4. l�p�s Leolvassuk az id� koordin�t�kat. Tu l�tsz�lagos holtid� = t1, 
% Tu = 3.7sec, Tg l�tsz�lagos id��lland� = t2 -t1, ahol t2 = 22.2 sec, �gy
% Tg = 18.5sec.
% Az eredm�ny:
% GHPT1=tf(1.25,[18.5 1],'inputdelay',3.7)
%                  1.25
% exp(-3.7*s) * ----------
%               18.5 s + 1


% Integr�l� jelleg� szakasz
% (A tranziens lezajl�sa ut�n egyenletes meredeks�ggel n�, vagy cvs�kken)

% Megjegyz�s: A fizikai definici�, hogy a v�laszjel az egyenletesen
% v�ltoz� szakasz�n annyi %-ot v�ltozik, amekkora a gerjeszt� bemeneti
% v�ltoz�s %-a. Egy egyenes szakasz meredeks�ge, b�rmely k�t pontj�b�l
% kisz�m�that�.

% A m�rt modell IntegraloM n�ven van mentve, �s IT1 taggal k�zel�tj�k
% 1 l�p�s. Olyan m�ret� tartom�nyt v�lasztunk ki, ami k�nyelmesen
% szerkeszhet�.
% 2. l�p�s. Az egyenes szakaszon meghat�rozzuk k�t pont koordin�t�j�t.
% C�lszer� kerek amplitud� �rt�keket v�lasztani.
% TI = (t2 - t1)/(a2 - a1) = (34.1 - 26.1)/(3.5 - 2.5) = 8sec.
% 3. l�p�s. Az egyenes szakasz meghosszabb�t�sak�nt, a kezd� ym �rt�k id�
% koordin�t�j�nak meghat�roz�sa. Az id��lland� T = t3 = 5.75sec.
% Az eredm�ny
% GIT1=tf(1,[8 0])*tf(1,[5.75 1])
%      1
% ------------
% 46 s^2 + 8 s



