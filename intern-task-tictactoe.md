# Vstupní task: Piškvorky

Implementuj deskovou hru [piškvorky](https://cs.wikipedia.org/wiki/Pi%C5%A1kvorky) pro 2 hráče v Angular.

## Popis hry

Viz https://cs.wikipedia.org/wiki/Pi%C5%A1kvorky.

## Funkční požadavky

- UI může být single-screen; mělo by obsahovat **alespoň**
  - omezenou mřížku políček pro křížky/kolečka (či jiné symboly identifikující hráče) o konstantní velikosti (např. 20x20);
  - textovou indikaci aktivního hráče / vítěze / remízy;
  - tlačítko *Reset*, které resetuje hru do stavu po inicializaci (nikdo není vítěz; mřížka je prázdná; na tahu je *křížek*).
- Křížky/kolečka se vkládají klikáním do prázdných políček mřížky; kontrola vítěství a přepnutí aktivního hráče probíhá automaticky.
- Rozšíření (např. volitelná velikost mřížky, volitelná délka vítězné řady, grafická indikace aktivního hráče, ...) jsou samozřejmě vítána.

## Implementační požadavky

- Projekt si vygeneruj pomocí [Angular CLI](https://cli.angular.io/).
- Herní stav a logiku řeš v rámci root komponenty (prozatím nemusíš používat servicy apod.).

## Zdroje

- https://angular.io/guide/quickstart
- https://angular.io/tutorial
- https://www.udemy.com/the-complete-guide-to-angular-2
