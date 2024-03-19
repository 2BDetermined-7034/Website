@echo off
powershell.exe -nologo -noprofile -command "& { Compress-Archive -Path ./build -DestinationPath build.zip -Force }"