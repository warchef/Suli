%m1h feladatai (2013/2014 tan�v)

%1. feladat
g1=tf([2],[1],'inputdelay',0.6)
%Az eredm�ny: g1=exp(-0.6*s) * 2
%step(g1)
%az �bra mentve: m1h_kep1
%Az �br�b�l: Kp=2; Th=0.6[s] 
%(A Matlab automatikusan 0,1sec. %mintav�teli id�t vett fel! 
%Kisebb mintav�teli id�vel jobban l�that�,
%hogy az �tmeneti fv. egys�gugr�s jelleg�!)

% !!! A feladaton k�v�l Legyen az al�bbi PT1-es tag.
%G1=tf(5,[1 2])
%step(G1)
%az �bra mentve: m1h_kep1PT1
%Az �br�b�l: Kp=2.5; T=0.5[s] 

%2.feladat
%bode(g1)
%az �bra mentve: m1h_kep2
%Az �br�b�l: fi=-57,3 fokn�l a wh=1.67rad/sec, �s �gy Th=1/wh=0.6sec.

% !!! A feladaton k�v�l PT1-es tag
%bode(G1)
%az �bra mentve: m1h_kep2PT1
%Az �br�b�l: fi=-45 fokn�l a wh=2rad/sec, �s �gy T=1/wh=0.5sec.
% A kezdeti amplitud� �tvitel 7.95 dB
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
%p�lusok =
   %-5.0000
   %-0.5000
   %-0.0500
%id��lland�k: T1=-1/-5=0.2[s];T2=-1/-0.5=2[s];T3=-1/-0.05=20[s]
%Kzp = 0.3750

%step(g2)
%az �bra mentve: m1h_kep3
%Az �br�b�l: K=3, az id��lland�k nem olvashat�k le!

%4. feladat
%bode(g2)
%az �bra mentve: m1h_kep4
% Az �br�b�l: az id��lland�k nem olvashat�k le!
% Ha ki lehet szerkeszteni a -20dB/Dek�d, -40dB/Dek�d, -60dB/Dek�d
% egyeneseket, akkor wt1=0.05[r/s];wt2=0.5[r/s];wt3=5[r/s], amik
% a p�lusok abszol�t �rt�kei �s recipr�k �rt�keik az id��lland�k.

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
 %az �bra mentve: m1h_kep5
 %Az �br�b�l: Kp=1.2; T=0.4[s]; AD=h(0)-Kp==8; TD=3.2[s]
 % A T nemcsak szerkeszt�ssel hat�rozhat� meg, hanem a 
 %h(0)*0.37+Kp amplitud�hoz tartoz� id�vel is egyenl�. 
 
 %6.feladat
 %bode(g3)
 %az �bra mentve: m1h_kep6
 %Az �br�b�l: (kezdeti[r/s]=1.59[dB];Kc=10exp(1,59/20)=1,2
 %kezdeti amplitud�+3dB-n�l az wD olvashat� le k�zelit�leg, 
 %aminek a reciprok �rt�ke a TD, �s
 %v�gs� amplitud�-3dB-n�l az wT olvashat� le k�zelit�leg, 
 %aminek a reciprok �rt�ke a T id��lland�.
 
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
%az �bra mentve: m1h_kep7
%Az �br�b�l: Kc=1;wi=0.5[r/s];T=2[s]

%8.feladat
%step(g4)
%az �bra mentve: m1h_kep8
%Az �br�b�l: Kc=1;Ki=0.5[1/s];Ti=2[s]

 
 
 