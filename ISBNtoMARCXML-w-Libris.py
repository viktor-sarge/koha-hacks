# Import networking library to handle download from Libris
import urllib2

# Read the ISBNs to look for from a file and set up an array to parse
inputFile = open('ISBNtoMarc.txt', 'r')               # Telling the file system to open our input file for us. Note: It needs to be this specific name 
input = inputFile.read().splitlines()                 # Reading the contents of input file and getting rid of newlines
inputFile.close()                                     # Done with input file and closing it in the file system

librisUrlStart = "http://libris.kb.se/xsearch?query=NUMM:"  # Base URL for Libris XSEARCH API
librisUrlEnding = "&format=marcxml"                   # MARCXML is the only MARC format Libris offers
retrievedFromLibris = []

# Loop to iterate through whole list of ISBNs
for i in range(0, len(input)):                        # Looping through each ISBN in the input file
    downloadURL = librisUrlStart + input[i] + librisUrlEnding   # Piecing together the full URL to fetch for each individual record
    print downloadURL                                 # Printing the URL to download for reference - can be safely removed
    response = urllib2.urlopen(downloadURL)
    retrievedFromLibris.append(response.read())       # Adding the individual record/set to the list of fetched records   

outputFile = open('RetrievedFromLibris.txt', 'w+')    # Setting up an output file
for line in retrievedFromLibris:                      # Iterating over each retrieved record...
    outputFile.write(line)                            # ... and saving it to the output file
 
# Please note - this is a proof of concept, not a full implementation.
# There are challenges to handle like: 
# - Parsing the XML to identify no matches.
# - Handling matches from multiple records. 
# - Graceful error handling
