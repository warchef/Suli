
%MATLAB2 minta feladatsor

%1. feladat
gc=7.2
ga=tf([11.4],[1 11.4])
gp=tf([26],[1 11.3 35.4 21.6])
gt=tf([20.6],[1 20.6])
%ered� szakasz �tviteli f�ggv�nye:
ge=ga*gp*gt
%                       6106
%ge=-----------------------------------------------------
%   s^5 + 43.3 s^4 + 631.8 s^3 + 3808 s^2 + 9005 s + 5073
%szab�lyoz�si k�r hurok�tviteli f�ggv�nye:
g0=gc*ga*gp*gt
%                      4.396e004
%g0=-----------------------------------------------------
%   s^5 + 43.3 s^4 + 631.8 s^3 + 3808 s^2 + 9005 s + 5073
%szab�lyoz�si k�r alapjel �tviteli f�ggv�nye:
gyr=feedback(gc*ga*gp,gt)
 
 %                 2134 s + 4.396e004
%gyr=------------------------------------------------------
%    s^5 + 43.3 s^4 + 631.8 s^3 + 3808 s^2 + 9005 s        
                                                      
 %                                          + 4.903e004
 
 
 %2.feladat
 %alapjel �tviteli fv. gyr p�lusainak meghat�roz�sa, 
 %�s ennek alapj�n stab. vizsg.
 %[z,p,k]=tf2zp([2134 4.396e004],[1 43.3 631.8 3808 9005 4.903e004])
 %p�lusok: 
 %p1=-21.4214          
 %p2=-11.0066 + 5.4573i
 %p3=-11.0066 - 5.4573i
 %p4=0.0673 + 3.8937i
 %p5= 0.0673 - 3.8937i 
 %Mivel a p4 �s p5 konjug�lt komplex p�lusp�r val�sr�sze pozit�v, 
 %ez�rt nem stabil m�k�d�s� a szab�lyoz�si k�r, a gc=7.2 szab�lyoz� 
 %�tviteli t�nyez�je eset�n! (Teh�t gc=7.2 �et�k�t cs�kkenteni kell)
 
 %Megjegyz�s: A zpk parancs helyett haszn�lhat� a pole(gyr)
 %ez csak a p�lusokat adja meg, de az most el�g.
 
 %3. feladat
 %bode(g0)
 %m2mintaBode.fig 
 %Mivel a 0dB mesz�sponthoz tartoz� f�zistol�s -184fok, valamint a
 %-180fokhoz tartoz� amlitud� �rt� +0.499, ez�rt a szab. k�r instabil
 %m�k�d�s�!!(pm=-184fok+180fok=-4fok;gm=0dB-0.499dB=-0.499dB)
 
 %4.feladat
 %bode(ge)
 %(m2mintaK.fig) /2.k�p/
 %Kc=K110=2,07; Kc=K155=4,32;
 
 %5.feladat
 %[z,p,k]=tf2zp([6106],[1 43.3 631.8 3808 9005 5073])
 %Az ered� szakasz p�lusai �s id��lland�i:
 %p1=-20.6070
 %p2=-11.3883
 %p3=-6.0049
 %p4=-4.4998
 %p5=-0.8000
%T1=-1/p1=0.05[s]
%T1=-1/p2=0.09[s]
%T3=-1/p3=0.17[s]
%T4=-1/p4=0.22[s]
%T5=-1/p5=1.25[s]
%Tsumma=1.78[s];Kerek�tve, Tsumma=2[s]
%Tszimul�ci�=2*5=10[s]
%A legnagyobb id��lland�10-szerese eset�n:Tszimul�ci�=1.25*10=12.5[s](ez egy m�sik
%lehets�ges meghat�roz�si m�dszer a szimul�ci�s id� meg�llap�t�s�ra)
%Simulink modell �bra (modell2minta.mdl) 
%Tminta=10/500=0.02[s]
%Megjegyz�s: A zpk parancs helyett haszn�lhat� a pole(ge)

%6.feladat
%adat1=SD(:,2);
%plot(tout,adat1)
%az �bra m2mintaK110.fig n�ven mentve; 
%(Kc=K110 be�ll�t�sn�l a szab�lyoz�si k�r alapjel �tmeneti f�ggv�nye)
%A szab�lyoz�si k�r min�s�gi jellemz�i:Mp=25,4%;yh=0,286;Ta2%=3,28[s]

%Figyelem a Kc �rt�ket �t kell irn� �s �jra futtatni a szimul�ci�t!
%adat2=SD(:,2);
%plot(tout,adat2)
%(m2mintaK155.fig)(Kc=K155 be�ll�t�sn�l a szab�lyoz�si k�r alapjel
%�tmeneti f�ggv�nye)
%A szab�lyoz�si k�r min�s�gi jellemz�i:Mp=61,7%;yh=0,161;Ta2%=7,13[s]

%Megjegyz�s:
%adat1=SD(:,2);
%plot(tout,adat1)
%sorok helyett haszn�lhat� a 
%plot(tout,simout) parancs is.
%az �bra att�l f�gg, hogy a simout melyik Kc �rt�kkel futtatva �llt el�!

 
 