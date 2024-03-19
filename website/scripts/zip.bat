@echo off
powershell.exe -nologo -noprofile -command "& { Get-ChildItem -Path ./build | Compress-Archive -DestinationPath build.zip -Force }"