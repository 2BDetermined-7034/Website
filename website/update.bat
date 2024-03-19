@echo off
setlocal
set SERVER=160.153.60.165
set FTP_USER=gitsftp@wlhsfrc.com
set PASSWORD=wlhsfrc7034!
set FILE_TO_UPLOAD=./build.zip
set SSH_USER=xwj7xv1ampya
set SSH_PASSWORD=g763TFjpnZJ5gZP

echo Updating git...
call ./scripts/UpdateGit.bat
echo Git updated.

echo Running build script...
call ./scripts/build.bat
echo Build script completed.

echo Running zip script...
call ./scripts/zip.bat
echo Zip script completed.

echo Uploading file to %SERVER%...
echo user %FTP_USER% %PASSWORD%> ftpcmd.dat
echo binary>> ftpcmd.dat
echo put %FILE_TO_UPLOAD%>> ftpcmd.dat
echo quit>> ftpcmd.dat
ftp -n -s:ftpcmd.dat %SERVER%
del ftpcmd.dat

echo File has been uploaded successfully.

echo SSH into the server and unzip the file...
plink.exe -ssh %SSH_USER%@%SERVER% -pw %SSH_PASSWORD% "unzip -oq build.zip -d /home/xwj7xv1ampya/public_html/"
echo Website is now updated... probably
exit