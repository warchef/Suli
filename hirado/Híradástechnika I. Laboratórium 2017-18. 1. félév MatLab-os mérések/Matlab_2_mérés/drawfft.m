function drawfft(x,fs)
N=length(x);
sp1=(fft(x,N))/N; % Komplex spektrum sz�m�t�sa
sp3=sp1(1:N/2); % Csak a pozit�v frekvenci�k
sp3(2:N/2)=sp3(2:N/2)*2; % Val�s amplit�d�k 
df=fs/N; % FFT felbont�sa
ff2=0:df:(fs/2)-df; % Frekvencia sk�la sz�m�t�sa
figure;
stem(ff2,abs(sp3),'.');
axis([0,3e4,0,5]);
grid;
xlabel('frekvencia [Hz]');
ylabel('Amplit�d�');
title('Alaps�vi jel spektruma (abszol�t �rt�k)');
