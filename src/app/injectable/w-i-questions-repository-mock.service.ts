import {Injectable} from "@angular/core";
import {LebiedzQuestion} from "../questions/model/lebiedz-question.model";

@Injectable()
export class WIQuestionsRepositoryMock {

  questions: LebiedzQuestion[] = [
    new LebiedzQuestion(`
Wizualizacja dla danych o dziedzinie wielowymiarowej i przeciwdziedzinie jednowymiarowej
`,
      [`
Wykres mozaikowy
`, `
Wykres liniowy
`, `
Wykres słupkowy
`, `
Wykres typu "mapa"
`], 0), new LebiedzQuestion(`
Diagram o umieralności w wosjku z przed 150 lat, kogo?
`,
      [`
Nightingale
`, `
Mirand
`, `
Napoleon
`, `
Snow
`], 0), new LebiedzQuestion(`
Co obrazuje mapa Minarda?
`,
      [`
Kampanie Napoleona
`, `
Umieralność w wojsku z przed 150 lat
`, `
Korelacje epidemii cholery z połóżeniem jednej z pomp
`, `
Równowaga rynku
`], 0), new LebiedzQuestion(`
Co pokazuje wykres Playfaira
`,
      [`
Równowaga rynku
`, `
Kampanie Napoleona
`, `
Przyczyny śmierci w wojsku
`, `
Korelacja epidemii cholery z połóżeniem jednej z pomp
`], 0), new LebiedzQuestion(`
Mapa Snowa
`,
      [`
Korelacja epidemii cholery z położeniem jednej z pomp
`, `
Przyczyny smierci w wojsku
`, `
Kampania Napoleona
`, `
Równowaga rynku
`], 0), new LebiedzQuestion(`
Co to jest wizualizacja danych?
`,
      [`
Prezentacja zależności czegoś od czegoś
`, `
Prezentacja obiektu lub zjawiska
`, `
Kształtowanie obrazu w umyśle odbiorcy, osiągane za pomocą wzroku (najczęściej) lub innych zmysłów
`, `
Pokazywanie bazy danych
`], 0), new LebiedzQuestion(`
Co to jest wizualizacja (ogólnie)?
`,
      [`
Kształtowanie obrazu w umyśle odbiorcy, osiągane za pomocą wzroku (najczęściej) lub innych zmysłów
`, `
Prezentacja obiektu lub zjawiska
`, `
Prezentacja zależności czegoś od czegoś
`, `
Przedmiot
`], 0), new LebiedzQuestion(`
Co to jest wizualizacja naukowa?
`,
      [`
Prezentacja obiektu lub zjawiska
`, `
Prezentacja zależności czegoś od czegoś
`, `
Kształtowanie obrazu w umyśle odbiorcy, osiągane za pomocą wzroku (najczęściej) lub innych zmysłów
`, `
Baza danych naukowo
`], 0), new LebiedzQuestion(`
Jaki wykres służy tylko do danych jednowymiarowych
`,
      [`
Percentylowy
`, `
Liniowy
`, `
Mapa
`, `
Mozaikowy
`], 0), new LebiedzQuestion(`
Dane jednowymiarowe
`,
      [`
percentylowy wykres pudełkowy
`, `
mapa
`, `
kolumnowy
`, `
sieć rybacka
`], 0), new LebiedzQuestion(`
Dane jednowymiarowe
`,
      [`
pudełkowy Tukeya
`, `
mapa
`, `
kolumnowy
`, `
sieć rybacka
`], 0), new LebiedzQuestion(`
Dane jednowymiarowe
`,
      [`
iskres
`, `
liniowy
`, `
mapa
`, `
sieć rybacka
`], 0), new LebiedzQuestion(`
Dane jednowymiarowe
`,
      [`
histogram
`, `
sieć rybacka
`, `
Mapa miasta
`, `
Kolaż zdjęć w albumie
`], 0), new LebiedzQuestion(`
Dane dwuwymiarowe
`,
      [`
punktowy
`, `
percentylowy
`, `
macierz punktowa
`, `
radarowy
`], 0), new LebiedzQuestion(`
Dane dwuwymiarowe
`,
      [`
pudełkowy
`, `
macierz punktowa
`, `
hiperpudło
`, `
lebiedź
`], 0), new LebiedzQuestion(`
Dane dwuwymiarowe
`,
      [`
histogram
`, `
iskres
`, `
wielowymiarowe ikony
`, `
buźki Chernoffa
`], 0), new LebiedzQuestion(`
Dane trójwymiarowe
`,
      [`
wykresy punktowe - prezentacja i rzuty 2D
`, `
histogram
`, `
patyczaki
`, `
wykres mozaikowy
`], 0), new LebiedzQuestion(`
Dane trójwymiarowe
`,
      [`
macierz punktowa
`, `
buźki Chernoffa
`, `
patyczaki
`, `
iskres
`], 0), new LebiedzQuestion(`
Dane Trójwymiarowe
`,
      [`
"topienie"
`, `
wykres mozaikowy
`, `
wykres pudełkowy
`, `
percentylowy wykres pudełkowy
`], 0), new LebiedzQuestion(`
Dane wielowymiarowe
`,
      [`
sieć rybacka
`, `
wykres percentylowy
`, `
histogram
`, `
wykres pudełkowy Tukeya
`], 0), new LebiedzQuestion(`
Dane wielowymiarowe
`,
      [`
mozaikowy
`, `
wykresy punktowe
`, `
macierz punktowa
`, `
iskres
`], 0), new LebiedzQuestion(`
Dane wielowymiarowe
`,
      [`
radarowy
`, `
wykres punktowy
`, `
"topienie"
`, `
percentylowy wykres pudełkowy
`], 0), new LebiedzQuestion(`
Dane wielowymiarowe
`,
      [`
hiperpudło
`, `
"topienie"
`, `
wykres percentylowy
`, `
macierz punktowa
`], 0), new LebiedzQuestion(`
Dane wielowymiarowe
`,
      [`
wielowymiarowe ikony
`, `
wykresy punktowe - rzuty 2D
`, `
wykres pudełkowy Tukeya
`, `
histogram
`], 0), new LebiedzQuestion(`
Dane wielowymiarowe
`,
      [`
buźki Chernoffa
`, `
wykresy punktowe - prezentacja 2D
`, `
wykres pudełkowy Tukeya
`, `
histogram
`], 0), new LebiedzQuestion(`
Dane wielowymiarowe
`,
      [`
patyczaki
`, `
"topienie"
`, `
wykres percentylowy
`, `
macierz punktowa
`], 0), new LebiedzQuestion(`
Wykres pole wektorowe jest wizualizacją zależności...
`,
      [`
X^2->Y^2
`, `
X->Y
`, `
X^2->Y
`, `
X->Y^2
`], 0), new LebiedzQuestion(`
X->Y
`,
      [`
◦	wykresy liniowe
◦	wykresy punktowe
◦	wykresy słupkowe
◦	wykresy kołowe
`, `
◦	wykresy liniowe (zwykłe i warstwowe)
◦	wykresy punktowe
◦	wykresy słupkowe
◦	wykresy pierścieniowe
◦	wykres radarowy
◦	wykres sieć rybacka
`, `
◦	wykresy powierzchniowe
◦	wykresy słupkowe
◦	wykresy typu mapa
◦	wykresy bąbelkowe
`, `
◦	wykresy powierzchniowe
◦	wykresy słupkowe
◦	wykresy bąbelkowe
◦	wykres pole wektorowe
`], 0), new LebiedzQuestion(`
X -> Y^m (dla m > 1)
`,
      [`
◦	wykresy liniowe (zwykłe i warstwowe)
◦	wykresy punktowe
◦	wykresy słupkowe
◦	wykresy pierścieniowe
◦	wykres radarowy
◦	wykres sieć rybacka
`, `
◦	wykresy liniowe
◦	wykresy punktowe
◦	wykresy słupkowe
◦	wykresy kołowe
`, `
◦	wykresy mozajkowe
◦	animacja jednego wymiaru
◦	przekroje jednego wymiaru
`, `
◦	wykresy powierzchniowe
◦	wykresy słupkowe
◦	wykresy bąbelkowe
◦	wykres pole wektorowe
`], 0), new LebiedzQuestion(`
•	X^2 -> Y
`,
      [`
◦	wykresy powierzchniowe
◦	wykresy słupkowe
◦	wykresy typu mapa
◦	wykresy bąbelkowe
`, `
◦	wykresy powierzchniowe
◦	wykresy słupkowe
◦	wykresy bąbelkowe
◦	wykres pole wektorowe
`, `
◦	wykresy liniowe
◦	wykresy punktowe
◦	wykresy słupkowe
◦	wykresy kołowe
`, `
◦	wykresy mozajkowe
◦	animacja jednego wymiaru
◦	przekroje jednego wymiaru
`], 0), new LebiedzQuestion(`
X^2 -> Y^m
`,
      [`
◦	wykresy powierzchniowe
◦	wykresy słupkowe
◦	wykresy bąbelkowe
◦	wykres pole wektorowe
`, `
◦	wykresy mozajkowe
◦	animacja jednego wymiaru
◦	przekroje jednego wymiaru
`, `
◦	wykresy liniowe (zwykłe i warstwowe)
◦	wykresy punktowe
◦	wykresy słupkowe
◦	wykresy pierścieniowe
◦	wykres radarowy
◦	wykres sieć rybacka
`, `
◦	wykresy liniowe
◦	wykresy punktowe
◦	wykresy słupkowe
◦	wykresy kołowe
`], 0), new LebiedzQuestion(`
X^n -> Y^m dla m >= 1
`,
      [`
◦	wykresy mozajkowe
◦	animacja jednego wymiaru
◦	przekroje jednego wymiaru
`, `
◦	wykresy powierzchniowe
◦	wykresy słupkowe
◦	wykresy bąbelkowe
◦	wykres pole wektorowe
`, `
◦	wykresy powierzchniowe
◦	wykresy słupkowe
◦	wykresy typu mapa
◦	wykresy bąbelkowe
`, `
◦	wykresy liniowe (zwykłe i warstwowe)
◦	wykresy punktowe
◦	wykresy słupkowe
◦	wykresy pierścieniowe
◦	wykres radarowy
◦	wykres sieć rybacka
`], 0), new LebiedzQuestion(`
Jaka metoda umożliwia przeglądanie wielkiej ilości danych tabelarycznych?
`,
      [`
Table Lens
`, `
Kwantyzacja
`, `
Dyfuzja Floyda-Steinberga
`, `
Antyaliasing
`], 0), new LebiedzQuestion(`
Porządkowanie danych pozwala dobrze ukazywać zależności w...
`,
      [`
wykresie typu szachownicy
`, `
wykresie punktowym
`, `
typu mapa
`, `
sieci rybackiej
`], 0), new LebiedzQuestion(`
wykres liniowy
`,
      [`
x->y
`, `
x->y^2
`, `
x^2->y
`, `
x^2->y^m, m>1
`], 0), new LebiedzQuestion(`
Dlugosc odcinka, kat nachylenia srednich, tip to kolejne wymiary
`,
      [`
Patyczaki
`, `
Hiperpudlo
`, `
buzki Chernoffa
`, `
wielowymiarowe ikony
`], 0), new LebiedzQuestion(`
Buzki, kogo?
`,
      [`
Chernoffa
`, `
Mira
`, `
Playfaira
`, `
Snowa
`], 0), new LebiedzQuestion(`
Co może przedstawiać reprezentacja wg położenia geograficznego
`,
      [`
mapę polityczna, liczność populacji i PKB
`, `
śmiertelnośc ludzi, zyjący z HIV/AIDS i wydatki na zdrowie
`, `
zużycie energii i emisje gazów cieplarnianych
`, `
Wszystkie odpowiedzi są poprawne
`], 0), new LebiedzQuestion(`
Wyróznik danych wymagający ostrożnosci i uzywany w celach ostrzegawczych
`,
      [`
Kolor
`, `
MIS
`, `
MOS
`, `
Skala
`], 0), new LebiedzQuestion(`
Do czego służy oprogramowanie Seesoft?
`,
      [`
Ukazywania edycji kodu w czasie
`, `
Reprezentacji głosowej figur geometrycznych
`, `
Wspomagania osób niedowidzących
`, `
Analizowania najczęściej wykorzystywanego oprogramowania
`], 0), new LebiedzQuestion(`
Na czym polega przetwarzanie wybiorcze?
`,
      [`
Na podniesieniu wartswy zainteresowania, obizenie pozostalych warstw i obrazowaniu przekrojów
`, `
Tylko przekroj
`, `
Obnizenie poziomu zainteresowania, brak wyszczegolnienia waznych warstw
`, `
Prezentacja dokumentow na plaszczyznie
`], 0), new LebiedzQuestion(`
Na czym polega przetwarzanie dynamiczne automatyczne?
`,
      [`
animacji wedlug parametrów
`, `
zmianie parametrów okreslających zależnosci
`, `
penetracji odbytu lebiedzia kijem baseballowym
`, `
nie wiem
`], 0), new LebiedzQuestion(`
Na czym polega przetwarzanie dynamiczne ręczne?
`,
      [`
zmianie parametrów okreslających zależnosci
`, `
animacji wedlug parametrów
`, `
tak
`, `
nie
`], 0), new LebiedzQuestion(`
Co umozliwia wizualizacje ogromonej liczby danych tabelarycznych?
`,
      [`
Table Lens
`, `
LaSens Table
`, `
Szachownica
`, `
Kwantyzacja
`], 0), new LebiedzQuestion(`
Wykres kluczy to
`,
      [`
Wykres Kagi
`, `
Som
`, `
Diagram Gantta
`, `
Kartogram
`], 0), new LebiedzQuestion(`
Skalowanie wielowymiarowe
`,
      [`
Rozmieszczenie podobnych rzeczy blizej siebie
`, `
Przerzucenie wymiaru na kilka
`, `
Rozdrobnienie obrazu
`, `
Wyszczegolowienie waznych informacji
`], 0), new LebiedzQuestion(`
Generator fali sinusoidalnej, ktora podajemy obrobce celem zmiany brzmienia
`,
      [`
Synteza subtraktywna
`, `
Synteza addytywna
`, `
Synteza FM
`, `
Sampling
`], 0), new LebiedzQuestion(`
Ksztaltujemy widmo, aby uzyskac konkretne brzmienie
`,
      [`
Synteza addytywna
`, `
Synteza substraktywna
`, `
Sampling
`, `
Modelowanie matematyczne
`], 0), new LebiedzQuestion(`
Synteza bazująca na równaniach różniczkowych
`,
      [`
metoda matematyczna
`, `
Synteza substraktywna
`, `
Synteza FM
`, `
metoda analityczna
`], 0), new LebiedzQuestion(`
Synteza w której wykorzystujemy bazę próbek
`,
      [`
Sampling
`, `
Synteza substraktywna
`, `
Synteza addytywna
`, `
metoda matematyczna
`], 0), new LebiedzQuestion(`
Wykorzystujemy modulacje czestotliwosci, uzalezniamy czestotliwosc od kolejnej funkcji
`,
      [`
Synteza FM
`, `
Synteza substraktywna
`, `
Synteza addytywna
`, `
Sampling
`], 0), new LebiedzQuestion(`
bezpośrednie tłumaczenie układu pikseli do postaci dźwięku to
`,
      [`
Smartsight
`, `
SVPL
`, `
CAITLIN
`, `
SOM
`], 0), new LebiedzQuestion(`
Przykładem sonifikacji w programowaniu nie jest
`,
      [`
SOM
`, `
SVPL
`, `
CAITLIN
`, `
sortowanie bąbelkowe wizualizowane dźwiękiem
`], 0), new LebiedzQuestion(`
konkretny dzwiek, jako wiadomosc
`,
      [`
Ikony dzwiekowe - "auditory icons"
`, `
Earcons
`, `
Audyfikacja
`, `
Mapowanie parametrow
`], 0), new LebiedzQuestion(`
Bezposrednie odwzorowanie danych numerycznych
`,
      [`
Audyfikacja
`, `
Ikony dzwiekowe - "auditory icons"
`, `
Earcons
`, `
Mapowanie parametrow
`], 0), new LebiedzQuestion(`
wykresy liniowe
`,
      [`
x->y
`, `
x^2->y
`, `
x^2->y^m
`, `
x^n->y^m, m>=1
`], 0), new LebiedzQuestion(`
wykresy liniowe
`,
      [`
x->y^m
`, `
x^2->y
`, `
x^2->y^m
`, `
x^n->y^m, m>=1
`], 0), new LebiedzQuestion(`
punktowe
`,
      [`
x->y
`, `
x^2->y
`, `
x^2->y^m
`, `
x^n->y^m, m>=1
`], 0), new LebiedzQuestion(`
które nie opisuje słupkowych
`,
      [`
x^n->y^m, m>=1
`, `
x^2->y
`, `
x->y
`, `
x->y^m
`], 0), new LebiedzQuestion(`
które nie opisuje słupkowych
`,
      [`
x^2->y^m
`, `
x^2->y
`, `
x->y
`, `
x->y^m
`], 0), new LebiedzQuestion(`
kolowe
`,
      [`
X->Y
`, `
X->Y^m
`, `
X^2->Y
`, `
X^2->Y^m
`], 0), new LebiedzQuestion(`
wykres pierscieniowy
`,
      [`
X->Y^m
`, `
X->Y
`, `
X^2->Y
`, `
X^2->Y^m
`], 0), new LebiedzQuestion(`
typu mapa
`,
      [`
X^2->Y
`, `
X->Y^2
`, `
X->Y
`, `
X^m->Y^n, n=>1
`], 0), new LebiedzQuestion(`
typu mapa
`,
      [`
X^2->Y^m
`, `
X->Y^2
`, `
X->Y
`, `
X^m->Y^n, n=>1
`], 0), new LebiedzQuestion(`
radarowe
`,
      [`
X->Y^m
`, `
X^2->Y^m
`, `
X->Y
`, `
X^m->Y^n, n=>1
`], 0), new LebiedzQuestion(`
Sieć rybacka (odwzorowanie):
`,
      [`
X -> Y^m , m>1
`, `
X^2 -> Y^m, m>1
`, `
X^n -> Y^m, n>1, m=>1
`, `
X->Y
`], 0), new LebiedzQuestion(`
sieć rybacka
`,
      [`
X->Y^m
`, `
X^2->Y^m
`, `
X->Y
`, `
X^m->Y^n, n=>1
`], 0), new LebiedzQuestion(`
powierzchniowe
`,
      [`
X^2->Y
`, `
X->Y
`, `
X->Y^m
`, `
X^n->Y^m, m => 1
`], 0), new LebiedzQuestion(`
powierzchniowe
`,
      [`
X^2->Y^m
`, `
X->Y
`, `
X^n->Y^m, m => 1
`, `
X->Y^m
`], 0), new LebiedzQuestion(`
babelkowe
`,
      [`
X^2->Y
`, `
X->Y
`, `
X^n->Y^m, m => 1
`, `
X->Y^m
`], 0), new LebiedzQuestion(`
babelkowe
`,
      [`
X^2->Y^m
`, `
X->Y
`, `
X^n->Y^m, m => 1
`, `
X->Y^m
`], 0), new LebiedzQuestion(`
typu "mapa"
`,
      [`
>X^2->Y
`, `
X->Y
`, `
X^n->Y^m, m => 1
`, `
X->Y^m
`], 0), new LebiedzQuestion(`
animacja jednego wymiaru
`,
      [`
X^n->Y^m, m => 1
`, `
X->Y
`, `
X^2->Y
`, `
X->Y^m
`], 0), new LebiedzQuestion(`
przekroje jednego wymiaru
`,
      [`
X^n->Y^m, m => 1
`, `
X->Y
`, `
X^2->Y
`, `
X->Y^m
`], 0), new LebiedzQuestion(`
Przykładem przeglądania jednowymiarowego sa?
`,
      [`
Listy
`, `
Mapy dokumentów
`, `
nie wiem
`, `
dupa debug driven development
`], 0), new LebiedzQuestion(`
Przykładem przeglądania dwuwymiarowego sa?
`,
      [`
Mapy dokumentow
`, `
Listy
`, `
???
`, `
chuj wie
`], 0), new LebiedzQuestion(`
Wizualizacje stosujemy w celu?
`,
      [`
Lepszego zrozumienia informacji
`, `
wyszukiwania trendów i zależności
`, `
w celu zwiekszenia wydajnosci i doszukiwania sie zwiazkow ktore nornmalnie nie bylyby widoczne
`, `
Wszystkie odpowiedzi sa poprawne
`], 0), new LebiedzQuestion(`
Jaka jest poprawna kolejność działania algorytmu WEBSOM?
`,
      [`
Utworzenie słownika/Określenie każdego dokumentu wektorem/Formowanie mapy dokumentów
`, `
Określenie każdego dokumentu wektorem/Utworzenie słownika/Formowanie mapy dokumentów
`, `
Utworzenie słownika/Formowanie mapy dokumentów/Określenie każdego dokumentu wektorem
`, `
Określenie każdego dokumentu wektorem/Formowanie mapy dokumentów/Utworzenie słownika
`], 0), new LebiedzQuestion(`
Rozwiń skrót SOM
`,
      [`
self-organizing map
`, `
single object management
`, `
self-oriented map
`, `
self-organizing matrix
`], 0), new LebiedzQuestion(`
Twórca algorytmu SOM
`,
      [`
Teuvo Kohonen
`, `
Marek Kubale
`, `
Edward Tufte
`, `
Reingold-Tilford
`], 0), new LebiedzQuestion(`
Jaka jest poprawna kolejność działania algorytmu SOM?
`,
      [`
Inicjalizacja mapy/losowy wybor probki/wyszukiwanie najblizszego sasiada/przeskalowanie sasiadow
`, `
Losowy wybor probki/Wyszukiwanie najblizszego sasiada/Przeskalowanie sasiadow/Inicjalizacja mapy
`, `
Inicjalizacja mapy/wyszukiwanie najblizszego sasiada/losowy wybor probkiprze/skalowanie sasiadow
`, `
Inicjalizacja mapy/przeskalowanie sasiadow/losowy wybor probki/wyszukiwanie najblizszego sasiada
`], 0), new LebiedzQuestion(`
Co oznacza skrót MIS
`,
      [`
months in service
`, `
management information system
`, `
mounting interface standard
`, `
minimally isostope stage
`], 0), new LebiedzQuestion(`
Co oznacza skrót MOS
`,
      [`
months in production
`, `
mean opinion score
`, `
metal oxide semiconductor
`, `
microsoft office specialist
`], 0), new LebiedzQuestion(`
węzły i gałęzie sa metodą?
`,
      [`
wizualizacji hierarchi
`, `
skalowania wielowymiarowego
`, `
przeglądania jednowymiarowego
`, `
przeglądanie dwuwymiarowego
`], 0), new LebiedzQuestion(`
wypełnienia sa metodą?
`,
      [`
wizualizacji hierarchi
`, `
skalowania wielowymiarowego
`, `
przyblizenia geometrycznego
`, `
przyblizenia semantycznego
`], 0), new LebiedzQuestion(`
wizualizacja ortogonalna jest metodą?
`,
      [`
wizualizacji hierarchi
`, `
drzewa sopli
`, `
radialna
`, `
promieni słonecznych
`], 0), new LebiedzQuestion(`
Twórcami skalowania klasycznego w skalowaniu wielowymiarowym są?
`,
      [`
Torgersona-Gowera
`, `
Reingolda-Tilforda
`, `
Kentucky-Fried-Chickena
`, `
Wetherella-Shannona
`], 0), new LebiedzQuestion(`
Podaj przykład wizualizacji wykresu prównawczego
`,
      [`
wykres Kagi
`, `
kartogramy
`, `
diagram Gantta
`, `
cyklogramy
`], 0), new LebiedzQuestion(`
Rodzajem syntezy dźwięku nie jest
`,
      [`
metoda audyfikacji
`, `
metoda addytywna i subtraktywna
`, `
metoda matematyczna i sampling
`, `
metoda FM
`], 0), new LebiedzQuestion(`
Który z poniżych nie jest rodzajem słyszenia
`,
      [`
słyszenie parametryczne
`, `
słyszenie ukierunkowane na źródło
`, `
słyszenie muzyczne
`, `
słyszane analitycznie
`], 0), new LebiedzQuestion(`
Podaj przykład wizualizacji mapy wystepowania
`,
      [`
kartogramy
`, `
wykres kluczy
`, `
diagram Gantta
`, `
cyklogramy
`], 0), new LebiedzQuestion(`
Podaj przykład wizualizacji wykresu wypełnienia
`,
      [`
diagram Gantta
`, `
diagram sieciowy
`, `
diagram przepływu danych
`, `
wykres Kagi
`], 0), new LebiedzQuestion(`
Podaj przykład wizualizacji wykresu wypełnienia
`,
      [`
diagram łańcucha zdarzeń
`, `
diagram sieciowy
`, `
diagram przepływu danych
`, `
kartogramy
`], 0), new LebiedzQuestion(`
Podaj przykład wizualizacji schematów blokowych
`,
      [`
diagram przepływu danych
`, `
wykres kluczy
`, `
diagram Gantta
`, `
cyklogramy
`], 0), new LebiedzQuestion(`
Podaj przykład wizualizacji shcematów blokowych
`,
      [`
diagram sieciowy
`, `
wykres Kagi
`, `
diagram Gantta
`, `
cyklogramy
`], 0), new LebiedzQuestion(`
Czym jest diagram Gantta
`,
      [`
graficzną reprezentacją harmonogramu stosowaną w zarządzaniu projektowym
`, `
graficzną reprezentacją sytuacji giełdowych
`, `
graficzną reprezentacją wystepowania konkretnych danych w regionie
`, `
graficzną reprezentacja przepływu danych między operacjami procesu
`], 0), new LebiedzQuestion(`
Za co odpowiedzialny jest wykres Kagi
`,
      [`
Inaczej wykres kluczy, informuje o zmianach sytuacji giełdowych jin-jang - kupno, jang-jin - sprzedaż
`, `
Inaczej wykres kluczy, informuje o zmianach sytuacji giełdowych jin-jang - sprzedaż, jang-jin - kupno
`, `
Stosowanym w zarządzaniu projektowym, informującym o procentowej realizacji zadań
`, `
Reprezentacje graficzną projektu w czasie za pomocą grafu skierowanego.
`], 0), new LebiedzQuestion(`
Dowolnie zacieniowany prostokąt w Diagramie Gantta reprezentuje
`,
      [`
zadanie krytyczne
`, `
zadanie niektrytyczne
`, `
podsumowanie
`, `
kamień milowy
`], 0), new LebiedzQuestion(`
prostokat bez wypełnienia w Diagramie Gantta reprezentuje
`,
      [`
zadanie niektrytyczne
`, `
zadanie ktrytyczne
`, `
podsumowanie
`, `
kamień milowy
`], 0), new LebiedzQuestion(`
wypełniony prostokąt z ząbkami na końcach w Diagramie Gantta reprezentuje
`,
      [`
podsumowanie
`, `
zadanie ktrytyczne
`, `
zadanie niektrytyczne
`, `
kamień milowy
`], 0), new LebiedzQuestion(`
wypełniony romb w Diagramie Gantta reprezentuje
`,
      [`
kamień milowy
`, `
zadanie ktrytyczne
`, `
zadanie niektrytyczne
`, `
podsumowanie
`], 0), new LebiedzQuestion(`
Zadanie krytyczne w diagramach Gantta to:
`,
      [`
* dowolnie zacieniowany prostokąt
* zadanie istotne i niepomijalne
`, `
* prostokąt bez wypełnienia
* zadanie mniej istotne nie warunkuje jego powodzenia
`, `
* prostokąt wypełniony z ząbkami na końcu
* spina zadania krytyczne i niekrytyczne
* jest to oznaczenie pewnego etapu projektu
* zazwyczaj występuje po nim kamień milowy
`, `
* wypełniony romb
* sygnał zakończenia pewnej fazy zadania
* sygnalizuje przejście do kolejnego etapu
`], 0), new LebiedzQuestion(`
Zadanie niekrytyczne w diagramach Gantta to:
`,
      [`
* prostokąt bez wypełnienia
* zadanie mniej istotne nie warunkuje jego powodzenia
`, `
* dowolnie zacieniowany prostokąt
* zadanie istotne i niepomijalne
`, `
* prostokąt wypełniony z ząbkami na końcu
* spina zadania krytyczne i niekrytyczne
* jest to oznaczenie pewnego etapu projektu
* zazwyczaj występuje po nim kamień milowy
`, `
* wypełniony romb
* sygnał zakończenia pewnej fazy zadania
* sygnalizuje przejście do kolejnego etapu
`], 0), new LebiedzQuestion(`
Podsumowanie w diagramach Gantta to:
`,
      [`
* prostokąt wypełniony z ząbkami na końcu
* spina zadania krytyczne i niekrytyczne
* jest to oznaczenie pewnego etapu projektu
* zazwyczaj występuje po nim kamień milowy
`, `
* prostokąt bez wypełnienia
* zadanie mniej istotne nie warunkuje jego powodzenia
`, `
* wypełniony romb
* sygnał zakończenia pewnej fazy zadania
* sygnalizuje przejście do kolejnego etapu
`, `
* dowolnie zacieniowany prostokąt
* zadanie istotne i niepomijalne
`], 0), new LebiedzQuestion(`
Kamień milowy w diagramach Gantta to:
`,
      [`
* wypełniony romb
* sygnał zakończenia pewnej fazy zadania
* sygnalizuje przejście do kolejnego etapu
`, `
* prostokąt bez wypełnienia
* zadanie mniej istotne nie warunkuje jego powodzenia
`, `
* prostokąt wypełniony z ząbkami na końcu
* spina zadania krytyczne i niekrytyczne
* jest to oznaczenie pewnego etapu projektu
* zazwyczaj występuje po nim kamień milowy
`, `
* dowolnie zacieniowany prostokąt
* zadanie istotne i niepomijalne
`], 0), new LebiedzQuestion(`
Na co pozwala diagram Gantta
`,
      [`
Pozwala na określanie przebiegu etapów i informowanie w formie procentowej realizacji danych zadań
`, `
Reprezentacje po przez zaznaczenie kolorem lub deseniem wielkości danych związanych z obszarem
`, `
Ukazywanie przepływu danych między poszczególnymi operacjami procesu
`, `
Pokazywanie relacji między zdarzeniami i zadaniami oraz wpływu poszczególnych zdarzeń na siebie
`], 0), new LebiedzQuestion(`
Na co pozwalaja kartogramy
`,
      [`
Reprezentacje po przez zaznaczenie kolorem lub deseniem wielkości danych związanych z obszarem
`, `
Graficzne przedstawienie projektu w czasie
`, `
Pokazywanie relacji między zdarzeniami i zadaniami oraz wpływu poszczególnych zdarzeń na siebie
`, `
Ukazywanie przepływu danych między poszczególnymi operacjami procesu
`], 0), new LebiedzQuestion(`
Na co pozwala diagram łańcucha zdarzeń
`,
      [`
Pokazywanie relacji między zdarzeniami i zadaniami oraz wpływu poszczególnych zdarzeń na siebie
`, `
Pozwala na określanie przebiegu etapów i informowanie w formie procentowej realizacji danych zadań
`, `
Reprezentacje po przez zaznaczenie kolorem lub deseniem wielkości danych związanych z obszarem
`, `
Ukazywanie przepływu danych między poszczególnymi operacjami procesu
`], 0), new LebiedzQuestion(`
Na co pozwala diagram przepływu danych
`,
      [`
Ukazywanie przepływu danych między poszczególnymi operacjami procesu
`, `
Pokazywanie relacji między zdarzeniami i zadaniami oraz wpływu poszczególnych zdarzeń na siebie
`, `
Graficzne przedstawienie projektu w czasie
`, `
Reprezentacje po przez zaznaczenie kolorem lub deseniem wielkości danych związanych z obszarem
`], 0), new LebiedzQuestion(`
Na co pozwala diagram sieciowy
`,
      [`
Graficzne przedstawienie projektu w czasie
`, `
Pokazywanie relacji między zdarzeniami i zadaniami oraz wpływu poszczególnych zdarzeń na siebie
`, `
Pozwala na określanie przebiegu etapów i informowanie w formie procentowej realizacji danych zadań
`, `
Reprezentacje po przez zaznaczenie kolorem lub deseniem wielkości danych związanych z obszarem
`], 0), new LebiedzQuestion(`
Elementy składowe takie jak: aktorzy(prostokąty), procesy(prostokąty z zaokraglonymi rogami), magazyny danych(linie), przepływy(strzalki) są elementami diagramu
`,
      [`
przepływu danych
`, `
sieciowego
`, `
łańcucha zdarzeń
`, `
Gantta
`], 0), new LebiedzQuestion(`
Co w diagramie sieciowym reprezentują wierzchołki i łuki?
`,
      [`
wierzchołki - zadania składające się na projekt
łuki - ukierunkowane powiązania pomiędzy zadaniami
`, `
wierzchołki - zadania składające się na projekt
łuki - nieukierunkowane powiązania pomiędzy zadaniam
`, `
wierzchołki - osoby wchodzące w skład grupy projektowej
łuki - powiązania między tymi osobami
`, `
wierzchołki - punkty dostępu w sieci
łuki - koszt przebycia drogi pomiędzy punktami dostępu
`], 0), new LebiedzQuestion(`
Jak definiujemy głośność?
`,
      [`
amplituda sygnału, może być zakłócona przez środowisko
`, `
wrażenie słuchowe spowodowane falami akustycznymi 16Hz - 16KHz
`, `
dźwięk jako suma sygnałów o róźnych częstotliwościach
`, `
trudna do zdefiniowania, bliska strukturze widmowej
`], 0), new LebiedzQuestion(`
Czym jest Sonifikacja
`,
      [`
przekształcanie danych do postaci relacji postrzeganych w sygnale akustycznym (wizualizacja akustyczna)
`, `
Analizą danych sejsmicznych
`, `
Analizą danych statycznych, przeszukiwanie separowanych klas
`, `
Reprezentacją głosową figur
`], 0), new LebiedzQuestion(`
Do typów sonifikacji nie zaliczamy
`,
      [`
*earcons - dźwięki abstraktcyjne
*ikony dźwiękowe - sygnały dźwiękowe z życia codziennego
`, `
FM - modulacja częstotliwiściowa, uzależniamy modulacje od poprzedniej funkcji
`, `
mapowanie parametrów - zmiana max 20 parametrów
`, `
audyfikacja - próbki sygnału przekształcone w falę dźwiękową
`], 0), new LebiedzQuestion(`
Wymień rodzaje wizualizacji(podział ze względu na formę)
`,
      [`
* wykresy porównawcze(statystyczne)
* mapy występowania
* wykresy wypełnienia
* schematy blokowe
`, `
* proste
* złożone
`, `
wykresy punktowe
wykresy liniowe
* zwykłe i warstwowe
wykresy słupkowe
* grupowane i skumulowane
wykresy pierścieniowe
wykresy przestrzenne
*powierzchniowe i słupkowe
`, `
dla małych różnic:
* punktowe, liniowe
* słupkowe pionowe i poziome
* biegunowe(pajęczyna)
* kołowe
dla dużych różnic:
* powierzchniowe
* obrazkowe(symbole)
dla ogromnych różnic:
* przestrzenne

`], 0), new LebiedzQuestion(`
Wymień rodzaje wykresów(podział ze względu na zależności)
`,
      [`
* proste
* złożone
`, `
* wykresy porównawcze(statystyczne)
* mapy występowania
* wykresy wypełnienia
* schematy blokowe
`, `
dla małych różnic:
* punktowe, liniowe
* słupkowe pionowe i poziome
* biegunowe(pajęczyna)
* kołowe
dla dużych różnic:
* powierzchniowe
* obrazkowe(symbole)
dla ogromnych różnic:
* przestrzenne
`, `
wykresy punktowe
wykresy liniowe
* zwykłe i warstwowe
wykresy słupkowe
* grupowane i skumulowane
wykresy pierścieniowe
wykresy przestrzenne
*powierzchniowe i słupkowe
`], 0), new LebiedzQuestion(`
Wymień wykresy porównawcze proste
`,
      [`
dla małych różnic:
* punktowe, liniowe
* słupkowe pionowe i poziome
* biegunowe(pajęczyna)
* kołowe
dla dużych różnic:
* powierzchniowe
* obrazkowe(symbole)
dla ogromnych różnic:
* przestrzenne
`, `
wykresy punktowe
wykresy liniowe
* zwykłe i warstwowe
wykresy słupkowe
* grupowane i skumulowane
wykresy pierścieniowe
wykresy przestrzenne
*powierzchniowe i słupkowe
`, `
* wykresy porównawcze(statystyczne)
* mapy występowania
* wykresy wypełnienia
* schematy blokowe
`, `
* proste
* złożone
`], 0), new LebiedzQuestion(`
Wymień wykresy porównawcze złożone
`,
      [`
wykresy punktowe
wykresy liniowe
* zwykłe i warstwowe
wykresy słupkowe
* grupowane i skumulowane
wykresy pierścieniowe
wykresy przestrzenne
*powierzchniowe i słupkowe
`, `
dla małych różnic:
* punktowe, liniowe
* słupkowe pionowe i poziome
* biegunowe(pajęczyna)
* kołowe
dla dużych różnic:
* powierzchniowe
* obrazkowe(symbole)
dla ogromnych różnic:
* przestrzenne
`, `
* wykresy porównawcze(statystyczne)
* mapy występowania
* wykresy wypełnienia
* schematy blokowe
`, `
* proste
* złożone
`], 0), new LebiedzQuestion(`
Czym jest Sonifikacja zorientowana na model
`,
      [`
każda sytuacja daje jakiś skutek dźwiękowy (tzw. dźwięk zwrotny), analiza danych statycznych, przeszukiwanie separowanych klas
`, `
Analizą danych sejsmicznych
`, `
przekształcanie danych do postaci relacji postrzeganych w sygnale akustycznym (wizualizacja akustyczna)
`, `
Reprezentacją głosową figur
`], 0), new LebiedzQuestion(`
Wymień rodzaje metody węzły-gałęzie metody wizualizacji hierarchii
`,
      [`
metoda warstwowa
dendrogram
metoda katalogowa
metoda radialna
H-drzewo
`, `
metoda drzewa sopli
metoda radialna
metoda promieni słonecznych
drzewmapa
`, `
metoda gmll
`, `
metoda prowadzacych wkurwiajacych
`], 0), new LebiedzQuestion(`
Wymień rodzaje metody wypełnienia  wizualizacji hierarchii
`,
      [`
metoda drzewa sopli
metoda radialna
metoda promieni słonecznych
drzewmapa
`, `
metoda warstwowa
dendrogram
metoda katalogowa
metoda radialna
H-drzewo
`, `
nie
`, `
dajcie kolejne pytanie bo to jest zjebane
`], 0), new LebiedzQuestion(`
Jak definiujemy dźwięk
`,
      [`
wrażenie słuchowe spowodowane falami akustycznymi 16Hz - 16KHz
`, `
amplituda sygnału, może być zakłócona przez środowisko
`, `
dźwięk jako suma sygnałów o róźnych częstotliwościach
`, `
trudna do zdefiniowania, bliska strukturze widmowej
`], 0), new LebiedzQuestion(`
Jak definiujemy widmo?
`,
      [`
dźwięk jako suma sygnałów o róźnych częstotliwościach
`, `
wrażenie słuchowe spowodowane falami akustycznymi 16Hz - 16KHz
`, `
amplituda sygnału, może być zakłócona przez środowisko
`, `
trudna do zdefiniowania, bliska strukturze widmowej
`], 0), new LebiedzQuestion(`
Jak definiujemy barwę dźwięku?
`,
      [`
trudna do zdefiniowania, bliska strukturze widmowej
`, `
wrażenie słuchowe spowodowane falami akustycznymi 16Hz - 16KHz
`, `
dźwięk jako suma sygnałów o róźnych częstotliwościach
`, `
amplituda sygnału, może być zakłócona przez środowisko
`], 0), new LebiedzQuestion(`
Wymień rodzaje map wystepowania
`,
      [`
mapy kropkowe i bąbelkowe
kartogramy
kartodiagramy
mapy izarytmiczne i zasięgu
`, `
cyklogramy
harmonogramy
`, `
schematy sterowania
schematy organizacyjne
schematy powiązan
diagramy przepływu
`, `
brak
`], 0), new LebiedzQuestion(`
Wymień rodzaj wykresów wypełnienia
`,
      [`
cyklogramy
harmonogramy
`, `
mapy kropkowe i bąbelkowe
kartogramy
kartodiagramy
mapy izarytmiczne i zasięgu
`, `
schematy sterowania
schematy organizacyjne
schematy powiązan
diagramy przepływu
`, `
pentagramy
`], 0), new LebiedzQuestion(`
Wymień rodzaje schematów blokowych
`,
      [`
schematy sterowania
schematy organizacyjne
schematy powiązan
diagramy przepływu
`, `
cyklogramy
harmonogramy
`, `
mapy kropkowe i bąbelkowe
kartogramy
kartodiagramy
mapy izarytmiczne i zasięgu
`, `
dupa
`], 0)
  ];

  constructor() {
  }

  public getRandomQuestions(amount: number): LebiedzQuestion[] {
    let ret: LebiedzQuestion[] = [];
    let tmp: LebiedzQuestion[] = [];
    for (let q of this.questions) {
      tmp.push(q);
    }
    for (let i = 0; i < amount; i++) {
      let ind = Math.floor(Math.random() * tmp.length);
      ret.push(tmp[ind]);
      tmp.splice(ind, 1);
    }
    return ret;
  }

}
