
%Név,Neptun kód,Feladat tipus Pl.Matlab1X, ahol X lehet A,B,C.......

%Matlab1 méréshez egy szemléltetõ feladatsor bemutatása
%A mintafeladatsort tekintse meg a példatár 56-70 oldalain

%1.feladat (Tároló nélküli integráló alaptag vizsgálata;"IT0")
%Átviteli függvény:Gi(s)=Ki/s=0.25/s;Ki=0,25[1/s];Ti=1/Ki=4[s]
%gi=tf([0.25],[1 0])
%      0.25
%Gi(s=)----
 %      s 
%Idõtartománybeli vizsgálat átmeneti függvény segítségével.
%step(gi)
%m1_abra1
%Ki=0.25[1/s];Ti=1/Ki=4[s]
%Körfrekvencia tartománybeli vizsgálat Bode diagramok segítségével.
%bode(gi)
%m1_abra2
%wi=Ki=0.25[rad/s];Ti=1/Ki=4[s]
%Körfrekvencia tartománybeli vizsgálat Nyquist diagram segítségével.
%nyquist(gi)
%m1_abra3
%wi=Ki=0.25[rad/s];Ti=1/Ki=4[s]

%2.feladat (Kéttárolós integráló tag vizsgálata;"IT2=PT2*IT0")
%PT2 kéttárolós arányos tag átviteli függvénye:G1(s)
%g1=tf([0.4],[1 0.6 0.09])
%              0.4
%G1(s)= ------------------
%       s^2 + 0.6 s + 0.09
%IT0 tároló nélküli integráló tag átviteli függvénye:G2(s)
%g2=tf([0.5],[1 0])
%       0.5
%G2(s)= ---
%        s
%Kéttárolós integráló tag átviteli függvénye:G3(s) (soros kapcsolás alkalmazása)
%g3=series(g1,g2)
%               0.2
%G3(s)= ----------------------
%       s^3 + 0.6 s^2 + 0.09 s
%Pólusok,zerusok,idõállandók meghatározása:
%[z,p,k]=tf2zp([0.2],[1 0.6 0.09 0])
%Pólusok:p1=0;p2=-0.3;p3=-0.3;z=0
%Idõállandók:T1=-1/p1=1/0=végtelen
%T2=-1/-0.3=3.33[s]
%T3=-1/-0.3=3.33[s]

%3.feladat
%IT2 tag körfrekvencia tartománybeli vizsgálata Bode diagramok segítségével. 
%bode(g3)
%m1_abra4
%Vágási körfrekvencia:wc=0.54[rad/s];a(w)=0[dB]
%IT2 tag körfrekvencia tartománybeli vizsgálata Nyquist diagram segítségével.
%nyquist(g3)
%m1_abra5
%wc~0.54[rad/s]
%Megjegzés:Nyquist helygörbe és az egységsugarú kör metszéspontjánál leolvasható
%w érték megfelel a Bode diagr. 0[dB]-es ampl. menet a(w) wc értékének.

%4.feladat
%IT2 tag idõtartománybeli vizsgálata átmeneti függvény segítségével. 
%step(g3)
%m1_abra6
%Látszólagos idõállandó:Tg=6[s];Ti=0.48[s];Ki=2.12[1/s]

%5.feladat PDT1 összetett tag vizsgálata
%"P" arányos tag átviteli függvénye: Gp=0.5
%gp=tf([0.5],[1])
%Gp=0.5
%Egytárolós differenciáló tag ("DT1") átviteli függvénye:Gdt=4s/1+0.4s
%gdt=tf([4 0],[0.4 1])
 %          4s
%Gdt(s)= ---------
%        0.4 s + 1
%PDT1 tag átviteli függvénye:P és DT1 tagok párhuzamos kapcsolásával elõállítva.
%gpdt1=parallel(gp,gdt)
%          4.2 s + 0.5
%Gpdt1(s)= -----------
 %          0.4 s + 1
 
 %6.feladat PDT1 tag idõtartománybeli vizsgálata átmeneti függvény segítségével. 
 %step(gpdt1)
 %m1_abra7
 %Kc=0.5;TD=4[s];T=0.4[s];AD=TD/T=10;AD=Differenciálási erõsítés
 
%7.feladat Összetett jelátviteli tag elõállítása I tagnak DT1 taggal  történõ  negatív visszacsatolásával. 
%I tag átviteli függvénye: G2(s)
%g2=tf([0.5],[1 0])
%       0.5
%G2(s)= ---
%        s
%DT1 tag átviteli függvénye:(Gdt)
%gdt=tf([4 0],[0.4 1])
%           4 s
%Gdt(s)= ---------
%        0.4 s + 1
%g4=feedback(g2,gdt)
%        0.2 s + 0.5
%G4(s)= -------------
%       0.4 s^2 + 3 s
%A G4(s) átviteli függvényü összetett tag közelítõ PI tagot jelent.

%8.feladat 
%A közelítõ PI jelátviteli tag idõtartománybeli vizsgálata átmeneti függvénnyel.
%step(g4)
%m1_abra8
%A közelítõ PI összetett tag paraméterei:Kc=0.04;Ti=6[s];Ki=0.167[1/s]
%A közelítõ PI jelátviteli tag körfrekvencia tartománybeli vizsgálata
%Bode diagramok segítségével.
%bode(g4,{0.01,100})
%m1_abra9
%wi=Ki=0.167[rad/s];wn~0.01[rad/s]A pontos wn=0[rad/s];fi=-90fok!
%A közelítõ PI jelátviteli tag körfrekvencia tartománybeli vizsgálata
%Nyquist diagram segítségével.
%nyquist(g4)
%m1_abra10
%wc=wi=Ki=0.167[rad/s];wn=0[rad/s] az ábrán nem jelölhetõ be.(fi=-pi/2-nél)

%9. feladat (Holtidõs alaptag vizsgálata; "H")
%g5=tf([2],[1],'inputdelay',0.6)
%G5(s)=exp(-0.6*s) * 2
%Kp=2; Th=0.6[s]
%A H tag idõtartománybeli vizsgálata átmeneti függvény segítségével.
%t=0:0.001:1.6
%step(g5)
%m1_abra11

%10.feladat
%A H tag körfrekvencia tartománybeli vizsgálata Bode diagramok segitségével.
%bode(g5)
%m1_abra12
%fi=-34,5fok(w=1[r/s]);fi=-69fok(w=2[r/s]),delta fi=34,7fok=0,6[rad]
%deltaw=1[r/s];Th=delta fi/delta w= 0,6[s]
%a(w)=6[dB];Kp=10exp(6/20)=2
%A H tag körfrekvencia tartománybeli vizsgálata Nyquist diagram segítségével.
%nyquist(g5)
%m1_abra13
%Kp=2