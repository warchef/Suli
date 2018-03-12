close all; clear all;

%% Read image
rgb = imread('candy.jpg');
% imtool(rgb);

%% Remove background illumination
I = rgb2gray(rgb);
background = imclose(I, strel('disk',15));
I2 = imsubtract(background,I);
 figure, imshow(I2,[]);

%% Segment all objects
BW = im2bw(I2,graythresh(I2));
BW = bwareaopen(BW, 20);
fill = imfill(BW,'holes');
figure, imshow(fill);

%% Extract features
[labeled,numObjects] = bwlabel(fill,4);
stats = regionprops(labeled,'Eccentricity','Area','BoundingBox');
areas = [stats.Area];
eccentricities = [stats.Eccentricity];

%% Use feature analysis to identify broken objects
minSize = mean(areas) - 0.25 * std(areas);
idxOfDefects = find(areas < minSize & eccentricities > .5)
statsDefects = stats(idxOfDefects)

%% Label broken objects
figure; imshow(rgb);
hold on;
for idx = 1 : length(statsDefects)
        h = rectangle('Position',statsDefects(idx).BoundingBox,'LineWidth',2);
        set(h,'EdgeColor',[.75 0 0]);
        hold on;
end
hold off;


