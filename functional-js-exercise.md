# Cvičení: Functional JavaScript

Cílem každé úlohy je napsat **arrow funkci s implicitním návratem** s popsanými vstupními argumenty a výstupní návratovou hodnotou.

**Příklad:**

- **Vstup:** neprázdné pole číselných hodnot (`number[]`).
- **Výstup:** aritmetický průměr hodnot (`number`).
- **Řešení:** `values => values.reduce((acc, value) => acc + value) / values.length`

---

1. - **Vstup:** neprázdné pole číselných hodnot (`number[]`)
   - **Výstup:** [geometrický průměr](https://cs.wikipedia.org/wiki/Geometrick%C3%BD_pr%C5%AFm%C4%9Br) hodnot (`number`).

---

2. - **Vstup:** 2 libovolné objekty (`{[key: string]: any}, {[key: string]: any}`)
   - **Výstup:** Zda objekty mají shodné sady vlastních klíčů (`boolean`).

---

3. - **Vstup:** 2 libovolné objekty se shodnými sadami klíčů (`SomeModel, SomeModel`)
   - **Výstup:** Zda shodně pojmenované properties mají stejnou hodnotu (`boolean`).

---

4. - **Vstup:** pole *událostí*, tj. objektů obsahujících počáteční a konečný [timestamp](https://en.wikipedia.org/wiki/Unix_time) (`{start: number, end: number}[]`)
   - **Výstup:** pole délek trvání jednotlivých *událostí* v sekundách `number[]`

---

5. - **Vstup:** objekt mapující CSS třídy na pravdivostní hodnoty (`{[className: string]: boolean}`)
   - **Výstup:** string složený z CSS tříd mapovaných na `true` (v libovolném pořadí) konkatenovaných přes 1 mezeru (`string`)

---

6. - **Vstup:** neprázdné pole řádků tabulky, tj. objektů mapujících názvy sloupců (shodné pro všechny řádky) na hodnoty buněk (`RowModel[]`)
   - **Výstup:** pole uspořádných n-tic (heterogenních polí), kde první n-tice obsahuje názvy sloupců tabulky a každá další *k+1*-tá n-tice obsahuje hodnoty buněk *k*-tého řádku v odpovídajícím pořadí (`any[][]`)
