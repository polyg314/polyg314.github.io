set local 
set port=COM9
.\goahead\goahead --auth goahead/auth.txt --route goahead/route.txt --ip %port% . 'http://*:8088' 
