from base64 import b64encode
with open("icon.py","w") as f:
    f.write('class Icon(object):\n')
    f.write('\tdef __init__(self):\n')
    f.write("\t\tself.img='")
with open("icon.ico","rb") as i:
    b64str = b64encode(i.read())
    with open("icon.py","ab+") as f:
        f.write(b64str)
with open("icon.py","a") as f:
    f.write("'")
    
#Then in main.py
from base64 import b64decode
from os import remove
from icon import Icon
with open('tmp.ico', 'wb') as tmp:
    tmp.write(b64decode(Icon().img))
app.setWindowIcon(QIcon('tmp.ico'))
remove('tmp.ico')
