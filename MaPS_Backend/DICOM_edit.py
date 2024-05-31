import pydicom
import os
import datetime


def main():
    """
    This script is used to edit DICOM files metadata.
    DICOM (Digital Imaging and Communications in Medicine) is a standard for transmitting, storing,
    retrieving, printing, processing, and displaying medical imaging information.
    """
    index = 0
    for file in os.listdir('DICOM'):
        if file.endswith('.dcm'):
            filepath = os.path.join('DICOM', file)
            ds = pydicom.dcmread(filepath)
            # Add a new element to metadata
            # https://www.dicomlibrary.com/dicom/dicom-tags/
            patient_hash = file.split('.')[0].split('_')[0]
            ds.add_new(0x00100010, 'PN', file.split('.')[0])
            ds.add_new(0x00100020, 'LO', patient_hash)
            ds.add_new(0x0020000D, "UI", str(index) + "." + str(index))
            ds.add_new(0x0020000E, "UI", str(index) + "." + str(index))
            ds.add_new(0x00080018, "UI", str(index) + "." + str(index))
            ds.add_new(0x00080020, "DA", datetime.datetime.now().strftime("%Y%m%d"))
            ds.add_new(0x00080030, "TM", datetime.datetime.now().strftime("%H%M%S"))
            ds.add_new(0x00200011, "IS", "1")
            ds.add_new(0x00081030, "LO", "Ejection rate USG hearth")
            ds.add_new(0x0008103E, "LO", "Ejection rate USG hearth")
            # Save the modified file
            ds.save_as(filepath)
            index += 1


if __name__ == "__main__":
    main()
