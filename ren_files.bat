@echo off
setlocal enabledelayedexpansion
set /A Counter=1
for /f %%i in (origFiles.txt) do (
    ren %%i !Counter!.webp
    set /A Counter+=1
)