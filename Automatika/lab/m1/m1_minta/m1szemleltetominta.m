
%N�v,Neptun k�d,Feladat tipus Pl.Matlab1X, ahol X lehet A,B,C.......

%Matlab1 m�r�shez egy szeml�ltet� feladatsor bemutat�sa
%A mintafeladatsort tekintse meg a p�ldat�r 56-70 oldalain

%1.feladat (T�rol� n�lk�li integr�l� alaptag vizsg�lata;"IT0")
%�tviteli f�ggv�ny:Gi(s)=Ki/s=0.25/s;Ki=0,25[1/s];Ti=1/Ki=4[s]
%gi=tf([0.25],[1 0])
%      0.25
%Gi(s=)----
 %      s 
%Id�tartom�nybeli vizsg�lat �tmeneti f�ggv�ny seg�ts�g�vel.
%step(gi)
%m1_abra1
%Ki=0.25[1/s];Ti=1/Ki=4[s]
%K�rfrekvencia tartom�nybeli vizsg�lat Bode diagramok seg�ts�g�vel.
%bode(gi)
%m1_abra2
%wi=Ki=0.25[rad/s];Ti=1/Ki=4[s]
%K�rfrekvencia tartom�nybeli vizsg�lat Nyquist diagram seg�ts�g�vel.
%nyquist(gi)
%m1_abra3
%wi=Ki=0.25[rad/s];Ti=1/Ki=4[s]

%2.feladat (K�tt�rol�s integr�l� tag vizsg�lata;"IT2=PT2*IT0")
%PT2 k�tt�rol�s ar�nyos tag �tviteli f�ggv�nye:G1(s)
%g1=tf([0.4],[1 0.6 0.09])
%              0.4
%G1(s)= ------------------
%       s^2 + 0.6 s + 0.09
%IT0 t�rol� n�lk�li integr�l� tag �tviteli f�ggv�nye:G2(s)
%g2=tf([0.5],[1 0])
%       0.5
%G2(s)= ---
%        s
%K�tt�rol�s integr�l� tag �tviteli f�ggv�nye:G3(s) (soros kapcsol�s alkalmaz�sa)
%g3=series(g1,g2)
%               0.2
%G3(s)= ----------------------
%       s^3 + 0.6 s^2 + 0.09 s
%P�lusok,zerusok,id��lland�k meghat�roz�sa:
%[z,p,k]=tf2zp([0.2],[1 0.6 0.09 0])
%P�lusok:p1=0;p2=-0.3;p3=-0.3;z=0
%Id��lland�k:T1=-1/p1=1/0=v�gtelen
%T2=-1/-0.3=3.33[s]
%T3=-1/-0.3=3.33[s]

%3.feladat
%IT2 tag k�rfrekvencia tartom�nybeli vizsg�lata Bode diagramok seg�ts�g�vel. 
%bode(g3)
%m1_abra4
%V�g�si k�rfrekvencia:wc=0.54[rad/s];a(w)=0[dB]
%IT2 tag k�rfrekvencia tartom�nybeli vizsg�lata Nyquist diagram seg�ts�g�vel.
%nyquist(g3)
%m1_abra5
%wc~0.54[rad/s]
%Megjegz�s:Nyquist helyg�rbe �s az egys�gsugar� k�r metsz�spontj�n�l leolvashat�
%w �rt�k megfelel a Bode diagr. 0[dB]-es ampl. menet a(w) wc �rt�k�nek.

%4.feladat
%IT2 tag id�tartom�nybeli vizsg�lata �tmeneti f�ggv�ny seg�ts�g�vel. 
%step(g3)
%m1_abra6
%L�tsz�lagos id��lland�:Tg=6[s];Ti=0.48[s];Ki=2.12[1/s]

%5.feladat PDT1 �sszetett tag vizsg�lata
%"P" ar�nyos tag �tviteli f�ggv�nye: Gp=0.5
%gp=tf([0.5],[1])
%Gp=0.5
%Egyt�rol�s differenci�l� tag ("DT1") �tviteli f�ggv�nye:Gdt=4s/1+0.4s
%gdt=tf([4 0],[0.4 1])
 %          4s
%Gdt(s)= ---------
%        0.4 s + 1
%PDT1 tag �tviteli f�ggv�nye:P �s DT1 tagok p�rhuzamos kapcsol�s�val el��ll�tva.
%gpdt1=parallel(gp,gdt)
%          4.2 s + 0.5
%Gpdt1(s)= -----------
 %          0.4 s + 1
 
 %6.feladat PDT1 tag id�tartom�nybeli vizsg�lata �tmeneti f�ggv�ny seg�ts�g�vel. 
 %step(gpdt1)
 %m1_abra7
 %Kc=0.5;TD=4[s];T=0.4[s];AD=TD/T=10;AD=Differenci�l�si er�s�t�s
 
%7.feladat �sszetett jel�tviteli tag el��ll�t�sa I tagnak DT1 taggal  t�rt�n�  negat�v visszacsatol�s�val. 
%I tag �tviteli f�ggv�nye: G2(s)
%g2=tf([0.5],[1 0])
%       0.5
%G2(s)= ---
%        s
%DT1 tag �tviteli f�ggv�nye:(Gdt)
%gdt=tf([4 0],[0.4 1])
%           4 s
%Gdt(s)= ---------
%        0.4 s + 1
%g4=feedback(g2,gdt)
%        0.2 s + 0.5
%G4(s)= -------------
%       0.4 s^2 + 3 s
%A G4(s) �tviteli f�ggv�ny� �sszetett tag k�zel�t� PI tagot jelent.

%8.feladat 
%A k�zel�t� PI jel�tviteli tag id�tartom�nybeli vizsg�lata �tmeneti f�ggv�nnyel.
%step(g4)
%m1_abra8
%A k�zel�t� PI �sszetett tag param�terei:Kc=0.04;Ti=6[s];Ki=0.167[1/s]
%A k�zel�t� PI jel�tviteli tag k�rfrekvencia tartom�nybeli vizsg�lata
%Bode diagramok seg�ts�g�vel.
%bode(g4,{0.01,100})
%m1_abra9
%wi=Ki=0.167[rad/s];wn~0.01[rad/s]A pontos wn=0[rad/s];fi=-90fok!
%A k�zel�t� PI jel�tviteli tag k�rfrekvencia tartom�nybeli vizsg�lata
%Nyquist diagram seg�ts�g�vel.
%nyquist(g4)
%m1_abra10
%wc=wi=Ki=0.167[rad/s];wn=0[rad/s] az �br�n nem jel�lhet� be.(fi=-pi/2-n�l)

%9. feladat (Holtid�s alaptag vizsg�lata; "H")
%g5=tf([2],[1],'inputdelay',0.6)
%G5(s)=exp(-0.6*s) * 2
%Kp=2; Th=0.6[s]
%A H tag id�tartom�nybeli vizsg�lata �tmeneti f�ggv�ny seg�ts�g�vel.
%t=0:0.001:1.6
%step(g5)
%m1_abra11

%10.feladat
%A H tag k�rfrekvencia tartom�nybeli vizsg�lata Bode diagramok segits�g�vel.
%bode(g5)
%m1_abra12
%fi=-34,5fok(w=1[r/s]);fi=-69fok(w=2[r/s]),delta fi=34,7fok=0,6[rad]
%deltaw=1[r/s];Th=delta fi/delta w= 0,6[s]
%a(w)=6[dB];Kp=10exp(6/20)=2
%A H tag k�rfrekvencia tartom�nybeli vizsg�lata Nyquist diagram seg�ts�g�vel.
%nyquist(g5)
%m1_abra13
%Kp=2