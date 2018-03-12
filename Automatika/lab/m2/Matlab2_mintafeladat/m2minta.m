
%MATLAB2 minta feladatsor

%1. feladat
gc=7.2
ga=tf([11.4],[1 11.4])
gp=tf([26],[1 11.3 35.4 21.6])
gt=tf([20.6],[1 20.6])
%eredõ szakasz átviteli függvénye:
ge=ga*gp*gt
%                       6106
%ge=-----------------------------------------------------
%   s^5 + 43.3 s^4 + 631.8 s^3 + 3808 s^2 + 9005 s + 5073
%szabályozási kör hurokátviteli függvénye:
g0=gc*ga*gp*gt
%                      4.396e004
%g0=-----------------------------------------------------
%   s^5 + 43.3 s^4 + 631.8 s^3 + 3808 s^2 + 9005 s + 5073
%szabályozási kör alapjel átviteli függvénye:
gyr=feedback(gc*ga*gp,gt)
 
 %                 2134 s + 4.396e004
%gyr=------------------------------------------------------
%    s^5 + 43.3 s^4 + 631.8 s^3 + 3808 s^2 + 9005 s        
                                                      
 %                                          + 4.903e004
 
 
 %2.feladat
 %alapjel átviteli fv. gyr pólusainak meghatározása, 
 %és ennek alapján stab. vizsg.
 %[z,p,k]=tf2zp([2134 4.396e004],[1 43.3 631.8 3808 9005 4.903e004])
 %pólusok: 
 %p1=-21.4214          
 %p2=-11.0066 + 5.4573i
 %p3=-11.0066 - 5.4573i
 %p4=0.0673 + 3.8937i
 %p5= 0.0673 - 3.8937i 
 %Mivel a p4 és p5 konjugált komplex póluspár valósrésze pozitív, 
 %ezért nem stabil mûködésû a szabályozási kör, a gc=7.2 szabályozó 
 %átviteli tényezõje esetén! (Tehát gc=7.2 éetékét csökkenteni kell)
 
 %Megjegyzés: A zpk parancs helyett használható a pole(gyr)
 %ez csak a pólusokat adja meg, de az most elég.
 
 %3. feladat
 %bode(g0)
 %m2mintaBode.fig 
 %Mivel a 0dB meszésponthoz tartozó fázistolás -184fok, valamint a
 %-180fokhoz tartozó amlitudó érté +0.499, ezért a szab. kör instabil
 %mûködésû!!(pm=-184fok+180fok=-4fok;gm=0dB-0.499dB=-0.499dB)
 
 %4.feladat
 %bode(ge)
 %(m2mintaK.fig) /2.kép/
 %Kc=K110=2,07; Kc=K155=4,32;
 
 %5.feladat
 %[z,p,k]=tf2zp([6106],[1 43.3 631.8 3808 9005 5073])
 %Az eredõ szakasz pólusai és idõállandói:
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
%Tsumma=1.78[s];Kerekítve, Tsumma=2[s]
%Tszimuláció=2*5=10[s]
%A legnagyobb idõállandó10-szerese esetén:Tszimuláció=1.25*10=12.5[s](ez egy másik
%lehetséges meghatározási módszer a szimulációs idõ megállapítására)
%Simulink modell ábra (modell2minta.mdl) 
%Tminta=10/500=0.02[s]
%Megjegyzés: A zpk parancs helyett használható a pole(ge)

%6.feladat
%adat1=SD(:,2);
%plot(tout,adat1)
%az ábra m2mintaK110.fig néven mentve; 
%(Kc=K110 beállításnál a szabályozási kör alapjel átmeneti függvénye)
%A szabályozási kör minõségi jellemzõi:Mp=25,4%;yh=0,286;Ta2%=3,28[s]

%Figyelem a Kc értéket át kell irní és újra futtatni a szimulációt!
%adat2=SD(:,2);
%plot(tout,adat2)
%(m2mintaK155.fig)(Kc=K155 beállításnál a szabályozási kör alapjel
%átmeneti függvénye)
%A szabályozási kör minõségi jellemzõi:Mp=61,7%;yh=0,161;Ta2%=7,13[s]

%Megjegyzés:
%adat1=SD(:,2);
%plot(tout,adat1)
%sorok helyett használható a 
%plot(tout,simout) parancs is.
%az ábra attól függ, hogy a simout melyik Kc értékkel futtatva állt elõ!

 
 