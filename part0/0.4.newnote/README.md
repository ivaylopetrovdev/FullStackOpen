# 0.4: new note 
####Link to the diagram for the exercise

[Click here to open the diagram](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=CnRpdGxlIHVzZXIgY3JlYXRlcyBhIG5ldyBub3RlIG9uIHBhZ2UgJ25vdGVzJwoKABAGdmVyIGJyb3dzZXI6IApQAB0FaHR0cHM6Ly9mdWxsc3RhY2stZXhhbXBsZWFwcC5oZXJva3VhcHAuY29tLwBHBiBpcyBsb2FkZWQKQWxsIHJlbGF0ZWQgZmlsZXMgYXJlABYHIChDU1MvSlMvSlNPTikKZW5kAIEWBQB1FlVzZXIgZmlsbHMgdGhlIHRleHQgZmllbGQgZm9yAA4FADcFACIjY2xpY2tzIG9uICdTYXZlJyBidXR0b24AdQsAgXoHLT5zZXJ2ZXI6IEhUVFAgUE9TVCAAgWAsZXdfAIFLBQCCUAoASAgKTgCCfwhpcyBzdG9yZWQgaW4gCnRoZSBjb2xsZWN0aW9uIHdpdGggZGF0ZQphbmQAgw8IIGlzIHB1c2hlZCAKdG8gcmVsb2FkAIIPBXBhZwCBdQwAgTcGLS0-AINHCQCBQgVzdGF0dXMgY29kZSAzMDIAg2MWVGhlIHJlc3BvbnNlIGZvcmNlcyAAgg8IIABxBWRpcmVjdCB0bwCEOggAhEkGCigAgQsJAINGDACCPBZHRQCCIy5vdGVzAIFCFU1MLWNvZAAgSG1haW4uY3MAVxQAEgkAH0pqAE8ZanMAhwIUAIJ-CXN0YXJ0cyBleGVjdXRpbmcganMAggAGdGhhdCByZXF1ZXN0cyBKU09OIGRhdGEgZnJvbQCEfAcgAIJMUGRhdGEuanNvbgCEZBNOZXcgdXBkAId_BWxpc3Qgb2YAiH8FAIFBHgCBUgZlAIdpBmV2ZW50IGhhbmRsZXIAgVkIbmRlcnMARAYgdG8gZGlzcGxheQCGJwVzaG93AIgjBQBiFgCIYwg&s=modern-blue)

####Code is here:
(Just copy and paste the following)


title user creates a new note on page 'notes'

note over browser: 
Page 'https://fullstack-exampleapp.herokuapp.com/notes' is loaded
All related files are loaded (CSS/JS/JSON)
end note

note over browser: 
User fills the text field for the note
end note

note over browser: 
User clicks on 'Save' button
end note

browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
note over server: 
New note is stored in 
the collection with date
and browser is pushed 
to reload the page
end note

server-->browser: HTTP status code 302

note over browser: 
The response forces 
browser to redirect to 'notes' page 
(to reload)
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server-->browser: HTML-code

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: New updated list of notes

note over browser:
browser executes the event handler
that renders notes to display
and show the updated list of notes
end note
