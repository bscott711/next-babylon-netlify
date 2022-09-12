@echo off
dir /b *.webp >origFiles.txt
for %%f in (*.webp) do (echo -frame %%f +0 >> inputArgs.txt)

echo -o output.webp >> inputArgs.txt & webpmux.exe inputArgs.txt
ffmpeg -framerate 12 -i image-in-%03d.webp output.webm
for /f %%i in (origFiles.txt) do del %%i
del inputArgs.txt && del origFiles.txt