# Dashboard

- `/`
  -statystyki dzisiejszych zamówien (zdalne i lokalne)
  -lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  -pola na login i haslo
  -button do zalogowania (link do dashboardu)
# Widok dostepności stolików

- `/tables`
  -wybór daty i godziny
  -tabela z lista rezerwacji oraz wydarzen
    -kazda kolumna = 1 stolik
    -kazdy wiersz = 30 minut
    -tabela ma przyominac widok tygodnia w kalendarzu Google, w kolumnach zamiast dni sa rozne stoliki
    -po kliknieciu rezerwacji lub eventu, przechodzimy na strone szczególow
- `/tables/booking/:id`
    -zawiera wszystkie info dot rezerwacji
    -umozliwia edycje i zapisanie zmian
- `/tables/booking/new`
    -analogicznie do powyzszych, ale bez poczatkowych info
- `/tables/events/new`
    -analogicznie do powyzszych
- `/tables/events/:id`
  -analogicznie do powyzszych, ale bez poczatkowych info
# Widok kelnera

- `/waiter`
    -tabela
      -w wierszach stoliki
      -w kolumnach rozne rodzaje info (status, czas od ostatniej aktywnosci)
      -w ostatniej kolumnie dostepne akcje dla danego stolika
- `/waiter/order/new`
  -numer stolika (edytowalny)
  -menu produktów
  -opcje wybranego produktu
  -zamowienie (zamowione produkty z opcjami i cena)
  -kwota zamowienia
- `/waiter/order/:id`
  -jak powyzsza
# Widok kuchni

-`/kitchen`
  -wyswietla liste zamowien w kolejnosci ich zlozenia
  -lista zawiera:
   -numer stolika(lub zamowienia zdalnego)
   -pelne info dot. zamowionych dan
  -na liscie musi byc mozliwosc oznaczenia zamowienia jako zrealizowane
