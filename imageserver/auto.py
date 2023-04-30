import os
import pysftp
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

# Set up SFTP connection
SFTP_HOSTNAME = 'your_hostname'
SFTP_USERNAME = 'your_username'
SFTP_PASSWORD = 'your_password'

cnopts = pysftp.CnOpts()
cnopts.hostkeys = None
sftp = pysftp.Connection(host=SFTP_HOSTNAME, username=SFTP_USERNAME, password=SFTP_PASSWORD, cnopts=cnopts)

# Set up Google Drive connection
gauth = GoogleAuth()
gauth.LocalWebserverAuth()
drive = GoogleDrive(gauth)

# Set the local directory to scan for new images
LOCAL_DIR = '/path/to/local/folder'

# Set the remote SFTP directory to upload images to
REMOTE_DIR = '/path/to/remote/folder'

# Set the ID of the Google Drive folder to upload images to
FOLDER_ID = 'your_folder_id'

# Get a list of existing image files in the local directory
existing_images = set(os.listdir(LOCAL_DIR))

while True:
    # Get a list of current image files in the local directory
    current_images = set(os.listdir(LOCAL_DIR))

    # Find any new images that have been added
    new_images = current_images - existing_images

    # Upload new images to SFTP server and Google Drive
    for image in new_images:
        local_path = os.path.join(LOCAL_DIR, image)
        remote_path = os.path.join(REMOTE_DIR, image)

        # Upload to SFTP server
        sftp.put(local_path, remote_path)

        # Upload to Google Drive
        file_drive = drive.CreateFile({'title': image, 'parents': [{'id': FOLDER_ID}]})
        file_drive.SetContentFile(local_path)
        file_drive.Upload()

    # Update the list of existing images
    existing_images = current_images.copy()