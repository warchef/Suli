%m1h feladatai (2013/2014 tanév)

%1. feladat
g1=tf([2],[1],'inputdelay',0.6)
%Az eredmény: g1=exp(-0.6*s) * 2
%step(g1)
%az ábra mentve: m1h_kep1
%Az ábrából: Kp=2; Th=0.6[s] 
%(A Matlab automatikusan 0,1sec. %mintavételi idõt vett fel! 
%Kisebb mintavételi idõvel jobban látható,
%hogy az átmeneti fv. egységugrás jellegû!)

% !!! A feladaton kívül Legyen az alábbi PT1-es tag.
%G1=tf(5,[1 2])
%step(G1)
%az ábra mentve: m1h_kep1PT1
%Az ábrából: Kp=2.5; T=0.5[s] 

%2.feladat
%bode(g1)
%az ábra mentve: m1h_kep2
%Az ábrából: fi=-57,3 foknál a wh=1.67rad/sec, és így Th=1/wh=0.6sec.

% !!! A feladaton kívül PT1-es tag
%bode(G1)
%az ábra mentve: m1h_kep2PT1
%Az ábrából: fi=-45 foknál a wh=2rad/sec, és így T=1/wh=0.5sec.
% A kezdeti amplitudó átvitel 7.95 dB
%K=10^(7.95/20)=2.5sec.

%3. feladat
%g21=tf([1.5],[2 1])
%      1.5
% g21=-------
%     2 s + 1
%g22=tf([1],[10 0.5])
%        1
% g22=----------
%     10 s + 0.5
%g23=tf([5],[1 5])
%      5
% g23=-----
%     s + 5
%g2=g21*g22*g23
%              7.5
%  g2-------------------------------
%    20 s^3 + 111 s^2 + 55.5 s + 2.5
%[z,p,k]=tf2zp([7.5],[20 111 55.5 2.5])
%zerus =
%Empty matrix: 0-by-1
%pólusok =
   %-5.0000
   %-0.5000
   %-0.0500
%idõállandók: T1=-1/-5=0.2[s];T2=-1/-0.5=2[s];T3=-1/-0.05=20[s]
%Kzp = 0.3750

%step(g2)
%az ábra mentve: m1h_kep3
%Az ábrából: K=3, az idõállandók nem olvashatók le!

%4. feladat
%bode(g2)
%az ábra mentve: m1h_kep4
% Az ábrából: az idõállandók nem olvashatók le!
% Ha ki lehet szerkeszteni a -20dB/Dekád, -40dB/Dekád, -60dB/Dekád
% egyeneseket, akkor wt1=0.05[r/s];wt2=0.5[r/s];wt3=5[r/s], amik
% a pólusok abszolút értékei és reciprók értékeik az idõállandók.

%5. feladat
%g31=tf([1.2],[1])
%g31=1.2
%g32=tf([3.2 0],[0.4 1])
  %      3.2 s
% g32= ---------
%      0.4 s + 1
%g3=parallel(g31,g32)
%    3.68 s + 1.2
% g3=------------
 %    0.4 s + 1
 %step(g3)
 %az ábra mentve: m1h_kep5
 %Az ábrából: Kp=1.2; T=0.4[s]; AD=h(0)-Kp==8; TD=3.2[s]
 % A T nemcsak szerkesztéssel határozható meg, hanem a 
 %h(0)*0.37+Kp amplitudóhoz tartozó idõvel is egyenlõ. 
 
 %6.feladat
 %bode(g3)
 %az ábra mentve: m1h_kep6
 %Az ábrából: (kezdeti[r/s]=1.59[dB];Kc=10exp(1,59/20)=1,2
 %kezdeti amplitudó+3dB-nél az wD olvasható le közelitõleg, 
 %aminek a reciprok értéke a TD, és
 %végsõ amplitudó-3dB-nél az wT olvasható le közelitõleg, 
 %aminek a reciprok értéke a T idõállandó.
 
 %7.feladat
 %g41=1
 %g41=1
 %g42=tf([1],[2 1])
 %      1
%g42=-------
%    2 s + 1 
%g4=feedback(g41,-g42)
%    2 s + 1
% g4=-------
%      2 s
%bode(g4)
%az ábra mentve: m1h_kep7
%Az ábrából: Kc=1;wi=0.5[r/s];T=2[s]

%8.feladat
%step(g4)
%az ábra mentve: m1h_kep8
%Az ábrából: Kc=1;Ki=0.5[1/s];Ti=2[s]

 
 
 