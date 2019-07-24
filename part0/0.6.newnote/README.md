# 0.6: new note 
####Link to the diagram for the exercise

[Click here to open the diagram](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=CnRpdGxlIHVzZXIgY3JlYXRlcyBhIG5ldyBub3RlIG9uIHBhZ2UgJ25vdGVzJyBpbiBTUEEKCgAXBnZlciBicm93c2VyOiAKUAAkBWh0dHBzOi8vZnVsbHN0YWNrLWV4YW1wbGVhcHAuaGVyb2t1YXBwLmNvbS9zcGEnIGlzIGxvYWRlZApBbGwgcmVsYXRlZCBmaWxlcyBhcmUAFgcgKENTUy9KUy9KU09OKQplbmQAgRsFAHMWVXNlciBmaWxscyB0aGUgdGV4dCBmaWVsZCBmb3IADgUANwUAIiNjbGlja3Mgb24gJ1NhdmUnIGJ1dHRvbgBjHQoAggsHIGV4ZWN1dGUAgH8GZXZlbnQgaGFuZGxlcgp0aGF0IHJlbmRlcnMAgmQFcyB0byBkaXNwbGF5CmFuZCBzaG93AIE5BXVwZACCDQVsaXN0IG9mACgGAIF2CwCCeQctPnNlcnZlcjogSFRUUCBQT1NUIACCYCtuZXdfbm90ZV9zcGEgKHJlcS4gZGF0YSBpcyBKU09OIGNvbnRhaW5pbmc6AIQTBiYmIGRhdGUpAIN_CwB5CApOAIQ2CGlzIHN0b3JlZCBpbgCDBgVjb2xsZWN0aQCCNg0AgTMGLS0-AIRCCQCBPgVzdGF0dXMgY29kZSAyMDEgQwCFGQVkCg&s=modern-blue)

####Code is here:
(Just copy and paste the following)

title user creates a new note on page 'notes' in SPA

note over browser: 
Page 'https://fullstack-exampleapp.herokuapp.com/spa' is loaded
All related files are loaded (CSS/JS/JSON)
end note

note over browser: 
User fills the text field for the note
end note

note over browser: 
User clicks on 'Save' button
end note

note over browser:
browser executes the event handler
that renders notes to display
and show the updated list of notes
end note

browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa (req. data is JSON containing: note && date)
note over server: 
New note is stored in the collection
end note

server-->browser: HTTP status code 201 Created

