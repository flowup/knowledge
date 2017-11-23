# Intern Task: Komponenta s miniaturou
Vytvoř komponentu obsahující miniaturu obrázku s popiskem.

## Vzhled a chování
Měly by být víceméně evidentní z [videa](./intern-task-thumbnail-component.mkv). Highlights:
- custom font v popisku
- useknutí přetékajícího popisku a zakončení elipsou
- mírná plynulá CCV rotace komponenty po najetí kurzorem
- zvětšení stínu pod komponentou po výběru komponenty stiskem LMB nebo tabulátorem
- plynulé zobrazení náhledu s poloprůhledným tmavým pozadím po kliknutí na thumbnail
- skrytí náhledu po kliknutí na křížek vpravo nahoře
- zobrazení tooltipu (stačí systémový) po najetí na křížek
- vycentrování obrázku (stačí horizontální centrování + fixní vertikální odsazení)

Méně evidentní požadavky:
- fixní šířka komponenty
- vhodná maximální šířka miniatury i obrázku v náhledu
- více instancí komponenty se řadí **vedle** sebe

## Inputy
1. URL obrázku
2. text popisku -- není-li specifikovaný, použije se URL obrázku
3. volba, zda má být popisek **pod**, či **nad** obrázkem -- není-li specifikovaná, použije se 1 z hodnot jako výchozí

## Odevzdání
Na vývoj komponenty si vytvoř nový branch `feature/thumbnail` a dodržuj _git-flow_ styl commit
messages.

## Další poznámky
- Volba vhodných názvů identifikátorů (komponenta, inputy) a CSS tříd je součástí úkolu;
- to stejné platí pro volbu vhodných datových typů inputů (`string`, `number`, `boolean`, ...)

## Nápověda
- `tabindex` (HTML); `:focus` (CSS); `transform` (CSS); `position: fixed` (CSS)
- http://fonts.google.com
- https://github.com/flowup/knowledge/wiki/GIT
