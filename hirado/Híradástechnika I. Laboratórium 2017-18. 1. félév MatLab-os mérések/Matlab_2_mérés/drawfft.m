function drawfft(x,fs)
N=length(x);
sp1=(fft(x,N))/N; % Komplex spektrum számítása
sp3=sp1(1:N/2); % Csak a pozitív frekvenciák
sp3(2:N/2)=sp3(2:N/2)*2; % Valós amplitúdók 
df=fs/N; % FFT felbontása
ff2=0:df:(fs/2)-df; % Frekvencia skála számítása
figure;
stem(ff2,abs(sp3),'.');
axis([0,3e4,0,5]);
grid;
xlabel('frekvencia [Hz]');
ylabel('Amplitúdó');
title('Alapsávi jel spektruma (abszolút érték)');
