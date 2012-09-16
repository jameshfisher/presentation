// This script developed by John Blythe Dobson, j.dobson@uwinnipeg.ca
// originally released May 2007 (version 1.0)
// re-released June 2012 (version 2.0)
// This work is licensed under a Creative Commons
// Attribution-Noncommercial-Share Alike 3.0 License
// (see http://creativecommons.org/licenses/by-nc-sa/3.0/)


// the most easily-customizable parts of the script follow

// pick what to use as a divider before each section of notes.
// String cannot contain single quotation marks.
// For no divider, leave it blank but do not delete definition.
// e.g. var divider = '<p><hr noshade ></p>'
// e.g. var divider = ''

var divider = '';

// pick what type of heading to use for the word "notes"

var typeOfHeading = 'h2';


// find value of current block of notes
if (typeof endnoteBlock == 'undefined')
	{
	// initialize counter
	var endnoteBlock = -1;
	}
endnoteBlock++;

// check to see if there is an ancestral "endnoteBlock" div for current block of notes
// if not, assume that all notes are sitting inside the BODY tag
divCollection = document.getElementsByTagName("div")
var endnotePlacementDivsArray = [];
for ( var i = 0, j = divCollection.length ; i < j ; i++ )
	{
    if (divCollection.item(i).className.indexOf("endnoteBlock") != -1)
		{
		endnotePlacementDivsArray.push(divCollection.item(i));
		}
  	}
if (endnotePlacementDivsArray.length > 0)
	{
	scope = endnotePlacementDivsArray[endnoteBlock];
	}
else
	{
	scope = document;
	}

// find all span tags in current block
spanArray = scope.getElementsByTagName("span");
// then find which ones have the class "citation"
var citationArray = [];
for ( var i = 0, j = spanArray.length ; i < j ; i++ )
	{
    if (spanArray.item(i).className.indexOf("endnote") != -1)
		{
		citationArray.push(spanArray.item(i));
		}
  	}


document.write(divider+'<'+typeOfHeading+' class="citations">End notes</'+typeOfHeading+'> <ol class="citations">');

// use natural numbers to reference the note numbers required in the in-text citations
// and to the block numbers 

var endnoteBlockNaturalized = endnoteBlock + 1;

for(i=1; citationArray.length; i++)
	{
	// create the endnote and a corresponding anchor
	document.write('<a name="note_'+endnoteBlockNaturalized+'_'+i+'"></a><li><a class="goToCitation" title="go to citation" href="#citation_'+endnoteBlockNaturalized+'_'+i+'">^&nbsp;</a>'+citationArray[i-1].innerHTML+'</li>');
	// then replace original content of CITE tag with the citation number
	// and a corresponding anchor; note that we have to put a space after the
	// closing SUP tag to deal with current bugginess in support for innerHTML
	citationArray[i-1].innerHTML = '<a name="citation_'+endnoteBlockNaturalized+'_'+i+'"></a><a class="noteInText" href="#note_'+endnoteBlockNaturalized+'_'+i+'"><sup>['+i+']</sup></a> ';
	}

document.write('</ol>');
