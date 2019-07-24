# 0.5: spa 
####Link to the diagram for the exercise

[Click here to open the diagram](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgdXNlciBvcGVucyBwYWdlICdub3RlcycgaW4gU1BBCgpicm93c2VyLT5zZXJ2ZXI6IEhUVFAgR0VUIGh0dHBzOi8vZnVsbHN0YWNrLWV4YW1wbGVhcHAuaGVyb2t1YXBwLmNvbS9zcGEKADoGLS0-AEsHOiBIVE1MLWNvZGUAH0ZtYWluLmNzcwBXEwASCQCBBkguagBTFAASBwpub3RlIG92ZXIgAIFkCACCPwggc3RhcnRzIGV4ZWN1dGluZyBqcwCBfQZ0aGF0IHJlcXVlc3RzIEpTT04gZGF0YSBmcm9tIACCdgYgCmVuZCBub3RlAIJQR2RhdGEuanNvbgCDChNbeyBjb250ZW50OiAiSFRNTCBpcyBlYXN5IiwgZGF0ZTogIjIwMTktMDUtMjMiIH0sIC4uLl0AgV8dAIFvBmVzIHRoZSBldmVudCBoYW5kbGVyAIF2CG5kZXJzAIFdBXMgdG8gZGlzcGxheQCBbAsAgkcTb25jZQBNBQCFOgVmaW5pc2hlcyBsb2FkaW5nICh3aW5kb3cub25sb2FkKQpKUyBjb2RlIGlzIGNyZWEAgn8FdGhlICdvbnN1Ym1pdCcgZnVuY3Rpb24gZm9yAIEnBWZvcm0AgnMJ&s=modern-blue)

####Code is here:
(Just copy and paste the following)

title user opens page 'notes' in SPA

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
server-->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note

note over browser:
once the page finishes loading (window.onload)
JS code is creating the 'onsubmit' function for the form
end note
