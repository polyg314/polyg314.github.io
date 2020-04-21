echo off
echo Starting SmartPAR Webserver
setlocal
set "CWD=%cd%"
start %CWD%\.\goahead/smartparwatchdog runWebUI
