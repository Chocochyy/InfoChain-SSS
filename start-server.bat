@echo off
title InfoChain Mobile Web Server
cd /d "%~dp0"
echo Memulai InfoChain Mobile Server...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
