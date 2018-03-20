//---------------------------------------------------------------------------
// This script is based on the work of Dieter Bungers - http://www.infovation.de
// The original example for the "Cross Browser Expanding and Collapsing TOC"
// was published on http://www.siteexperts.com/tips/techniques/ts03/index.htm
//---------------------------------------------------------------------------

var tocTab = new Array();var ir=0;
tocTab[ir++] = new Array ("1", "<I>syngo</I> fastView - Aide en ligne", "welcmtpc.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.1", "Présentation de <I>syngo</I> fastView", "newitem2.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.1.1", "Introduction", "intro.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.1.2", "Champ d'application", "purpose1.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.1.3", "Contact", "kontakt.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.2", "Fonctions ", "newitem.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.3", "Configuration requise", "sysreq.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.3.1", "Configuration logicielle", "software.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.3.2", "Configuration matérielle", "hardware.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4", "Installation", "install.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.4.1", "Préinstallé sur CD ou DVD", "cdordvd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4.2", "A télécharger sur Internet pour installation sur le disque dur", "instnet.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4.3", "CD-ROM d'installation pour installation sur le disque dur", "instcd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5", "Premiers pas", "start2.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.5.1", "Lancer <I>syngo</I> fastView", "fvstart.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5.2", "Interface utilisateur", "ui.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.5.2.1", "Fenêtre principale", "mainwndw.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5.2.2", "PatientBrowser", "brwcont.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6", "Affichage des données patient dans le navigateur", "displpat.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.1", "Images stockées sur CD-ROM", "imacd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2", "Images stockées dans un répertoire", "imadir.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.1", "Boîte de dialogue Parcourir ", "brwdir.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.1.1", "Remplacement des données patient", "replace.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.1.2", "Ajout de données patient", "brwadd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.2", "Boîte de dialogue Ouvrir", "dlgopnfl.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.2.1", "Sélection d'un DICOMDIR", "dcdiropn.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.2.2", "Sélection d'images isolées", "ima1sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7", "Charger et fermer des images", "patopcl.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.1", "Charger des images à partir de PatientBrowser", "brwopen.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.1.1", "Remplacement des images en cours dans la fenêtre principale", "ldrepl.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.1.2", " Ajout d'images aux images en cours dans la fenêtre principale", "ldappend.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.1.3", "Sélection d'images isolées dans une série", "ima2sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.2", "Charger des images à partir de l'option de menu Ouvrir", "fileopn.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.3", "Edition des images pendant le chargement", "ldparprc.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.4", "Interruption du processus de chargement", "cnclload.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.5", "Fermer des images", "patclose.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.6", "Zone Informations patient", "patinfo.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8", "Affichage des images", "imadisp.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.8.1", "Affichage en mode Pile et en mode Bande", "stckstrp.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.2", "Présentation sous différents formats", "lytsel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.3", "Afficher et masquer le texte d'image", "txthid.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.4", "Afficher et masquer le graphique syngo", "graphhid.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9", "Navigation", "navowv.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.9.1", "Naviguer dans les images d'une série", "navima.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.2", "Naviguer d'une série à l'autre", "navser.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.3", "Naviguer d'une étude à l'autre", "navstdy.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.4", "Naviguer de ligne en ligne", "navrow.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.5", "Naviguer de page en page", "navpag.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.6", "Cinéma - Séquences d'images d'une série", "movovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.9.6.1", "Cinéma automatique", "movauto.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.6.2", "Cinéma interactif", "movinter.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10", "Sélection d'images", "imasel.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.10.1", "Sélection simple", "ima4sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10.2", "Multisélection", "serselmt.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10.3", "Sélection d'une plage d'images", "ima3sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11", "Edition des images", "imaprc.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.1", "Fenêtrage", "wndwovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.1.1", "Fenêtrage à l'aide de la souris", "wndwmous.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.1.2", "Fenêtrage à l'aide du clavier", "wndwkey.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.1.3", "Paramètres de fenêtrage préférentiels", "wndwdef1.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.2", "Modes Zoom et Déplacer", "zoompan.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.2.1", "Zoom - Agrandir/Réduire", "wndwdef2.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.2.2", "Déplacer", "pan.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.3", "Facteurs d'agrandissement et de réduction", "zoomovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.3.1", "Agrandir par 1,25", "zoom125.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.3.2", "Réduire par 0,8", "zoom08.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.4", "Mesure des distances", "tooldist.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.5", "Loupe", "mgnifgls.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.6", "Copie d'une image", "imacpy.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12", "Conversion des images", "imasave.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.12.1", "Enregistrer au format BITMAP", "savebmp.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12.2", "Enregistrer au format JPEG", "savejpeg.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12.3", "Enregistrer au format AVI", "saveavi.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.13", "Liens", "links.htm", "", "cicon11.gif", "cicon11.gif");
isContent = true,
isIndex = false,
showNumbers = false,
textSizes = new Array(1, 1, 0.7, 0.7),
tocBehaviour = new Array(1,1),
tocScroll=false,
tocLinks = new Array(1,0);
var isIE = navigator.appName.toLowerCase().indexOf("explorer") > -1;
var mdi = (isIE) ? textSizes[1]:textSizes[3];
var sml = (isIE) ? textSizes[2]:textSizes[4];
var oldCurrentNumber = "", oldLastVisitNumber = "";
var toDisplay = new Array();
for (ir=0; ir<tocTab.length; ir++) {
toDisplay[ir] = tocTab[ir][0].split(".").length==1;
}
function reDisplay(currentNumber,tocChange,noLink,e) {
if (isIndex && (toc.location.href.substring(toc.location.href.lastIndexOf("/")+1,toc.location.href.length) != "vx57bidx.htm")) { isIndex=false; isContent=true; }
if (currentNumber == "navIndex") { isContent=false; }
if (currentNumber == "navContent") { isIndex=false; isContent=true; }
if (e) {
ctrlKeyDown = (isIE) ? e.ctrlKey : (e.modifiers==2);
if (tocChange && ctrlKeyDown) tocChange = 2;
}
var currentNumArray = currentNumber.split(".");
var currentLevel = currentNumArray.length-1;
var currentIndex = 0;
var scrollY=0, addScroll=tocScroll;
if (currentNumber == "") currentNumber = top.location.href.substring(top.location.href.lastIndexOf("?")+1,top.location.href.length);
for (i=0; i<tocTab.length; i++) {
if ((tocTab[i][0] == currentNumber) || (tocTab[i][2] == currentNumber && tocTab[i][2] != "")) {
currentIndex = i;
currentNumber = tocTab[i][0];
currentNumArray = currentNumber.split(".");
currentLevel = currentNumArray.length-1;
break;
}
}
if (currentIndex < tocTab.length-1) {
nextLevel = tocTab[currentIndex+1][0].split(".").length-1;
currentIsExpanded = nextLevel > currentLevel && toDisplay[currentIndex+1];
}
else currentIsExpanded = false;
theHref = (noLink) ? "" : tocTab[currentIndex][2];
theTarget = tocTab[currentIndex][3];
for (i=1; i<tocTab.length; i++) {
if (tocChange) {
thisNumber = tocTab[i][0];
thisNumArray = thisNumber.split(".");
thisLevel = thisNumArray.length-1;
isOnPath = true;
if (thisLevel > 0) {
for (j=0; j<thisLevel; j++) {
isOnPath = (j>currentLevel) ? false : isOnPath && (thisNumArray[j] == currentNumArray[j]);
}
}
toDisplay[i] = (tocChange == 1) ? isOnPath : (isOnPath || toDisplay[i]);
if (thisNumber.indexOf(currentNumber+".")==0 && thisLevel > currentLevel) {
if (currentIsExpanded) toDisplay[i] = false;
else toDisplay[i] = (thisLevel == currentLevel+1);
}
}
}
if (!isContent && !isIndex) {
toc.location.href = "vx57bidx.htm";
isIndex = true;
}
if (isContent) {
toc.document.write("<html>\n\r<head></head>\n\r<style type=\"text/css\">\n\r       SPAN.heading1 { font-family: Arial,Helvetica; font-weight: normal; font-size: 10pt; color: #000000; text-decoration: none }\n\r       SPAN.heading2 { font-family: Arial,Helvetica; font-weight: normal; font-size: 9pt; color: #000000; text-decoration: none }\n\r       SPAN.heading3 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading4 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading5 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading6 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r\n\r       SPAN.hilight1 { font-family: Arial,Helvetica; font-weight: normal; font-size: 10pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight2 { font-family: Arial,Helvetica; font-weight: normal; font-size: 9pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight3 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight4 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight5 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight6 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r</style>\n\r<body bgcolor=\"#FFFFFF\">\n\r<font face=\"Arial,Helvetica\" size=\"4\"><b>Aide en ligne <I>syngo</I> fastView</b></font><br>\n\r<font face=\"Arial,Helvetica\" size=\"2\">\n\r<a href=\"javaScript:parent.reDisplay(\'navIndex\',0,0);\">Index</a>\n\r</font><br><br><br>\n\r\n\r  <!-- Place holder for the TOC, do not delete the line below -->\n\r  ");}
for (i=0; i<tocTab.length; i++) {
if (toDisplay[i]) {
thisNumber = tocTab[i][0];
thisNumArray = thisNumber.split(".");
thisLevel = thisNumArray.length-1;
isCurrent = (i == currentIndex);
if (i < tocTab.length-1) {
nextLevel = tocTab[i+1][0].split(".").length-1;
img = (thisLevel >= nextLevel) ? tocTab[i][4] : ((toDisplay[i+1]) ? tocTab[i][5] : tocTab[i][4]);
}
else img = tocTab[i][4];
if (isContent) {
thisTextClass = ((thisNumber==currentNumber)?("hilight"):("heading"));
if (addScroll) scrollY+=((thisLevel<2)?mdi:sml)*25;
if (isCurrent) addScroll=false;
toc.document.write("<table border=0 cellspacing=0 cellpadding=2>");
toc.document.write("<tr><td width=" + ((thisLevel+1) * 20) + " align=right valign=top>");
toc.document.write("<a href=\"javaScript:history.go(0)\" onMouseDown=\"parent.reDisplay('" + thisNumber + "'," + tocBehaviour[0] + "," + tocLinks[0] + ",event)\">");
toc.document.write("<img src=\"" + img + "\" border=0></a>");
toc.document.write("</td><td align=left>");
toc.document.write("<a href=\"javaScript:history.go(0)\" onMouseDown=\"parent.reDisplay('" + thisNumber + "'," + tocBehaviour[1] + "," + tocLinks[1] + ",event)\">");
toc.document.write("<span class=\""  + thisTextClass + ((thisLevel>5) ? 6 : thisLevel+1) + "\">");
toc.document.write( ((showNumbers)?(thisNumber+" "):"") + tocTab[i][1]);
toc.document.write("</span></a>");
toc.document.writeln("</td></tr></table>");
} //isContent
}
}
if (!noLink) {
oldLastVisitNumber = oldCurrentNumber;
oldCurrentNumber = currentNumber;
}
if (isContent) {
toc.document.write("\n\r\n\r<hr><font face=\"Arial,Helvetica\" size=\"1\">&copy; 2005  Siemens Medical Solutions SW</font>\n\r</body>\n\r</html>\n\r");
toc.document.close();
if (tocScroll) toc.scroll(0,scrollY);
}
if (theHref)
if (theTarget=="top") top.location.href = theHref;
else if (theTarget=="parent") parent.location.href = theHref;
else if (theTarget=="blank") open(theHref,"");
else content.location.href = theHref;
}
