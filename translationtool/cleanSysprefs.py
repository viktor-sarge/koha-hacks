# This tool cleans the placeholder strings from Koha syspref translation files
# To use:
# 1) You need a Python interpreter installed on you system (OS X and Linux usually has by default)
# 2) Save to you own machine and replace the two filenames with your own source and target files. 
# 3) Put the script and translation file in the same directory 
# 4) Open a terminal window, enter the directory holding the translation file and the script. 
# 5) Run the script by writing "python cleanSysprefs.py" 
# 6) Inspect the resulting file before uploading. (Make shure it uses UTF-8 and Unix linefeeds. Run PoEdit validation)

f = open('sv-SE-pref.po.txt', 'r')
filecontents = f.readlines()
f.close()

for i in range(len(filecontents)):
    print "--- " + str(i) + " ------- "
    print "Working with: " + filecontents[i]
    if ("msgid" in filecontents[i]):
        startindex = filecontents[i].find('"')
        toRemove = filecontents[i][startindex + 1:]
        stopindex = toRemove.find(" ")
        toRemove = toRemove[:stopindex + 1]
        print "* To remove:" + toRemove
        if (i+1 < len(filecontents) and "msgstr" in filecontents[i+1] and filecontents[i+1].find(toRemove)):
            print "* Before replace - filecontents[i+1]:" + filecontents[i+1]
            filecontents[i+1] = filecontents[i+1].replace(toRemove, "")
            print "* After replace - filecontents[i+1]: " + filecontents[i+1]
    else:
        print "* (Did not touch this line)"
f = open('sv-SE-pref-Pythonfixed.po.txt', 'w+')
for line in filecontents:
    f.write(line)
